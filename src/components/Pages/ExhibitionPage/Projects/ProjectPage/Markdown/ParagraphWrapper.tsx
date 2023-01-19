import {useEffect, useState} from "react";
import {motion} from "framer-motion";

import {randomFade} from "@components/Base/Util/Variants/randomfade";

export default function ParagraphWrapper({children}) {
  const [randomAni, setrAndomAni] = useState(null);

  useEffect(() => {
    setrAndomAni(randomFade[Math.floor(Math.random() * 10)]);
  }, []);
  return (
    <motion.div
      className="w-full"
      initial={randomAni}
      whileInView={{translateX: 0, translateY: 0, opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 3}}
    >
      {children}
    </motion.div>
  );
}
