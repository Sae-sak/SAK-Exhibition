import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href={"/home"} className="relative h-[32px]">
      <div className="absolute left-0 top-2">
        <div className="top-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
        <div className="w-[72px] z-20 h-4"></div>
        <div className="bottom-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
      </div>
      <div className="absolute w-[72px] z-20">
        <motion.span
          layoutId="S"
          className="text-2xl font-bold text-kgu_main_red dark:text-kgu_main_red"
        >
          S
        </motion.span>
        <motion.span
          layoutId="A"
          className="text-2xl font-bold text-kgu_main_yellow dark:text-kgu_main_yellow"
        >
          A
        </motion.span>
        <motion.span
          layoutId="K"
          className="text-2xl font-bold text-kgu_main_green dark:text-kgu_main_green"
        >
          K
        </motion.span>
        <span className="">-</span>
        <motion.span
          layoutId="E"
          className="text-2xl font-bold text-kgu_main_blue dark:text-kgu_main_blue"
        >
          E
        </motion.span>
      </div>
    </Link>
  );
}
