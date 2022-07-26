import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul className="text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              Weekly
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/weekly"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Todos as edições
                </Link>
              </li>
              <li>
                <Link
                  href="/weekly/envie-um-link"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Envie um link
                </Link>
              </li>
              <li>
                <Link
                  href="/weekly/anuncie-na-weekly"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Anuncie na Weekly
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              Artigos
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/artigos"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Todos os artigos
                </Link>
              </li>
              <li>
                <Link
                  href="/artigos/envie-uma-correcao"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Envie uma correção
                </Link>
              </li>
              <li>
                <Link
                  href="/artigos/artigos-patrocinados"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Artigos patrocinados
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              Alter Ego
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/alter-ego/sistema"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Sistema
                </Link>
              </li>
              <li>
                <Link
                  href="/alter-ego/cenarios"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Cenários
                </Link>
              </li>
              <li>
                <Link
                  href="/alter-ego/ficcao"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Ficção
                </Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">
              RPG do Mestre
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/sobre"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/rpgdm"
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="pt-10 sm:pt-12">RPG do Mestre © 2021</div>
      </div>
    </footer>
  );
}
