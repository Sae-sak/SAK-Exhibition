import Alert from "@components/Alert";
import Logo from "./HeaderItem/Logo";
import MenuToggle from "./HeaderItem/MenuToggle";
import Chat from "@components/Chat";
import ChatButton from "./ChatButton";

export default function Header() {
  return (
    <div className="fixed top-0 z-40 w-full border-b bg-light_bg_1 dark:bg-night_bg_1">
      <header className="text-gray-600 body-font">
        <div className="container flex flex-wrap items-center justify-between gap-4 p-5 mx-auto">
          <Logo />
          <MenuToggle />
          <Alert />
          <ChatButton />
          <Chat />
        </div>
      </header>
    </div>
  );
}
