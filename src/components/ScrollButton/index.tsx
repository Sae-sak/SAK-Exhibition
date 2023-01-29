import { scrollTo } from "@util/variants";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

export default function ScrollButton() {
  const scrollTopAni = useAnimation();
  const scrollBottomAni = useAnimation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (position) => {
    if (
      position !== 0 &&
      position + window.innerHeight + 20 < document.body.scrollHeight
    ) {
      scrollTopAni.start("middle");
      scrollBottomAni.start("middle");
    } else if (position !== 0) {
      scrollBottomAni.start("bottom");
      scrollTopAni.start("middle");
    } else {
      scrollTopAni.start("top");
      scrollBottomAni.start("middle");
    }
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const scrollToBottom = () => {
    window.scrollTo(0, window.innerHeight + document.body.scrollHeight);
  };

  return (
    <div className="fixed z-20 gap-3 bottom-4 right-4 col-center ">
      <motion.div variants={scrollTo.top} animate={scrollTopAni}>
        <button
          onClick={() => scrollToTop()}
          className="w-8 h-8 bg-white rounded-full shadow-sm shadow-gray-400 dark:bg-black row-center"
        >
          <i className="text-3xl ri-arrow-up-s-line"></i>
        </button>
      </motion.div>
      <motion.div variants={scrollTo.bottom} animate={scrollBottomAni}>
        <button
          onClick={() => scrollToBottom()}
          className="w-8 h-8 bg-white rounded-full shadow-sm shadow-gray-400 dark:bg-black row-center"
        >
          <i className="text-3xl ri-arrow-down-s-line"></i>
        </button>
      </motion.div>
    </div>
  );
}
