import Link from "next/link";

export default function LocalLink({ href, children }) {
  return (
    <Link href={href} className="underline">
      {children}
    </Link>
  );
}
