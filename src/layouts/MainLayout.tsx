import { motion } from "framer-motion";

import Header from "@layouts/Header";
import Footer from "@layouts/Footer";

import ScrollButton from "@components/ScrollButton";
import ChatButton from "@components/Chat/ChatButton";

import Alert from "@components/Alert";
import Chat from "@components/Chat";
import ModalImage from "@scenes/Exhibition/Project/ModalImage";

export default function MainLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />

      <div className="flex min-h-[826px] flex-col items-center justify-start bg-light_bg_1 pt-[57px] dark:bg-night_bg_1">
        {children}
      </div>

      {/* 오른쪽 하단 fixed 버튼 */}
      <ChatButton />
      <ScrollButton />

      {/* overlay 되는 창 */}
      <Alert />
      <Chat />
      <ModalImage />

      <Footer />
    </motion.div>
  );
}
