import Image from "next/legacy/image";

export default function LocalImage(props) {
  return (
    <Image
      alt="image alt"
      {...props}
      width={16}
      height={9}
      quality={65}
      layout="responsive"
      loading="lazy"
    />
  );
}
