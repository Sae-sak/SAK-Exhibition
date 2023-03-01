import { motion } from "framer-motion";

export default function Loading() {
  if (typeof window !== "undefined") {
    window.document.body.style.overflow = "hidden";
  }

  return (
    <motion.div
      initial={{ x: "-100vh" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 z-50 w-screen h-screen col-center bg-light_bg_1 dark:bg-night_bg_1"
      key={"loading"}
    >
      <span className="text-4xl font-bold">loading</span>
    </motion.div>
  );
}
