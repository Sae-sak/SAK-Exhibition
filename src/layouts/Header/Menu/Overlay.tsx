import { motion } from "framer-motion";

export default function Overlay({ setIsClicked, children }) {
  return (
    <motion.div
      onClick={() => setIsClicked(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="top-0 z-40 w-screen h-screen p-24 bg-light_bg_1 col-center dark:bg-night_bg_1"
    >
      {children}
    </motion.div>
  );
}
