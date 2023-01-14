import Image from "next/image";
import Link from "next/link";
import logo from "public/favicon/favicon.png";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-end font-medium text-gray-900 title-font md:mb-0"
    >
      <div>
        <Image src={logo} alt="Home" width={32} height={32} />
      </div>
      <h1 className="ml-3 text-2xl leading-4">SAK Exhibtion</h1>
    </Link>
  );
}
