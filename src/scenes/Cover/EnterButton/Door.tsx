import { motion } from "framer-motion";

export default function Door() {
  return (
    <motion.div
      exit={{
        opacity: 0,
      }}
      className="col-center"
    >
      <div className="col-center w-20 h-[98px] bg-accent_pink rounded-t-full">
        <div className="w-[74px] h-[92px] border-2 rounded-t-full border-white"></div>
      </div>
    </motion.div>
  );
}
