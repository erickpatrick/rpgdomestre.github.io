import { listLatestContactMessage } from "@/lib/fauna";

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

  await handlers[req.method]();
}
