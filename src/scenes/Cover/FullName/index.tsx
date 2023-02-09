import { textVariant } from "@util/variants";
import { motion } from "framer-motion";
import AccentChar from "./AccentChar";
import NormalChar from "./NormalChar";

export default function FullName() {
  return (
    <motion.div
      variants={textVariant(1.1)}
      className="fixed text-left top-14 left-14 text-night_gray_3"
    >
      <span className="font-bold">
        <div>
          <AccentChar char="S" color="text-kgu_main_red" />
          <NormalChar>CHOOL OF </NormalChar>
          <AccentChar char="A" color="text-kgu_main_yellow" />
          <NormalChar>RCHITECTURE </NormalChar>
        </div>
        <div>
          <NormalChar>IN </NormalChar>
          <AccentChar char="K" color="text-kgu_main_green" />
          <NormalChar>YONGGI UNIVERSITY </NormalChar>
        </div>
        <div>
          <AccentChar char="E" color="text-kgu_main_blue" />
          <NormalChar>XHIBITION</NormalChar>
        </div>
      </span>
    </motion.div>
  );
}
