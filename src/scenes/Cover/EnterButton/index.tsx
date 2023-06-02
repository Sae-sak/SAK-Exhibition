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
      <Link href={"/home"} className="gap-2 row-center group ">
        {/* 문에 들어가는 글자 */}
        <motion.div
          animate={{
            x: [-3, 3, -3], // 좌우 이동 애니메이션
          }}
          transition={{
            repeat: Infinity, // 애니메이션 무한반복
            duration: 1.5, // 1초 동안 애니메이션 진행
            ease: "linear", // 선형적인 애니메이션
          }}
          exit={{
            x: 100,
            opacity: 0,
            scale: 0.4,
            transition: { duration: 0.5 },
          }}
          className="z-10 gap-4 row-center font-header"
        >
          <span className="text-3xl leading-5 transition-all group-hover:text-font_accent dark:group-hover:text-font_accent font-accent border-y translate-x-10 bg-light_bg_1 dark:bg-night_bg_1">
            Exhibition Enter
          </span>
        </motion.div>

        {/* 경기대 로고 문 */}
        <KGULogo />
      </Link>
    </motion.div>
  );
}
