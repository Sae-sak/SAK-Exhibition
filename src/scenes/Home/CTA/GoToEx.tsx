import Link from "next/link";
import { motion } from "framer-motion";

export default function GoToEx() {
  return (
    <Link href="/exhibition">
      <motion.button className="py-2 px-4 border border-font_black dark:border-font_white bg-accent_pink dark:bg-accent_green rounded-full">
        <div className="gap-2 row-center">
          <span className="text-2xl font-accent text-accent">
            See Exhibition
          </span>
          <i className="text-2xl ri-arrow-right-line text-accent"></i>
        </div>
      </motion.button>
    </Link>
  );
}
