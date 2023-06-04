import { textVariant } from "@util/variants";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <motion.div
      variants={textVariant(1.2)}
      className="fixed w-screen h-screen col-center "
    >
      <div className="col-center w-screen h-screen gap-10 p-6">
        <h1 className="w-full h-full gap-4 col-center font-accent">
          <span className="text-3xl text-center">
            See the world through
            <span className="relative ml-2">
              <span className="text-3xl">Architecture</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 167 10"
                className="absolute w-full -top-6 -left-[0.6px] overflow-visible"
              >
                <text stroke-width="1px" className="text-3xl font-bold">
                  Architecture
                </text>
              </svg>
            </span>
          </span>
          <span className="text-xl">
            <span className="relative">
              <span className="text-xl font-bold">건축</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 10"
                className="absolute -top-[34px] -left-[0.8px] text-xl font-bold text-outlineoverflow-visible"
              >
                <text stroke-width="1px" className="text-xl font-bold">
                  건축
                </text>
              </svg>
            </span>
            을 통해 세상을 바라보다
          </span>
        </h1>
      </div>
    </motion.div>
  );
}
