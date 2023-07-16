import { IMessage } from "@type/chat";
import Image from "next/image";
import { auth } from "@config/firebaseApp";

export default function ChatMessage(props: { message: IMessage }) {
  const user = auth;
  const { uid, text, displayName, photoURL } = props.message;

  // 받은 메세지와 보낸 메세지 구분
  const messageProfile =
    uid === user.currentUser?.uid ? "sent-profile" : "received-profile";
  const messageBg = uid === user.currentUser?.uid ? "sent-bg" : "received-bg";

  // 채팅 날짜 설정
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };

  // const time = new Date(createdAt.seconds * 1000).toLocaleDateString(
  //   "ko-KR",
  //   options
  // );

  return (
    <div className={`${messageProfile} px-2 py-1`}>
      {/* 프로필창 */}
      {uid !== user.currentUser?.uid && (
        <div>
          <Image
            className="rounded-xl"
            width={36}
            height={36}
            src={
              photoURL ||
              "https://api.adorable.io/avatars/23/abott@adorable.png"
            }
            quality={10}
            alt={uid || "avatar"}
          />
        </div>
      )}

      <div>
        {/* 유저명 */}
        {uid !== user.currentUser?.uid && (
          <span className="text-sm">{displayName}</span>
        )}

        {/* 텍스트 */}
        <div
          className={`max-w-[200px] rounded-lg px-2 py-1 shadow dark:shadow-gray-600 ${messageBg}`}
        >
          <p className="text-sm">{text}</p>
          {/* <span>{time}</span> */}
        </div>
      </div>
    </div>
  );
}
