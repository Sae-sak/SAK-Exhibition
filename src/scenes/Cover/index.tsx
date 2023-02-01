import Link from "next/link";

import { motion } from "framer-motion";
import { textVariant } from "@util/variants";
import { staggerContainer } from "@util/variants/container";
import KGULogo from "./KGULogo";
import EnterButton from "./EnterButton";

export default function Cover() {
  // if (typeof window !== "undefined") {
  //   window.document.body.style.overflow = "hidden";
  // }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="absolute z-50 w-screen h-screen gap-10 text-white bg-night_bg_1 col-center"
    >
      <div className="relative w-screen h-screen ">
        {/* 상단 좌측 텍스트 */}
        <motion.div
          variants={textVariant(1.1)}
          className="fixed text-left top-14 left-14 text-night_gray_3"
        >
          <span className="font-bold">
            <span className="text-2xl text-kgu_main_orange">S</span>CHOOL OF{" "}
            <span className="text-2xl text-kgu_main_yellow">A</span>RCHITECTURE{" "}
            <div>
              IN <span className="text-2xl text-kgu_main_blue">K</span>
              YONGGI UNIVERSITY{" "}
            </div>
            <div>
              <span className="text-2xl text-kgu_main_green">E</span>
              <span>XHIBITION</span>
            </div>
          </span>
        </motion.div>

        {/* 가운데 타이틀 */}
        <motion.div
          variants={textVariant(1.2)}
          className="fixed w-screen h-screen col-center "
        >
          <div className="flex items-center justify-center w-screen h-screen gap-10 p-10">
            <div className="w-1/2 h-full">
              <div className="w-full h-full gap-4 col-center">
                <div className="text-4xl font-bold">NEW NORMAL VILLAGE</div>
                <div className="text-2xl">&apos;뉴 노멀&apos; 시대의 건축</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 하단 우측 링크*/}
        <motion.div
          variants={textVariant(1.3)}
          initial="hidden"
          animate="show"
          whileHover="hover"
          exit="exit"
          className="absolute bottom-14 right-14"
        >
          <Link href={"/home"} className="gap-2 text-white row-center group">
            <EnterButton />
            <KGULogo />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
