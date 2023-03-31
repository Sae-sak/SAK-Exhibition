import { motion } from "framer-motion";

export default function BorderDelay({ delayTime }: { delayTime: number }) {
  return (
    <motion.div
      className="border-t-[1px] h-[1px] w-screen origin-left"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ delay: delayTime * 0.1 + 0.1, duration: 0.5 }}
    />
  );
}
