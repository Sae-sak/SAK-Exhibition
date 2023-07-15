import { motion } from "framer-motion";

export default function ParagraphWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="pb-4"
    >
      {children}
    </motion.div>
  );
}
