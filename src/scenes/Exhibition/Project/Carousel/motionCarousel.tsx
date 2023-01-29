import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import usePrevious from "@customHook/usePrevious";

export default function Carousel(props: { data: string[] }) {
  const data = props.data;
  const dataLen = data.length;

  let [ref, { width }] = useMeasure();
  let [count, setCount] = useState(1);
  let prev = usePrevious(count);
  let direction = count > prev ? 1 : -1;

  function goToSlide(slideIndex) {
    setCount(slideIndex);
  }

  return (
    <div className="col-center">
      <div className="text-white bg-slate-500 row-center group">
        <button onClick={() => setCount(count - 1)}>
          <i className="text-3xl ri-arrow-left-s-line"></i>
        </button>

        <div className="col-center">
          <div
            ref={ref}
            className="relative w-24 h-24 overflow-hidden bg-gray-700 row-center"
          >
            <AnimatePresence custom={{ direction, width }}>
              <motion.div
                variants={carouselVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={{ direction, width }}
                key={count}
                className={`absolute w-20 h-20 bg-red-500 row-center ${
                  data[Math.abs(count) % dataLen]
                }`}
              >
                {Math.abs(count) % dataLen}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button onClick={() => setCount(count + 1)}>
          <i className="text-3xl ri-arrow-right-s-line"></i>
        </button>
      </div>

      <div className="gap-2 p-4 row-center">
        {data.map((_: string, slideIndex: number) => {
          return (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <div
                className={`w-2 h-2 ${
                  Math.abs(count) % dataLen === slideIndex
                    ? "bg-black"
                    : "bg-gray-300"
                } rounded-full`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

let carouselVariants = {
  hidden: ({ direction, width }) => ({ x: direction * width }),
  visible: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
};
