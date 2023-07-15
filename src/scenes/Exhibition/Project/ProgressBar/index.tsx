import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-[56px] z-20 h-1.5 origin-left transform bg-accent_pink dark:bg-accent_green"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
