import { MDXProvider } from "@mdx-js/react";
import Footer from "@/components/elements/Footer";
import Image from "next/image";

const components = {
  img: function NextImage(props) {
    return (
      <Image
        alt="image alt"
        {...props}
        width={16}
        height={9}
        layout="responsive"
        quality={65}
        layout="responsive"
        loading="lazy"
      />
    );
  },
};

export default function Main({ children }) {
  return (
    <>
      <MDXProvider components={components}>{children}</MDXProvider>
      <Footer />
    </>
  );
}
