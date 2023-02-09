import { motion } from "framer-motion";
import { textVariant } from "@util/variants";
import { staggerContainer } from "@util/variants/container";
import EnterButton from "./EnterButton";
import FullName from "./FullName";
import Title from "./Title";

export default function Cover() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="absolute z-50 w-screen h-screen gap-10 text-white bg-night_bg_1 col-center"
    >
      <div className="relative w-screen h-screen ">
        {/* 상단 좌측 텍스트 */}
        <FullName />

        {/* 가운데 타이틀 */}
        <Title />

        {/* 하단 우측 링크*/}
        <EnterButton />
      </div>
    </motion.div>
  );
}
