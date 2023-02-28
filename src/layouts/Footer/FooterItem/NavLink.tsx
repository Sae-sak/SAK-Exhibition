import Link from "next/link";
import { useRouter } from "next/router";

const colorVariants = {
  red: {
    active: "text-kgu_main_red",
    hover: "hover:text-kgu_main_red",
  },
  yellow: {
    active: "text-kgu_main_yellow",
    hover: "hover:text-kgu_main_yellow",
  },
  blue: {
    active: "text-kgu_main_blue",
    hover: "hover:text-kgu_main_blue",
  },
  green: {
    active: "text-kgu_main_green",
    hover: "hover:text-kgu_main_green",
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
