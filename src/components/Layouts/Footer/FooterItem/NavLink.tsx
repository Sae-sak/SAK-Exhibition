import Link from "next/link";

export default function NavLink({linkpath, name}) {
  return (
    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
      <Link
        href={`/${linkpath}`}
        className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font"
      >
        {name}
      </Link>
    </div>
  );
}
