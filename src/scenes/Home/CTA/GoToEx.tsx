import Link from "next/link";
import { motion } from "framer-motion";

export default function GoToEx() {
  return (
    <Link href="/exhibition">
      <motion.button className="rounded-full border border-font_black bg-accent_pink px-4 py-2 dark:border-font_white dark:bg-accent_green">
        <div className="row-center gap-2">
          <span className="text-accent font-accent text-2xl">
            See Exhibition
          </span>
          <i className="ri-arrow-right-line text-accent text-2xl"></i>
        </div>
      </motion.button>
    </Link>
  );
}
