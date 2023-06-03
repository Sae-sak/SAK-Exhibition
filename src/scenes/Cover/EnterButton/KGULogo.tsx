import { motion } from "framer-motion";

export default function KGULogo() {
  return (
    <motion.div
      exit={{
        opacity: 0,
      }}
      className="col-center"
    >
      <div className="relative w-20 h-[98px] bg-light_bg_1 dark:bg-night_bg_1">
        <div className="absolute left-0 top-0 transform-gpu w-20 h-[60px] bg-light_bg_1 dark:bg-night_bg_1 border-l-[14px] border-r-[14px] border-t-[14px] border-t-light_gray_2 dark:border-t-light_gray_2 dark:border-l-light_gray_3 dark:border-r-light_gray_1 border-l-light_gray_3 origin-right border-r-light_gray_1  transition-all group-hover:-rotate-y-35 group-hover:-skew-y-3 group-hover:scale-x-[0.85]"></div>
        <div className="absolute left-0 bottom-0 transform-gpu w-20 h-12 bg-light_bg_1 dark:bg-night_bg_1 border-l-[14px] border-r-[14px] border-b-[14px] origin-right border-l-light_gray_3 border-r-light_gray_1 border-b-light_gray_4 dark:border-l-light_gray_3 dark:border-b-light_gray_4 dark:border-r-light_gray_1 transition-all group-hover:-rotate-y-35 group-hover:skew-y-3 group-hover:scale-x-[0.85]"></div>
      </div>
    </motion.div>
  );
}
