import {motion} from "framer-motion";

import {photoActions} from "@features/photo/photoSlice";
import {useAppDispatch} from "@toolkit/hook";

export default function ImageWrapper({children, src}) {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      className="w-full my-8"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      transition={{duration: 1}}
      onClick={() => dispatch(photoActions.openPhoto({selectedId: src}))}
    >
      {children}
    </motion.div>
  );
}
