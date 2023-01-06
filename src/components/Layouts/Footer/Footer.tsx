import Image from "next/image";
import Link from "next/link";
import logo from "public/favicon/favicon.png";

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
              href={"/comment"}
              className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              Comment
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
              href={"/news"}
              className="mb-3 text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              News
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
      <div className="bg-gray-100">
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
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12Linkz"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
