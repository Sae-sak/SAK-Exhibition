import { motion } from "framer-motion";

export default function KGULogo() {
  return (
    <motion.div
      exit={{
        scale: 100,
        background: "#FBFBFB",
        transition: { duration: 1, delay: 0.4 },
      }}
      className="col-center"
    >
      <div className="relative">
        <div className="transform-gpu w-20 h-12 bg-light_bg_1 dark:bg-night_bg_1 border-l-[14px] border-r-[14px] border-t-[14px] border-t-kgu_main_yellow dark:border-t-kgu_main_yellow dark:border-l-kgu_main_red dark:border-r-kgu_main_green border-l-kgu_main_red origin-right border-r-kgu_main_green  transition-all group-hover:-rotate-y-35 group-hover:-skew-y-3 group-hover:scale-x-[0.85]"></div>
        <div className="transform-gpu w-20 h-12 bg-light_bg_1 dark:bg-night_bg_1 border-l-[14px] border-r-[14px] border-b-[14px] origin-right border-l-kgu_main_blue border-r-kgu_main_green border-b-kgu_main_blue dark:border-l-kgu_main_blue dark:border-b-kgu_main_blue dark:border-r-kgu_main_green transition-all group-hover:-rotate-y-35 group-hover:skew-y-3 group-hover:scale-x-[0.85]"></div>
      </div>
    </motion.div>
  );
}
