import { motion } from "framer-motion";

import { photoActions } from "@features/photo/photoSlice";
import { useAppDispatch } from "@toolkit/hook";

export default function ImageWrapper({ children, src }) {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      className="my-8 w-full overflow-hidden rounded-md border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      onClick={() => dispatch(photoActions.openPhoto({ selectedId: src }))}
    >
      {children}
    </motion.div>
  );
}
