import { motion } from "framer-motion";

import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

import ScrollButton from "@components/ScrollButton";

export default function MainLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
      <div className="pt-[72px] flex flex-col items-center justify-center">
        {children}
      </div>
      <ScrollButton />
      <Footer />
    </motion.div>
  );
}
