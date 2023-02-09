import Logo from "./HeaderItem/Logo";
import MenuToggle from "./HeaderItem/MenuToggle";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-wrap items-center justify-between gap-4 p-5 mx-auto">
        {/* 로고홈 */}
        <Logo />

        {/* 메뉴 토글 */}
        <MenuToggle />
      </div>
    </header>
  );
}
