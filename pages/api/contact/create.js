import { createContactMessage } from "@/lib/fauna";

export default async function handler(req, res) {
  const handlers = {
    POST: async () => {
      const {
        body: { website, name, email, message },
      } = req;

      const date = new Date();
      const year = date.getFullYear();
      const month =
        date.getUTCMonth() < 10 ? "0" + date.getUTCMonth() : date.getUTCMonth();
      const day =
        date.getUTCDay() < 10 ? "0" + date.getUTCDay() : date.getUTCDay();
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

  await handlers[req.method]();
}
