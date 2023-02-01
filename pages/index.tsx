import Cover from "@scenes/Cover";
import { motion } from "framer-motion";

export default function CoverPage() {
  return (
    <motion.div exit={{ opacity: 0, transition: { delay: 1.4 } }}>
      <Cover />
    </motion.div>
  );
}
