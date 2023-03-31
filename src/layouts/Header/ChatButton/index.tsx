import { chatActions } from "@features/chat/chatSlice";
import { useAppDispatch } from "@toolkit/hook";

export default function ChatButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      className="fixed w-8 h-8 gap-0.5 bg-white  rounded-br-none shadow-sm rounded-2xl row-center bottom-4 right-4 border-light_font_1 shadow-gray-400 dark:bg-black dark:border-night_font_1"
      onClick={() => dispatch(chatActions.toggleChat())}
    >
      <div className="w-1 h-1 rounded-full bg-light_font_1 dark:bg-night_font_1"></div>
      <div className="w-1 h-1 rounded-full bg-light_font_1 dark:bg-night_font_1"></div>
      <div className="w-1 h-1 rounded-full bg-light_font_1 dark:bg-night_font_1"></div>
    </button>
  );
}
