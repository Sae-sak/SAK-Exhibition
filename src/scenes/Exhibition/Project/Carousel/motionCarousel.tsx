import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import usePrevious from "@customHook/usePrevious";

export default function Carousel(props: { data: string[] }) {
  const data = props.data;
  const dataLen = data.length;

  const [ref, { width }] = useMeasure();
  const [count, setCount] = useState(1);
  const prev = usePrevious(count);
  const direction = count > prev ? 1 : -1;

  function goToSlide(slideIndex) {
    setCount(slideIndex);
  }

  return (
    <div className="col-center">
      <div className="row-center group bg-slate-500 text-white">
        <button onClick={() => setCount(count - 1)}>
          <i className="ri-arrow-left-s-line text-3xl"></i>
        </button>

        <div className="col-center">
          <div
            ref={ref}
            className="row-center relative h-24 w-24 overflow-hidden bg-gray-700"
          >
            <AnimatePresence custom={{ direction, width }}>
              <motion.div
                variants={carouselVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={{ direction, width }}
                key={count}
                className={`row-center absolute h-20 w-20 bg-red-500 ${
                  data[Math.abs(count) % dataLen]
                }`}
              >
                {Math.abs(count) % dataLen}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button onClick={() => setCount(count + 1)}>
          <i className="ri-arrow-right-s-line text-3xl"></i>
        </button>
      </div>

      <div className="row-center gap-2 p-4">
        {data.map((_: string, slideIndex: number) => {
          return (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <div
                className={`h-2 w-2 ${
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

const carouselVariants = {
  hidden: ({ direction, width }) => ({ x: direction * width }),
  visible: { x: 0 },
  exit: ({ direction, width }) => ({ x: direction * -width }),
};
