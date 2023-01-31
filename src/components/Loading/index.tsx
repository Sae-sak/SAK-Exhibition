import { motion } from "framer-motion";

export default function Loading() {
  if (typeof window !== "undefined") {
    window.document.body.style.overflow = "hidden";
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 z-50 w-screen h-screen col-center bg-slate-400"
      key={"loading"}
    >
      <span className="text-4xl font-bold">loading</span>
    </motion.div>
  );
}
