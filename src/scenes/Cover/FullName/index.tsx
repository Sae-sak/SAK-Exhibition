import { textVariant } from "@util/variants";
import { motion } from "framer-motion";

export default function FullName() {
  return (
    <motion.div
      variants={textVariant(1.1)}
      className="fixed text-left top-14 left-14 text-night_gray_3"
    >
      <span className="font-bold">
        <span className="text-2xl text-kgu_main_red">S</span>CHOOL OF{" "}
        <span className="text-2xl text-kgu_main_yellow">A</span>RCHITECTURE{" "}
        <div>
          IN <span className="text-2xl text-kgu_main_green">K</span>
          YONGGI UNIVERSITY{" "}
        </div>
        <div>
          <span className="text-2xl text-kgu_main_blue">E</span>
          <span>XHIBITION</span>
        </div>
      </span>
    </motion.div>
  );
}
