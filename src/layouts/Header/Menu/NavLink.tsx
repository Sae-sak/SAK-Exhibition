import Link from "next/link";
import { useRouter } from "next/router";

const colorVariants = {
  red: {
    textActive: "text-kgu_main_red",
    textHover: "group-hover:text-kgu_main_red",
    borderActive: "w-48 bg-kgu_main_red",
    borderHover: "group-hover:bg-kgu_main_red",
  },
  yellow: {
    textActive: "text-kgu_main_yellow",
    textHover: "group-hover:text-kgu_main_yellow",
    borderActive: "w-48 bg-kgu_main_yellow",
    borderHover: "group-hover:bg-kgu_main_yellow",
  },
  blue: {
    textActive: "text-kgu_main_blue",
    textHover: "group-hover:text-kgu_main_blue",
    borderActive: "w-48 bg-kgu_main_blue",
    borderHover: "group-hover:bg-kgu_main_blue",
  },
  green: {
    textActive: "text-kgu_main_green",
    textHover: "group-hover:text-kgu_main_green",
    borderActive: "w-48 bg-kgu_main_green",
    borderHover: "group-hover:bg-kgu_main_green",
  },
};

export default function NavLink({ linkpath, name }) {
  const router = useRouter();
  const link = `/${linkpath}`;

  return (
    <Link href={link} className="group">
      <div
        className={`block w-8 h-[1px] transition-all duration-500 group-hover:w-48 ${
          "/home" === router.pathname && "/home" === link
            ? colorVariants.red.borderActive
            : "/about" === router.pathname && "/about" === link
            ? colorVariants.yellow.borderActive
            : router.pathname.includes("/exhibition") && "/exhibition" === link
            ? colorVariants.blue.borderActive
            : "/contactus" === router.pathname && "/contactus" === link
            ? colorVariants.green.borderActive
            : null
        } ${
          "/home" === link
            ? colorVariants.red.borderHover
            : "/about" === link
            ? colorVariants.yellow.borderHover
            : "/exhibition" === link
            ? colorVariants.blue.borderHover
            : "/contactus" === link
            ? colorVariants.green.borderHover
            : null
        }`}
      />
      <span
        className={`text-4xl transition-all duration-500  ${
          "/home" === router.pathname && "/home" === link
            ? colorVariants.red.textActive
            : "/about" === router.pathname && "/about" === link
            ? colorVariants.yellow.textActive
            : router.pathname.includes("/exhibition") && "/exhibition" === link
            ? colorVariants.blue.textActive
            : "/contactus" === router.pathname && "/contactus" === link
            ? colorVariants.green.textActive
            : null
        } ${
          "/home" === link
            ? colorVariants.red.textHover
            : "/about" === link
            ? colorVariants.yellow.textHover
            : "/exhibition" === link
            ? colorVariants.blue.textHover
            : "/contactus" === link
            ? colorVariants.green.textHover
            : null
        }`}
      >
        {name}
      </span>
      <div
        className={`block w-8 h-[1px] transition-all duration-500 group-hover:w-48 ${
          "/home" === router.pathname && "/home" === link
            ? colorVariants.red.borderActive
            : "/about" === router.pathname && "/about" === link
            ? colorVariants.yellow.borderActive
            : router.pathname.includes("/exhibition") && "/exhibition" === link
            ? colorVariants.blue.borderActive
            : "/contactus" === router.pathname && "/contactus" === link
            ? colorVariants.green.borderActive
            : null
        } ${
          "/home" === link
            ? colorVariants.red.borderHover
            : "/about" === link
            ? colorVariants.yellow.borderHover
            : "/exhibition" === link
            ? colorVariants.blue.borderHover
            : "/contactus" === link
            ? colorVariants.green.borderHover
            : null
        }`}
      />
    </Link>
  );
}
