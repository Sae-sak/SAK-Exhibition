import Image from "next/image";
import Link from "next/link";
import logo from "public/favicon/favicon.png";
import Links from "./Links";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto mt-10 text-center md:mx-0 md:text-left md:mt-0">
          <Link
            href={"/"}
            className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
          >
            <Image src={logo} alt="Home" width={40} height={40} />
            <span className="ml-3 text-xl">SAK Exhibtion</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex flex-wrap flex-grow order-first -mb-10 text-center md:pr-20 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <Link
              href={"/"}
              className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              Home
            </Link>
            <nav className="mb-10 list-none">
              {/* <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li> */}
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <Link
              href={"/about"}
              className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              About
            </Link>
            <nav className="mb-10 list-none">
              {/* <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li> */}
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <Link
              href={"/exhibition"}
              className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              Exhibition
            </Link>
            <nav className="mb-10 list-none">
              {/* <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li> */}
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <Link
              href={"/contactus"}
              className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              Contact Us
            </Link>
            <nav className="mb-10 list-none">
              {/* <li>
                <a className="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li> */}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">
            © 2022 SAK —{" "}
            <a
              href="https://github.com/kimyoo04/SAK-Exhibition"
              className="ml-1 text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              @kimyoo04
            </a>
          </p>
          <Links />
        </div>
      </div>
    </footer>
  );
}
