// code adapted from https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/pages/api/user.js

import { createContactMessage } from "@/lib/fauna";
import rateLimit from "@/lib/rateLimit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export default async function handler(req, res) {
  const handlers = {
    GET: async () => {
      const entries = await listLatestContactMessage();
      res.json(entries);
    },
  };

  if (!handlers[req.method]) {
    return res.status(405).end();
  }

  try {
    // 60 requests per minute
    await limiter.check(res, 60, "CONTACT_INDEX_CACHE_TOKEN");
    await handlers[req.method]();
  } catch {
    return res.status(429).json({ error: "Rate limit exceeded" });
  }
}
