export default function ContentReference({ type, name, children }) {
  const baseClasses =
    type == "artigo"
      ? "p-5 bg-pink-100"
      : type == "weekly"
      ? "p-5 bg-yellow-100"
      : "p-5 bg-blue-100";
  return (
    <div className={baseClasses}>
      <strong className="block">{name}</strong>
      {children}
    </div>
  );
}
