// code adapted from https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/pages/api/user.js

import { listLatestContactMessage } from "@/lib/fauna";
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
    await limiter.check(res, 10, "CONTACT_INDEX_CACHE_TOKEN");
    await handlers[req.method]();
  } catch {
    res.status(429).json({ error: "Rate limit exceeded" });
  }
}
