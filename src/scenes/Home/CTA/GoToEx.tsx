import Link from "next/link";
import { motion } from "framer-motion";

export default function GoToEx() {
  return (
    <motion.button className="kgu-gradient__font">
      <Link href="/exhibition">
        <div className="gap-2 p-4 text-2xl font-bold font-body row-center">
          <span className="">Go To Exhibition 2023</span>
          <i className=" ri-arrow-right-line"></i>
        </div>
      </Link>
    </motion.button>
  );
}
