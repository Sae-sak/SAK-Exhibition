import Image from "next/image";
import Link from "next/link";
import logo from "public/favicon/favicon.png";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          href={"/"}
          className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
        >
          <Image src={logo} alt="Home" width={40} height={40} />

          <span className="ml-3 text-xl">SAK Exhibtion</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"/about"} className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href={"/exhibition"} className="mr-5 hover:text-gray-900">
            Exhibition
          </Link>
          <Link href={"/contactus"} className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
          Sign In
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
