import { IMessage } from "@type/chat";

import ChatMessage from "../ChatMessage";

import { collection, CollectionReference } from "firebase/firestore";
import { db } from "../config/firebaseApp";

import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatMessages() {
  const messagesRef = collection(
    db,
    "messages"
  ) as CollectionReference<IMessage>;

  const options = {
    idField: "id",
    snapshotListenOptions: { includeMetadataChanges: true },
  };

  const [messages, loading, error] = useCollectionData(messagesRef, options);

  return (
    <main className="border h-[400px] overflow-scroll">
      {messages &&
        messages.map((msg, indx) => (
          <ChatMessage key={`${msg.uid}${indx}`} message={msg} />
        ))}
    </main>
  );
}
