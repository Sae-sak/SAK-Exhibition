import {motion, useScroll} from "framer-motion";

export default function ProgressBar() {
  const {scrollYProgress} = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-20 h-2 origin-left transform bg-gray-700"
      style={{scaleX: scrollYProgress}}
    />
  );
}
