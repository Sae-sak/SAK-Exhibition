import {useTheme} from "next-themes";

export default function ThemeChanger() {
  const {theme, setTheme} = useTheme();

  return (
    <div className="mt-auto">
      <button
        className="inline-flex items-center px-4 py-0.2 text-base  border-b-2 focus:outline-none md:mt-0 hover:text-orange-400 hover:bg-gray-200 dark:hover:text-yellow-400 dark:hover:bg-slate-800  dark:text-slate-300"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <i className="ri-moon-fill"></i>
        ) : (
          <i className="ri-sun-fill"></i>
        )}
      </button>
    </div>
  );
}
