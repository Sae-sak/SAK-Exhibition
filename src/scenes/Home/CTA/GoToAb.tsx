import Link from "next/link";
import { motion } from "framer-motion";

export default function GoToAb() {
  return (
    <Link href="/about">
      <motion.button className="py-2 px-4 border border-accent_pink rounded-full">
        <span className="text-2xl font-accent">About Exhibition</span>
      </motion.button>
    </Link>
  );
}
