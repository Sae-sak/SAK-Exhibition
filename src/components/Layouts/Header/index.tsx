import ThemeChanger from "@components/Base/Util/Theme/ThemeChanger";
import Logo from "./HeaderItem/Logo";
import NavLink from "./HeaderItem/NavLink";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex-wrap gap-4 p-5 mx-auto row-center lg:justify-between sm:col-center">
        <div className="gap-6 row-end">
          {/* 로고홈 */}
          <Logo />

          {/* 토글 버튼 */}
          <ThemeChanger />
        </div>

        {/* 네비게이션 */}
        <nav className="text-base row-center sm:mt-auto ">
          <NavLink linkpath={""} name={"Home"} />
          <NavLink linkpath={"about"} name={"About"} />
          <NavLink linkpath={"exhibition"} name={"Exhibition"} />
          <NavLink linkpath={"contactus"} name={"Contact Us"} />
        </nav>
      </div>
    </header>
  );
}
