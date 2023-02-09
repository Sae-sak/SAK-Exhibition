import { textVariant } from "@util/variants";
import { motion } from "framer-motion";

export default function Title() {
  return (
    <motion.div
      variants={textVariant(1.2)}
      className="fixed w-screen h-screen col-center "
    >
      <div className="flex items-center justify-center w-screen h-screen gap-10 p-10">
        <div className="w-1/2 h-full">
          <div className="w-full h-full gap-4 col-center">
            <div className="text-4xl font-bold">NEW NORMAL VILLAGE</div>
            <div className="text-2xl">&apos;뉴 노멀&apos; 시대의 건축</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
