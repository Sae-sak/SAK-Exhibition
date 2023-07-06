import { textVariant } from "@util/variants";
import { staggerContainer } from "@util/variants/container";
import { motion } from "framer-motion";

export default function Contributors() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="w-full col-center gap-2 py-8"
      viewport={{ once: true }}
    >
        <motion.h1
          variants={textVariant(0.5)}
          className="text-2xl font-bold font-title"
        >
          Contributor
        </motion.h1>

        <motion.span variants={textVariant(0.7)}>김민선</motion.span>
    </motion.div>
  );
}