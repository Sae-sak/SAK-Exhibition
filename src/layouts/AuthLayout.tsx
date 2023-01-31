import { motion } from "framer-motion";

import Header from "@layouts/Header";
import SimpleFooter from "@layouts/Footer/SimpleFooter";

export default function AuthLayout({ children }) {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="fixed top-0 w-full">
        <Header />
      </div>
      <div className="w-screen h-screen col-center">{children}</div>
      <div className="fixed bottom-0 w-full">
        <SimpleFooter />
      </div>
    </motion.div>
  );
}
