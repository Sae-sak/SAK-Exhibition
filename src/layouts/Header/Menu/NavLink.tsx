import { colorVariants } from "@util/Theme/colorVariants";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeIn } from "@util/variants";

export default function NavLink({
  linkpath,
  name,
  delay,
}: {
  linkpath: string;
  name: string;
  delay: number;
}) {
  const router = useRouter();
  const link = `/${linkpath}`;

  return (
    <motion.div variants={fadeIn("left", "easeInOut", delay, 0.4)}>
      <Link href={link} className="group">
        <div
          className={`block h-[1px] w-8 transition-all duration-500 group-hover:w-28 md:group-hover:w-36 ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.borderActive
              : "/about" === router.pathname && "/about" === link
              ? colorVariants.borderActive
              : router.pathname.includes("/exhibition") &&
                "/exhibition" === link
              ? colorVariants.borderActive
              : "/contactus" === router.pathname && "/contactus" === link
              ? colorVariants.borderActive
              : null
          } ${
            "/home" === link
              ? colorVariants.borderHover
              : "/about" === link
              ? colorVariants.borderHover
              : "/exhibition" === link
              ? colorVariants.borderHover
              : "/contactus" === link
              ? colorVariants.borderHover
              : null
          }`}
        />
        <span
          className={`font-accent text-2xl transition-all duration-500 md:text-3xl ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.textActive
              : "/about" === router.pathname && "/about" === link
              ? colorVariants.textActive
              : router.pathname.includes("/exhibition") &&
                "/exhibition" === link
              ? colorVariants.textActive
              : "/contactus" === router.pathname && "/contactus" === link
              ? colorVariants.textActive
              : null
          } ${
            "/home" === link
              ? colorVariants.textHover
              : "/about" === link
              ? colorVariants.textHover
              : "/exhibition" === link
              ? colorVariants.textHover
              : "/contactus" === link
              ? colorVariants.textHover
              : null
          }`}
        >
          {name}
        </span>

        <div
          className={`block h-[1px] w-8 transition-all duration-500 group-hover:w-28 md:group-hover:w-36 ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.borderActive
              : "/about" === router.pathname && "/about" === link
              ? colorVariants.borderActive
              : router.pathname.includes("/exhibition") &&
                "/exhibition" === link
              ? colorVariants.borderActive
              : "/contactus" === router.pathname && "/contactus" === link
              ? colorVariants.borderActive
              : null
          } ${
            "/home" === link
              ? colorVariants.borderHover
              : "/about" === link
              ? colorVariants.borderHover
              : "/exhibition" === link
              ? colorVariants.borderHover
              : "/contactus" === link
              ? colorVariants.borderHover
              : null
          }`}
        />
      </Link>
    </motion.div>
  );
}
