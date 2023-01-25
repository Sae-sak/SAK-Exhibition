import Image from "next/image";

export default function ProjectHeader({title, excerpt, thumbnailImg}) {
  return (
    <header className="relative h-96">
      {/* Project Title */}
      <h1 className="absolute z-10 text-4xl font-bold text-white font-titleKR top-40 left-8">
        {title}
      </h1>

      {/* Background Image */}
      <div className="absolute w-full h-96 cover-fill">
        <div
          className="w-full h-full"
          style={{backgroundImage: `url(${thumbnailImg})`}}
        ></div>
      </div>

      {/* Gradient */}
      <div
        className="absolute w-full h-96"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(255,0,0,0), rgba(0,0,0,1))",
        }}
      ></div>

      <div className="absolute z-10 pr-32 top-56 left-8">
        <h3 className="text-xl text-white font-titleKR ">{excerpt}</h3>
      </div>
    </header>
  );
}
