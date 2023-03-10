import Logo from "./HeaderItem/Logo";
import MenuToggle from "./HeaderItem/MenuToggle";

export default function Header() {
  return (
    <div className="fixed top-0 z-40 w-full border-b bg-light_bg_1 dark:bg-night_bg_1">
      <header className="text-gray-600 body-font">
        <div className="container flex flex-wrap items-center justify-between gap-4 p-5 mx-auto">
          {/* 로고홈 */}
          <Logo />

          {/* 메뉴 토글 */}
          <MenuToggle />
        </div>
      </header>
    </div>
  );
}
