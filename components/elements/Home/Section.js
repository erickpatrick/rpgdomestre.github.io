export default function Section({ name, subtitle, description, href, color }) {
  return (
    <div className={`${name} lg:w-1/3`}>
      <div className="px-4 sm:px-6 md:px-8 mb-10 sm:mb-16 md:mb-20">
        <h2
          className={`sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-${color}-600 mb-3`}
        >
          {name}
        </h2>
        <p className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
          {subtitle}
        </p>
        <p className="max-w-4xl text-lg sm:text-2xl sm:leading-10 space-y-6 mb-6">
          {description}
        </p>
        <a
          className={`inline-flex text-lg sm:text-2xl font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-current focus:outline-none rounded-md text-${color}-600 hover:text-${color}-800`}
          href={href}
        >
          Saiba mais &raquo;
        </a>
      </div>
    </div>
  );
}
