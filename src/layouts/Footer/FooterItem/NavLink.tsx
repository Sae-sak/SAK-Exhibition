import Link from "next/link";
import { useRouter } from "next/router";

const colorVariants = {
  red: {
    active: "text-font_accent dark:text-font_accent",
    hover: "hover:text-font_accent dark:hover:text-font_accent",
  },
  yellow: {
    active: "text-font_accent dark:text-font_accent",
    hover: "hover:text-font_accent dark:hover:text-font_accent",
  },
  blue: {
    active: "text-font_accent dark:text-font_accent",
    hover: "hover:text-font_accent dark:hover:text-font_accent",
  },
  green: {
    active: "text-font_accent dark:text-font_accent",
    hover: "hover:text-font_accent dark:hover:text-font_accent",
  },
};

export default function NavLink({ linkpath, name }) {
  const router = useRouter();
  const link = `/${linkpath}`;

  return (
    <div className="w-full lg:w-1/4 md:w-1/2">
      <Link
        href={link}
        className="mb-3 text-sm font-bold tracking-widest font-title"
      >
        <span
          className={`block font-title ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.red.active
              : "/about" === router.pathname && "/about" === link
              ? colorVariants.yellow.active
              : router.pathname.includes("/exhibition") &&
                "/exhibition" === link
              ? colorVariants.blue.active
              : "/contactus" === router.pathname && "/contactus" === link
              ? colorVariants.green.active
              : null
          } ${
            "/home" === link
              ? colorVariants.red.hover
              : "/about" === link
              ? colorVariants.yellow.hover
              : "/exhibition" === link
              ? colorVariants.blue.hover
              : "/contactus" === link
              ? colorVariants.green.hover
              : null
          }`}
        >
          {name}
        </span>
      </Link>
    </div>
  );
}
