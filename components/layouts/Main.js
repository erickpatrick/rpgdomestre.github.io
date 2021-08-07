import { MDXProvider } from "@mdx-js/react";
import Footer from "@/components/elements/Footer";
import Image from "@/components/elements/General/Image";
import Link from "@/components/elements/General/Link";

const components = {
  img: Image,
  link: Link,
};

export default function Main({ children }) {
  return (
    <>
      <MDXProvider components={components}>{children}</MDXProvider>
      <Footer />
    </>
  );
}
