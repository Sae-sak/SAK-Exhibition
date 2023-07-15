import Logo from "./FooterItem/Logo";
import NavLink from "./FooterItem/NavLink";

export default function MainFooter() {
  return (
    <div className="container flex-wrap gap-5 px-5 py-5 mx-auto col-center md:justify-between md:flex-row md:gap-0">
      {/* 네비게이션 */}
      <div className="flex flex-wrap flex-grow order-first gap-2 my-auto text-center md:pr-32 md:text-left md:gap-0">
        <NavLink linkpath={"home"} name={"Home"} />
        <NavLink linkpath={"about"} name={"About"} />
        <NavLink linkpath={"exhibition"} name={"Exhibition"} />
        <NavLink linkpath={"contactus"} name={"Contact Us"} />
      </div>

      {/* 로고 */}
      <div className="col-center">
        <Logo />
      </div>
    </div>
  );
}
