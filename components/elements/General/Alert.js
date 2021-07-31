export default function Alert({ name, description, type }) {
  const outterClasses =
    type == "warning"
      ? "bg-yellow-100 border-t-4 border-yellow-500 text-yellow-900 px-4 py-3 mb-10"
      : type == "error"
      ? "bg-red-100 border-t-4 border-red-500 text-red-900 px-4 py-3 mb-10"
      : "bg-blue-100 border-t-4 border-blue-500 text-blue-900 px-4 py-3 mb-10";
  const svgClasses =
    type == "warning"
      ? "fill-current h-6 w-6 text-yellow-500 mr-4 mt-2"
      : type == "error"
      ? "fill-current h-6 w-6 text-red-500 mr-4 mt-2"
      : "fill-current h-6 w-6 text-blue-500 mr-4 mt-2";

  return (
    <div className={outterClasses} role="alert">
      <div className="flex">
        <div>
          <svg
            className={svgClasses}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"></path>
          </svg>
        </div>
        <div>
          <p className="font-bold !m-0">{name}</p>
          <p className="!mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
