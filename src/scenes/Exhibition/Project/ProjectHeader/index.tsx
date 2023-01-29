import Image from "next/image";

export default function ProjectHeader({ title, name, excerpt, thumbnailImg }) {
  return (
    <header className="relative h-96">
      {/* Student Name */}
      <span className="absolute z-10 text-2xl text-white font-titleKR top-24 left-8">
        {name}
      </span>

      {/* Project Title */}
      <span className="absolute z-10 text-4xl text-white font-titleKR top-36 left-8">
        {title}
      </span>

      {/* Background Image */}
      <div className="absolute w-full h-96 cover-fill">
        <div
          className="w-full h-full"
          style={{ backgroundImage: `url(${thumbnailImg})` }}
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

      {/* Excerpt */}
      <div className="absolute z-10 pr-32 top-60 left-8">
        <span className="text-xl text-white font-titleKR ">{excerpt}</span>
      </div>
    </header>
  );
}
