import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {scrollTop, scrollBotton} from "../Variants/scrollButton";

export default function ScrollButton() {
  const scrollTopAni = useAnimation();
  const scrollBottomAni = useAnimation();

  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (position) => {
    if (
      position !== 0 &&
      position + window.innerHeight + 20 < document.body.scrollHeight
    ) {
      scrollTopAni.start("middle");
      scrollBottomAni.start("middle");
    } else if (position !== 0) {
      scrollBottomAni.start("bottom");
    } else {
      scrollTopAni.start("top");
    }
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const scrollToBottom = () => {
    window.scrollTo(0, window.innerHeight + document.body.scrollHeight);
  };

  return (
    <div className="fixed gap-6 bottom-4 right-4 row-center font-button">
      <motion.div variants={scrollTop} animate={scrollTopAni}>
        <button
          onClick={() => scrollToTop()}
          className="pr-2 pt-0.5 text-lg  bg-slate-200 rounded-lg row-center"
        >
          <i className="text-3xl ri-arrow-up-s-line"></i>
          <span>TOP</span>
        </button>
      </motion.div>
      <motion.div variants={scrollBotton} animate={scrollBottomAni}>
        <button
          onClick={() => scrollToBottom()}
          className=" bg-slate-200 rounded-lg pr-2 pt-0.5 text-lg row-center"
        >
          <i className="text-3xl ri-arrow-down-s-line"></i>
          <span>BOTTOM</span>
        </button>
      </motion.div>
    </div>
  );
}
