import { IMessage } from "@type/chat";

import ChatMessage from "../ChatMessage";

import {
  collection,
  CollectionReference,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@config/firebaseApp";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useRef, useState } from "react";

export default function ChatMessages() {
  // 스크롤 용 div 연결
  const scrollBottomDiv = useRef<HTMLDivElement>();
  const [reversedMsg, setReversedMsg] = useState([] as IMessage[]);

  // firestore 의 messages collection 선택
  const messagesRef = collection(
    db,
    "messages"
  ) as CollectionReference<IMessage>;

  // useCollecitonData 옵션 설정
  const options = {
    idField: "id",
    snapshotListenOptions: { includeMetadataChanges: true },
  };

  // 메시지 쿼리 생성 (내림차순으로 최근 50개 메시지)
  const messagesQuery = query(
    messagesRef,
    orderBy("createdAt", "desc"),
    limit(50)
  );

  // 메시지들 받아오기
  const [messages, loading, error] = useCollectionData(messagesQuery, options);

  useEffect(() => {
    !loading && !error && setReversedMsg(messages?.reverse());
  }, [loading, messages, error]);

  // 채팅 화면 최하단으로 스크롤
  useEffect(
    () => scrollBottomDiv.current?.scrollIntoView({ behavior: "smooth" }),
    [messages]
  );

  return (
    <section className="h-[400px] overflow-scroll border">
      {/* 메시지 출력 영역 */}
      {reversedMsg &&
        reversedMsg.map((msg, indx) => (
          <ChatMessage key={`${msg.uid}${indx}`} message={msg} />
        ))}

      {/* scroll bottom 용 div */}
      <div ref={scrollBottomDiv}></div>
    </section>
  );
}
