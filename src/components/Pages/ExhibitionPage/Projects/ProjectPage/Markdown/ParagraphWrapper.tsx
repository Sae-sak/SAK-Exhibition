import {motion} from "framer-motion";
import {randomFadeIn} from "@components/Base/Util/Variants/randomFadeIn";
import randomInteger from "@components/Base/Util/random-integer";

export default function ParagraphWrapper({children}) {
  return (
    <motion.div
      variants={randomFadeIn}
      initial="off"
      whileInView="on"
      transition={{duration: 0.7}}
      viewport={{once: true}}
      custom={randomInteger(-20, 20)}
      className="pb-4"
    >
      {children}
    </motion.div>
  );
}
