import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-[73px] left-0 right-0 z-20 h-1 origin-left transform kgu-gradient"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
