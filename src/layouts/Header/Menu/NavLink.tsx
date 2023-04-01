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
          className={`block w-8 h-[1px] transition-all duration-500 group-hover:w-48 ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.red.borderActive
              : "/about" === router.pathname && "/about" === link
              ? colorVariants.yellow.borderActive
              : router.pathname.includes("/exhibition") &&
                "/exhibition" === link
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
              : router.pathname.includes("/exhibition") &&
                "/exhibition" === link
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
              : router.pathname.includes("/exhibition") &&
                "/exhibition" === link
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
    </motion.div>
  );
}
