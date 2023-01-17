import Image from "next/image";

export default function ProjectHeader({title, thumbnailImg}) {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={thumbnailImg} alt={"thumbnail"} width={300} height={200} />
    </header>
  );
}
