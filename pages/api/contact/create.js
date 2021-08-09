import { createContactMessage } from "@/lib/fauna";

export default async function handler(req, res) {
  const handlers = {
    POST: async () => {
      const {
        body: { website, name, email, message },
      } = req;

      const created = await createContactMessage({
        website,
        name,
        email,
        message,
        createdAt: "2021-09-08",
      });

      res.json(created);
    },
  };

  if (!handlers[req.method]) {
    return res.status(405).end();
  }

  await handlers[req.method]();
}
