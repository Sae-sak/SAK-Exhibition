import Link from "next/link";
import { motion } from "framer-motion";

import { textVariant } from "@util/variants";
import Image from "next/image";

export default function EnterButton() {
  return (
    <motion.div
      variants={textVariant(1.3)}
      initial="hidden"
      animate="show"
      whileHover="hover"
      exit="exit"
      className="absolute bottom-10 right-10"
    >
      <Link href={"/home"} className="gap-2 row-center group overflow-hidden">
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
            x: 200,
            opacity: 0,
            transition: { duration: 0.5 },
          }}
          className="z-10 gap-4 row-center"
        >
          <span className="text-2xl leading-4 transition-all font-accent border-y border-font_black dark:border-font_white translate-x-10">
            Exhibition Enter
          </span>
        </motion.div>

        {/* 입장하는 문 */}
        <motion.div className="relative col-center">
          <Image
            src="/images/door.png"
            alt="entrance"
            width={70}
            height={160}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
