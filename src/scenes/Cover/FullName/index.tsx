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
          <AccentChar char="S" color="text-accent_pink dark:text-accent_pink" />
          <NormalChar>CHOOL OF </NormalChar>
          <AccentChar char="A" color="text-accent_pink dark:text-accent_pink" />
          <NormalChar>RCHITECTURE </NormalChar>
        </div>
        <div>
          <NormalChar>IN </NormalChar>
          <AccentChar char="K" color="text-accent_pink dark:text-accent_pink" />
          <NormalChar>YONGGI UNIVERSITY </NormalChar>
        </div>
        <div>
          <AccentChar char="E" color="text-accent_pink dark:text-accent_pink" />
          <NormalChar>XHIBITION</NormalChar>
        </div>
      </span>
    </motion.div>
  );
}
