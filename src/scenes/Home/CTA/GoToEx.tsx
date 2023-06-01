import Link from "next/link";
import { motion } from "framer-motion";

export default function GoToEx() {
  return (
    <motion.button className="">
      <Link href="/exhibition">
        <div className="gap-2 p-4 text-2xl font-medium row-center">
          <span className="font-accent text-accent">Go To Exhibition 2023</span>
          <i className=" ri-arrow-right-line text-accent"></i>
        </div>
      </Link>
    </motion.button>
  );
}
