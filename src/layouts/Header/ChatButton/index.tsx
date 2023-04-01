import { chatActions } from "@features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { motion } from "framer-motion";

export default function ChatButton() {
  const dispatch = useAppDispatch();
  const isChat = useAppSelector((state) => state.chat.isChat);
  const showChat = isChat ? "kgu-gradient" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
        rotate: -10,
      }}
      className={`fixed w-8 h-8 gap-0.5 border bg-white  rounded-br-none shadow-sm rounded-2xl row-center bottom-4 right-4 border-light_font_1 shadow-gray-400 dark:bg-black dark:border-night_font_1 ${showChat}`}
      onClick={() => dispatch(chatActions.toggleChat())}
    >
      <div className="w-1 h-1 rounded-full bg-light_font_1 dark:bg-night_font_1"></div>
      <div className="w-1 h-1 rounded-full bg-light_font_1 dark:bg-night_font_1"></div>
      <div className="w-1 h-1 rounded-full bg-light_font_1 dark:bg-night_font_1"></div>
    </motion.button>
  );
}
