import { textVariant } from "@util/variants";
import { motion } from "framer-motion";
import AccentChar from "./AccentChar";
import NormalChar from "./NormalChar";

export default function FullName() {
  return (
    <motion.div
      variants={textVariant(1.1)}
      className="fixed text-left top-14 left-14"
    >
      <span className="font-medium">
        <div>
          <AccentChar char="S" color="text-font_accent dark:text-font_accent" />
          <NormalChar>CHOOL OF </NormalChar>
          <AccentChar char="A" color="text-font_accent dark:text-font_accent" />
          <NormalChar>RCHITECTURE </NormalChar>
        </div>
        <div>
          <NormalChar>IN </NormalChar>
          <AccentChar char="K" color="text-font_accent dark:text-font_accent" />
          <NormalChar>YONGGI UNIVERSITY </NormalChar>
        </div>
        <div>
          <AccentChar char="E" color="text-font_accent dark:text-font_accent" />
          <NormalChar>XHIBITION</NormalChar>
        </div>
      </span>
    </motion.div>
  );
}
