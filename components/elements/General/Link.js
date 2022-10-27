import Link from "next/link";

export default function LocalLink({ href, children }) {
  return (
    <Link href={href} className="underline" legacyBehavior>
      {children}
    </Link>
  );
}
