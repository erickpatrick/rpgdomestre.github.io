import Image from "next/legacy/image";

export default function Img(props) {
  return (
    <Image
      alt="image alt"
      {...props}
      width={1000}
      height={563}
      loading="lazy"
    />
  );
}
