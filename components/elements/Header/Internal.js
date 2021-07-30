import Link from "next/link";

export default function HeaderInternal() {
  return (
    <div className="sm:flex sm:justify-between text-center sm:py-16">
      <Link href="/">
        <a className="flex py-8 sm:flex-item sm:py-0 items-center justify-center">
          <img
            src="images/mestre.jpg"
            width="80"
            height="80"
            alt="Logo RPG do Mestre"
          />

          <span className="text-left pl-1">
            <span className="block text-3xl font-semibold -mb-2 text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-pink-600">
              RPG do
            </span>
            <span className="block text-4xl font-black text-transparent bg-gradient-to-r bg-clip-text from-pink-600 to-yellow-300">
              Mestre
            </span>
          </span>
        </a>
      </Link>
      <ul className="flex items-center justify-center sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase">
        <li className="sm:flex-auto">
          <Link href="/weekly">
            <a className="p-2 sm:p-4 hover:underline text-blue-600">Weekly</a>
          </Link>
        </li>
        <li className="sm:flex-auto">
          <Link href="/artigos">
            <a className="p-2 sm:p-4 hover:underline text-pink-600">Artigos</a>
          </Link>
        </li>
        <li className="sm:flex-auto">
          <Link href="/alter-ego">
            <a className="p-2 sm:p-4 hover:underline text-yellow-500">
              Alter Ego
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
