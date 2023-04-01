import { motion } from "framer-motion";

import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

import ScrollButton from "@components/ScrollButton";
import ChatButton from "@components/Chat/ChatButton";

import Alert from "@components/Alert";
import Chat from "@components/Chat";

export default function MainLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />

      <div className="pt-[72px] flex flex-col min-h-[826px] items-center justify-start">
        {children}
      </div>

      {/* 오른쪽 하단 fixed 버튼 */}
      <ChatButton />
      <ScrollButton />

      {/* overlay 되는 창 */}
      <Alert />
      <Chat />

      <Footer />
    </motion.div>
  );
}
