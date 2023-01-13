import Link from "next/link";

export default function NavLink({linkpath, name}) {
  return (
    <Link href={`/${linkpath}`} className="mr-5 hover:text-gray-900">
      {name}
    </Link>
  );
}
