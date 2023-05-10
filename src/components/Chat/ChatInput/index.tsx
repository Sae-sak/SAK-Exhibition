import { useState } from "react";
import { useForm } from "react-hook-form";
import { ISendForm } from "@type/chat";

import SendMessage from "../SendMessage";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@config/firebaseApp";

export default function ChatInput() {
  const [formValue, setFormValue] = useState("");
  const { register, handleSubmit, reset } = useForm<ISendForm>();

  const onValid = async (data: ISendForm) => {
    if (data.chat !== "") return; // 빈칸 예외처리
    const user = auth.currentUser; // 유저 확인

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
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="flex flex-col justify-between w-full"
    >
      {/* 텍스트 안내창 */}
      <label htmlFor="chat" className="py-2">
        남기고 싶은 말씀을 적어주세요!
      </label>

      {/* 텍스트 입력창 */}
      <div className="flex items-end justify-between w-full ">
        <SendMessage
          id="chat"
          label="chat"
          autoComplete={"off"}
          inputProps={{
            ...register("chat", {
              onChange: (e) => {
                setFormValue(e.target.value);
              },
            }),
          }}
        />

        {/* 전송 버튼 */}
        <button
          className="block border-t border-b border-r w-7 h-7 col-center"
          type="submit"
          disabled={formValue === ""} // 빈칸 버튼 비활성화
        >
          <i className="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </form>
  );
}
