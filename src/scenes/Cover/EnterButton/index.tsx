import Link from "next/link";
import { motion } from "framer-motion";

import { textVariant } from "@util/variants";
import KGULogo from "./KGULogo";

export default function EnterButton() {
  return (
    <motion.div
      variants={textVariant(1.3)}
      initial="hidden"
      animate="show"
      whileHover="hover"
      exit="exit"
      className="absolute bottom-14 right-14"
    >
      <Link href={"/home"} className="gap-2 text-white row-center group">
        {/* 문에 들어가는 글자 */}
        <motion.div
          exit={{
            x: 100,
            opacity: 0,
            scale: 0.4,
            transition: { duration: 0.5 },
          }}
          className="z-10 gap-4 row-center font-header"
        >
          <span className="text-3xl leading-4 transition-all bg-black border-gray-500 border-y group-hover:translate-x-12 ">
            Exhibition Enter
          </span>
        </motion.div>

        {/* 경기대 로고 문 */}
        <KGULogo />
      </Link>
    </motion.div>
  );
}
