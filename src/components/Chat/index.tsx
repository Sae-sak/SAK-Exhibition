import { motion } from "framer-motion";
import { useAppSelector } from "@toolkit/hook";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebaseApp";

import ChatInput from "./ChatInput";
import LoadingIcon from "./LoadingIcon";
import SignIn from "./Signin";
import SignOut from "./Signout";
import ChatMessages from "./ChatMessages";

export default function Chat() {
  const isChat = useAppSelector((state) => state.chat.isChat);
  const showChat = isChat ? "" : "opacity-0 scale-0";

  const [user, loading, error] = useAuthState(auth);

  if (loading) return <LoadingIcon />;
  if (error) return <p>error occur</p>;

  return (
    <motion.div className="fixed z-40 bottom-8 right-16">
      <div
        className={`${showChat} origin-bottom-right flex flex-col justify-between h-full p-4 border rounded-md bg-light_bg_1 dark:bg-night_bg_1 font-body transition-all`}
      >
        <header className="flex items-end justify-between pb-4 w-72">
          <h1 className="text-xl font-bold">SAK-Exhibition Chat</h1>
          {user && <SignOut />}
        </header>

        <section className="w-full col-center">
          {user ? (
            <div className="w-full h-full">
              <ChatMessages />
              <ChatInput />
            </div>
          ) : (
            <SignIn />
          )}
        </section>
      </div>
    </motion.div>
  );
}
