import { motion } from "framer-motion";
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
      className="w-screen h-screen gap-10 col-center"
    >
      {/* 상단 좌측 텍스트 */}
      <FullName />

      {/* 가운데 타이틀 */}
      <Title />

      {/* 하단 우측 링크*/}
      <EnterButton />
    </motion.div>
  );
}
