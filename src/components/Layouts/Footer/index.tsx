import SNS from "./FooterItem/SNS";
import NavLink from "./FooterItem/NavLink";
import Links from "./FooterItem/Links";
import Copywrite from "./FooterItem/Copywrite";
import Logo from "./FooterItem/Logo";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex-wrap justify-between px-5 py-12 mx-auto row-center md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex flex-wrap flex-grow order-first text-center md:pr-20 md:text-left">
          <NavLink linkpath={""} name={"Home"} />
          <NavLink linkpath={"about"} name={"About"} />
          <NavLink linkpath={"exhibition"} name={"Exhibition"} />
          <NavLink linkpath={"contactus"} name={"Contact Us"} />
        </div>
        <div className="flex-shrink-0 gap-6 pl-10 pr-5 mx-auto mt-5 text-center col-center md:mx-0 md:text-left md:mt-0">
          <Logo />
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="container flex-wrap gap-2 px-5 py-4 mx-auto col-center sm:flex-row">
          <Links />
          <Copywrite />
          <SNS />
        </div>
      </div>
    </footer>
  );
}
