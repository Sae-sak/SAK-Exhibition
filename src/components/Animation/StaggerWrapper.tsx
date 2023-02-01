import { staggerContainer } from "@util/variants/container";
import { motion } from "framer-motion";

export default function StaggerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto col-center`}
    >
      {children}
    </motion.div>
  );
}
