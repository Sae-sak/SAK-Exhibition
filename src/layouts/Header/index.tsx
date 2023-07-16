import Logo from "@components/Logo";
import MenuToggle from "./HeaderItem/MenuToggle";

export default function Header() {
  return (
    <div className="fixed top-0 z-40 w-full border-b bg-light_bg_1 dark:bg-night_bg_1">
      <header className="body-font text-gray-600">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-5 py-3">
          <Logo />
          <MenuToggle />
        </div>
      </header>
    </div>
  );
}
