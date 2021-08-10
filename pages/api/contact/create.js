// code adapted from https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/pages/api/user.js

import { createContactMessage } from "@/lib/fauna";
import rateLimit from "@/lib/rateLimit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(req, res) {
  const handlers = {
    POST: async () => {
      const {
        body: { website, name, email, message },
      } = req;

      const date = new Date();
      const year = date.getFullYear();
      const month =
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      const dateValue = `${year}-${month}-${day}`;

      const created = await createContactMessage({
        website,
        name,
        email,
        message,
        createdAt: dateValue,
      });

      return res.json(created);
    },
  };

  if (!handlers[req.method]) {
    return res.status(405).end();
  }

  try {
    // 60 requests per minute
    await limiter.check(res, 60, "CONTACT_CREATE_CACHE_TOKEN");
    await handlers[req.method]();
  } catch {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }
}
