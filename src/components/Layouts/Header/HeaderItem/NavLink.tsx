import Link from "next/link";
import {useRouter} from "next/router";

const colorVariants = {
  orange: {
    active: "text-kgu_main_orange border-b-kgu_main_orange",
    hover: "hover:text-kgu_main_orange hover:border-b-kgu_main_orange",
  },
  yellow: {
    active: "text-kgu_main_yellow border-b-kgu_main_yellow",
    hover: "hover:text-kgu_main_yellow hover:border-b-kgu_main_yellow",
  },
  blue: {
    active: "text-kgu_main_blue border-b-kgu_main_blue",
    hover: "hover:text-kgu_main_blue hover:border-b-kgu_main_blue",
  },
  green: {
    active: "text-kgu_main_green border-b-kgu_main_green",
    hover: "hover:text-kgu_main_green hover:border-b-kgu_main_green",
  },
};

export default function NavLink({linkpath, name}) {
  const router = useRouter();
  const link = `/${linkpath}`;

  return (
    <Link href={link}>
      <span
        className={`block w-32 border-b-2 px-auto col-center font-title ${
          "/" === router.pathname && "/" === link
            ? colorVariants.orange.active
            : "/about" === router.pathname && "/about" === link
            ? colorVariants.yellow.active
            : "/exhibition" === router.pathname && "/exhibition" === link
            ? colorVariants.blue.active
            : "/contactus" === router.pathname && "/contactus" === link
            ? colorVariants.green.active
            : null
        } ${
          "/" === link
            ? colorVariants.orange.hover
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
  );
}
