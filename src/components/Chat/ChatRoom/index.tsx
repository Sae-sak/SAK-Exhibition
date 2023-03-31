import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IMessage, ISendForm } from "@type/chat";

import ChatMessage from "../ChatMessage";
import SendMessage from "../SendMessage";

import {
  collection,
  CollectionReference,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db } from "../config/firebaseApp";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom() {
  const dummy = useRef<HTMLDivElement>(null);
  const [formValue, setFormValue] = useState("");

  const messagesRef = collection(
    db,
    "messages"
  ) as CollectionReference<IMessage>;
  const options = {
    idField: "id",
    snapshotListenOptions: { includeMetadataChanges: true },
  };
  const [messages, loading, error] = useCollectionData(messagesRef, options);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISendForm>({
    defaultValues: {},
  });

  const onValid = async (data: ISendForm) => {
    const user = auth.currentUser;

    if (user) {
      const { uid, displayName, photoURL } = user;
      await setDoc(doc(db, "messages"), {
        uid,
        displayName,
        text: data.chat,
        photoURL,
        createdAt: serverTimestamp(),
      });

      dummy.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.uid} message={msg} />)}
        <div ref={dummy}></div>
      </main>

      <form
        onSubmit={handleSubmit(onValid)}
        className="flex items-end justify-between w-full"
      >
        <SendMessage
          id="chat"
          autoComplete={"off"}
          error={errors.chat?.message as string}
          inputProps={{
            ...register("chat", {
              required: "chat is required",
              onChange: (e) => setFormValue(e),
            }),
          }}
        />

        <button
          className="block w-12 px-1 py-1 border rounded-md cursor-pointer"
          type="submit"
          disabled={!formValue}
        >
          <span>전송</span>
        </button>
      </form>
    </>
  );
}
