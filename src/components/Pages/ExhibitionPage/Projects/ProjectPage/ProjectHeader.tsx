import Image from "next/image";

export default function ProjectHeader({title, thumbnail, namepath}) {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={thumbnail} alt={namepath} width={300} height={200} />
    </header>
  );
}
