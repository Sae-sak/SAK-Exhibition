import { motion } from "framer-motion";

export default function EnterButton() {
  return (
    <motion.div
      exit={{ x: 100, opacity: 0, scale: 0.4, transition: { duration: 0.5 } }}
      className="z-10 gap-4 row-center font-header"
    >
      <span className="text-3xl leading-4 transition-all bg-black border-gray-500 border-y group-hover:translate-x-12 ">
        Exhibition Enter
      </span>
    </motion.div>
  );
}
