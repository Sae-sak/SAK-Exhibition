import Link from "next/link";
import { motion } from "framer-motion";

export default function GoToAb() {
  return (
    <motion.button className="text-2xl font-bold ">
      <Link href="/about">
        <div className="p-4">
          <span className="">About SAK</span>
        </div>
      </Link>
    </motion.button>
  );
}
