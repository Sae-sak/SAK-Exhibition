import { useTheme } from "next-themes";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="absolute mt-auto cursor-pointer bottom-16 focus:outline-none group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="px-8 py-0.2 mx-3 half-circle border-[1px] dark:border-night_font_1 border-light_font_1" />
      <div className="flex justify-between w-full">
        <i className="text-2xl text-orange-400 ri-sun-fill dark:group-hover:text-orange-400" />
        <i className="text-2xl ri-moon-fill group-hover:text-yellow-400 dark:text-yellow-400" />
      </div>
    </div>
  );
}
