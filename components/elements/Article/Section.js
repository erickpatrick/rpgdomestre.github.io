import Link from "next/link";

export default function ArticleSection({ title, href, children }) {
  return (
    <div className="sm:p-12 md:w-1/2 flex flex-col items-start">
      <h3 className="sm:text-3xl text-2xl title-font font-medium !text-pink-600 mt-4 mb-4">
        {title}
      </h3>
      <p className="leading-relaxed mb-8">{children}</p>
      <Link href={href} className="!text-pink-600 inline-flex items-center">
        Ler mais »
      </Link>
    </div>
  );
}
