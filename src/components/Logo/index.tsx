import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href={"/home"} className="gap-2 row-center group">
      <motion.div
        whileTap={{
          scale: 0.9,
        }}
        className="relative z-10 row-center"
      >
        <span className="text-2xl leading-4 transition-all font-accent border-y border-font_black dark:border-font_white">
          SAK-E
        </span>
      </motion.div>
    </Link>
  );
}
