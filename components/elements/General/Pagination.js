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
    <div class="flex flex-wrap sm:-m-12 py-20">
      <div class="sm:p-12 w-full flex items-start justify-between">
        {previousPage == -1 && <span></span>}
        {previousPage != -1 && (
          <a
            class="inline-block px-2 py-1 font-bold bg-gray-300 rounded hover:bg-gray-600 hover:text-gray-100 !no-underline"
            href={`${href}?page=${previousPage}`}
            title="Página anterior"
          >
            Anterior
          </a>
        )}
        {nextPage == -1 && <span></span>}
        {nextPage != -1 && (
          <a
            class="inline-block px-2 py-1 font-bold bg-gray-300 rounded hover:bg-gray-600 hover:text-gray-100 !no-underline"
            href={`${href}?page=${nextPage}`}
            title="Próxima página"
          >
            Próxima
          </a>
        )}
      </div>
    </div>
  );
}
