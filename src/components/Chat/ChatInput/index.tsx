import { useState } from "react";
import { useForm } from "react-hook-form";
import { ISendForm } from "@type/chat";

import SendMessage from "../SendMessage";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../config/firebaseApp";

export default function ChatInput() {
  const [formValue, setFormValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<ISendForm>({
    defaultValues: {},
  });

  const onValid = async (data: ISendForm) => {
    const user = auth.currentUser;

    // firestore에 저장
    if (user) {
      const { uid, displayName, photoURL } = user;
      await addDoc(collection(db, "messages"), {
        uid,
        displayName,
        text: data.chat,
        photoURL,
        createdAt: serverTimestamp(),
      });

      reset({ chat: "" }); // 전송 후 텍스트 지우기

      //! 스크롤 최하단으로 내리기 방법 강구하기
      // dummy.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="flex flex-col justify-between w-full"
    >
      {/* 텍스트 안내창 */}
      <label className="py-2">남기고 싶은 말씀을 적어주세요!</label>

      <div className="flex items-end justify-between w-full ">
        <SendMessage
          id="chat"
          autoComplete={"off"}
          inputProps={{
            ...register("chat", {
              onChange: (e) => setFormValue(e),
            }),
          }}
        />

        <button
          className="block w-12 px-1 border-t border-b border-r col-center h-7"
          type="submit"
          disabled={!formValue}
        >
          <i className="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </form>
  );
}
