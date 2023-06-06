import Image from "next/image";
import poster from "public/images/poster.webp";

export default function Greetings() {
  return (
    <div className="p-8 border col-center lg:flex-row lg:justify-between xl:justify-center">
      <div className="w-full lg:w-1/2">
        <Image
          src={poster}
          width={600}
          height={500}
          alt="poster"
          quality={100}
          className="w-full"
        />
      </div>
      <div className="col-center w-full lg:w-1/2">
        <h1 className="text-2xl md:text-3xl text-center">
          56회 경기대학교 건축학과 온라인 졸업전시
        </h1>
      </div>
    </div>
  );
}
