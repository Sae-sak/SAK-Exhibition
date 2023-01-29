import { motion } from "framer-motion";
import randomInteger from "@util/random-integer";
import { randomXFadeIn } from "@util/variants";

export default function ParagraphWrapper({ children }) {
  return (
    <motion.div
      variants={randomXFadeIn}
      initial="off"
      whileInView="on"
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      custom={randomInteger(-20, 20)}
      className="pb-4"
    >
      {children}
    </motion.div>
  );
}
