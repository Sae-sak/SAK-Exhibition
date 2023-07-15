import { motion } from "framer-motion";

export default function HeaderWrapper({ children, value }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-2 mt-3 text-[20px] font-bold md:text-2xl"
      id={value.replaceAll(" ", "-")}
    >
      {children}
    </motion.h1>
  );
}
