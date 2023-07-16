export default function ProjectHeader({ title, name, excerpt, thumbnail }) {
  return (
    <header className="relative h-96 overflow-hidden pt-4">
      <div className="absolute z-10 flex h-full w-full justify-start pl-5">
        <div className="flex flex-col items-start justify-center gap-4 font-title text-white">
          {/* Student Name */}
          <h2 className="left-8 top-16 font-title text-lg font-bold text-white md:top-24 md:text-xl">
            {name}
          </h2>

          {/* Project Title */}
          <h1 className="left-8 top-28 font-title text-2xl font-bold text-white md:top-36 md:text-4xl">
            {title}
          </h1>

          {/* Excerpt */}
          <p className="left-8 top-52 pr-4  text-sm text-white md:top-60 md:pr-32 md:text-[16px]">
            {excerpt}
          </p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute h-96 w-full">
        <div
          className="h-full w-full "
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%), url(${thumbnail})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <div className="absolute h-96 w-full"></div>
    </header>
  );
}
