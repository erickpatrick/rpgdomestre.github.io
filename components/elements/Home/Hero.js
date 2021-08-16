import Image from "next/image";
import logo from "../../../public/images/mestre.jpg";

export default function HomeHero() {
  return (
    <div className="flex items-center justify-center py-16 md:py-32">
      <Image
        className="w-20 sm:w-44"
        src={logo}
        alt="Logo RPG do Mestre"
        layout="responsive"
        width={176}
        height={176}
      />
      <h1 className="font-bold">
        <span className="block -mb-2 sm:-mb-5 text-3xl sm:text-7xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-blue-600 to-pink-600">
          RPG do
        </span>
        <span className="block text-5xl sm:text-9xl font-black text-transparent bg-gradient-to-r bg-clip-text from-pink-600 to-yellow-300">
          Mestre
        </span>
      </h1>
    </div>
  );
}
