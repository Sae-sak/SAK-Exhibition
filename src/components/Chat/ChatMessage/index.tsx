import { IMessage } from "@type/chat";
import Image from "next/image";
import { auth } from "../config/firebaseApp";

export default function ChatMessage(props: { message: IMessage }) {
  const user = auth;
  const { uid, text, displayName, photoURL, createdAt } = props.message;
  const messageClass = uid === user.currentUser?.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div>
          <Image
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
            alt={uid || "avatar"}
          />
          <span>{displayName}</span>
        </div>

        <div>
          <p>{text}</p>
          <span>{createdAt}</span>
        </div>
      </div>
    </>
  );
}
