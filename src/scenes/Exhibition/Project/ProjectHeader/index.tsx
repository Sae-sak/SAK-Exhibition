import Image from "next/image";

export default function ProjectHeader({ title, name, excerpt, thumbnailImg }) {
  return (
    <header className="relative pt-4 overflow-hidden h-96">
      <div className="absolute z-10 flex justify-start w-full h-full pl-5">
        <div className="flex flex-col items-start justify-center gap-4 text-white font-title">
          {/* Student Name */}
          <h2 className="text-lg font-bold text-white font-title md:text-xl top-16 md:top-24 left-8">
            {name}
          </h2>

          {/* Project Title */}
          <h1 className="text-2xl font-bold text-white font-title md:text-4xl top-28 md:top-36 left-8">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="pr-4 text-sm text-white  top-52 md:text-[16px] md:top-60 md:pr-32 left-8">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute w-full h-96 cover-fill">
        <div
          className="w-full h-full"
          style={{ backgroundImage: `url(${thumbnailImg})` }}
        ></div>
      </div>

      <div className="absolute w-full h-96"></div>
    </header>
  );
}
