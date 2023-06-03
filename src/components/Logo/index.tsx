import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href={"/home"} className="relative h-[32px]">
      <div className="absolute z-10 left-0 top-2">
        <div className="top-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
        <div className="w-[66px] h-4"></div>
        <div className="bottom-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
      </div>
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        className="absolute w-[66px] z-10 font-accent"
      >
        <div className="relative">
          <span className="text-2xl font-bold">SAK-E</span>
          <span className="absolute -left-[1px] text-2xl font-bold text-outline">
            SAK-E
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
