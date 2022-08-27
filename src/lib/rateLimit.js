// code from https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/utils/rate-limit.js

import LRU from "lru-cache";

const rateLimit = (options) => {
  const tokenCache = new LRU({
    max: parseInt(options.uniqueTokenPerInterval || 500, 10),
    ttl: parseInt(options.interval || 60000, 10),
  });

  return {
    check: (limit, token) =>
      new Promise((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= parseInt(limit, 10);

        return isRateLimited ? reject() : resolve();
      }),
  };
};

export default rateLimit;
