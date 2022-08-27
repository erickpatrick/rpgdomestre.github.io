// code adapted from https://github.com/vercel/next.js/blob/canary/examples/api-routes-rate-limit/pages/api/user.js

import { createContactMessage } from "../../../lib/fauna";
import rateLimit from "../../../lib/rateLimit";

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export async function get({ params, request }) {
  return new Response(JSON.stringify({}), {
    status: 200,
  });
}

export async function post({ params, request }) {
  try {
    const json = await request.json();
    // 60 requests per minute
    await limiter.check(60, "CONTACT_CREATE_CACHE_TOKEN");
    const { website, name, email, message } = json;

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

    return new Response(JSON.stringify(created), {
      status: 200,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "Rate limit exceeded", myError: e.message }),
      {
        status: 429,
      }
    );
  }
}
