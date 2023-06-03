import Logo from "@components/Logo";
import MenuToggle from "./HeaderItem/MenuToggle";

export default function Header() {
  return (
    <div className="fixed top-0 z-40 w-full border-b bg-light_bg_1 dark:bg-night_bg_1">
      <header className="text-gray-600 body-font">
        <div className="container flex flex-wrap items-center justify-between gap-4 p-5 mx-auto">
          <Logo />
          <MenuToggle />
        </div>
      </header>
    </div>
  );
}
