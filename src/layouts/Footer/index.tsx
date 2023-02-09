import NavLink from "./FooterItem/NavLink";
import Logo from "./FooterItem/Logo";
import SimpleFooter from "./SimpleFooter";

export default function Footer() {
  return (
    <footer className="text-gray-600 border-t border-t-light_gray_3/30 dark:border-t-night_gray_3/30">
      {/* main footer */}
      <div className="container flex flex-wrap justify-between px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        {/* 네비게이션 */}
        <div className="flex flex-wrap flex-grow order-first my-auto text-center md:pr-32 md:text-left ">
          <NavLink linkpath={"home"} name={"Home"} />
          <NavLink linkpath={"about"} name={"About"} />
          <NavLink linkpath={"exhibition"} name={"Exhibition"} />
          <NavLink linkpath={"contactus"} name={"Contact Us"} />
        </div>

        {/* 로고 */}
        <div className="gap-6 mx-auto mt-5 text-center lg:pl-10 row-center md:mx-0 md:text-left md:mt-0">
          <Logo />
        </div>
      </div>

      {/* sub footer */}
      <SimpleFooter />
    </footer>
  );
}
