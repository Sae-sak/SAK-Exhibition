import Image from "next/image";
import Link from "next/link";
import logo from "public/favicon/favicon.png";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
    >
      <Image src={logo} alt="Home" width={32} height={32} />
      <span className="ml-3 text-xl">SAK Exhibtion</span>
    </Link>
  );
}
