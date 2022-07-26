import Link from "next/link";

export default function AlterEgoSection({ name, description, href }) {
  if (!name.length) {
    return (
      <div className="flex-1 pb-5 md:p-5">
        <p>&nbsp;</p>
      </div>
    );
  }
  return (
    <div className="flex-1 pb-5 md:p-5">
      <span className="block font-medium text-gray-700">{name}</span>
      <span className="inline-block mt-2 text-gray-400">{description}</span>
      <Link href={href} className="underline !text-yellow-500">
        Ler mais
      </Link>
    </div>
  );
}
