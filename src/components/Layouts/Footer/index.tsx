import SNS from "./FooterItem/SNS";
import NavLink from "./FooterItem/NavLink";
import Links from "./FooterItem/Links";
import Copywrite from "./FooterItem/Copywrite";
import Logo from "./FooterItem/Logo";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      {/* main footer */}
      <div className="container flex flex-wrap justify-between px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        {/* 네비게이션 */}
        <div className="flex flex-wrap flex-grow order-first my-auto text-center lg:pl-4 md:pr-32 md:text-left ">
          <NavLink linkpath={""} name={"Home"} />
          <NavLink linkpath={"about"} name={"About"} />
          <NavLink linkpath={"exhibition"} name={"Exhibition"} />
          <NavLink linkpath={"contactus"} name={"Contact Us"} />
        </div>

        {/* 로고 */}
        <div className="gap-6 pr-4 mx-auto mt-5 text-center lg:pl-10 row-center md:mx-0 md:text-left md:mt-0">
          <Logo />
        </div>
      </div>

      {/* sub footer */}
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
