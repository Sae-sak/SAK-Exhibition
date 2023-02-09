import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href={"/home"}>
      <div className="relative w-[72px]">
        <div className="z-30 block">
          <motion.span
            layoutId="S"
            className="text-2xl font-bold text-kgu_main_red"
          >
            S
          </motion.span>
          <motion.span
            layoutId="A"
            className="text-2xl font-bold text-kgu_main_yellow"
          >
            A
          </motion.span>
          <motion.span
            layoutId="K"
            className="text-[25px] font-bold text-kgu_main_green"
          >
            K
          </motion.span>
          <span>-</span>
          <motion.span
            layoutId="E"
            className="text-[25px] font-bold text-kgu_main_blue"
          >
            E
          </motion.span>
        </div>
        <div className="absolute top-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
        <div className="absolute bottom-[7px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
      </div>
    </Link>
  );
}
