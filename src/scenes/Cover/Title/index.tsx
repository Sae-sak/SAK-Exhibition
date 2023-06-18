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
            </span>
          </span>
          <span className="text-xl font-medium">
            건축을 통해 세상을 바라보다
          </span>
        </h1>
      </div>
    </motion.div>
  );
}
