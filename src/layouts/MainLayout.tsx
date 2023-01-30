import { motion } from "framer-motion";

import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

import Quote from "@components/Quote";
import ScrollButton from "@components/ScrollButton";

export default function MainLayout({ children }) {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Header />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
      <ScrollButton />
      <Quote />
      <Footer />
    </motion.div>
  );
}
