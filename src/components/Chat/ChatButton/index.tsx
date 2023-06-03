import { chatActions } from "@features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { motion } from "framer-motion";

// 채팅창 토글 버튼
export default function ChatButton() {
  const dispatch = useAppDispatch();
  const isChat = useAppSelector((state) => state.chat.isChat);
  const showChat = isChat ? "bg-accent" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
        rotate: -10,
      }}
      className={`fixed w-8 h-8 gap-0.5 border bg-white  rounded-br-none shadow-sm rounded-2xl row-center bottom-4 right-4 border-font_black shadow-gray-400 dark:bg-black dark:border-font_white ${showChat}`}
      onClick={() => dispatch(chatActions.toggleChat())}
    >
      {/* 점 3개 표현 */}
      <div className="w-1 h-1 rounded-full bg-black dark:bg-white"></div>
      <div className="w-1 h-1 rounded-full bg-black dark:bg-white"></div>
      <div className="w-1 h-1 rounded-full bg-black dark:bg-white"></div>
    </motion.button>
  );
}
