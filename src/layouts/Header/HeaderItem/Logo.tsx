import Image from "next/image";
import Link from "next/link";
import logo from "public/favicon/favicon.png";

export default function Logo() {
  return (
    <Link href={"/home"}>
      <h1 className="text-2xl leading-4 border-gray-300 border-y">
        <span className="text-kgu_main_orange">S</span>
        <span className="text-kgu_main_yellow">A</span>
        <span className="text-kgu_main_green">K</span>{" "}
        <span className=" text-kgu_main_blue">E</span>
        xhibtion
      </h1>
    </Link>
  );
}
