import ThemeChanger from "@components/Base/Util/Theme/ThemeChanger";
import Logo from "./HeaderItem/Logo";
import NavLink from "./HeaderItem/NavLink";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Logo />
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <NavLink linkpath={""} name={"Home"} />
          <NavLink linkpath={"about"} name={"About"} />
          <NavLink linkpath={"exhibition"} name={"Exhibition"} />
          <NavLink linkpath={"contactus"} name={"Contact Us"} />
          <ThemeChanger />
        </nav>
      </div>
    </header>
  );
}
