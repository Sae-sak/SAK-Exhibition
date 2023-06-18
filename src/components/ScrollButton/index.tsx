import { scrollTo } from "@util/variants";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export default function ScrollButton() {
  const scrollTopAni = useAnimation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (position) => {
    if (
      position !== 0 &&
      position + window.innerHeight + 20 < document.body.scrollHeight
    ) {
      scrollTopAni.start("middle");
    } else if (position !== 0) {
      scrollTopAni.start("middle");
    } else {
      scrollTopAni.start("top");
    }
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.button
      variants={scrollTo.top}
      animate={scrollTopAni}
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
      }}
      onClick={() => scrollToTop()}
      className="fixed z-20 w-8 h-8 bg-white border border-font_black dark:border-font_white rounded-full shadow-sm bottom-16 right-4 shadow-gray-400 dark:bg-black row-center "
    >
      <i className="text-3xl ri-arrow-up-s-line"></i>
    </motion.button>
  );
}
