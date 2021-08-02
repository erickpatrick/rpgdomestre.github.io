import Link from "next/link";

export default function Pagination({ page, perPage, itemsCount, href }) {
  const splitBy = Math.round(itemsCount / perPage);
  const pages =
    itemsCount < perPage
      ? 1
      : itemsCount % perPage == 0
      ? splitBy
      : splitBy + 1;
  const previousPage = page > 1 ? parseInt(page) - 1 : -1;
  const nextPage = page < pages ? parseInt(page) + 1 : -1;

  return (
    <div className="flex flex-wrap sm:-m-12 py-20">
      <div className="sm:p-12 w-full flex items-start justify-between">
        {previousPage == -1 && <span></span>}
        {previousPage != -1 && (
          <Link href={`${href}?page=${previousPage}`}>
            <a
              className="inline-block px-2 py-1 font-bold bg-gray-300 rounded hover:bg-gray-600 hover:text-gray-100 !no-underline"
              title="Página anterior"
            >
              Anterior
            </a>
          </Link>
        )}
        {nextPage == -1 && <span></span>}
        {nextPage != -1 && (
          <Link href={`${href}?page=${nextPage}`}>
            <a
              className="inline-block px-2 py-1 font-bold bg-gray-300 rounded hover:bg-gray-600 hover:text-gray-100 !no-underline"
              title="Próxima página"
            >
              Próxima
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
