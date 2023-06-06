import CommentInput from "./CommentInput";
import { useAppSelector } from "@toolkit/hook";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingIcon from "@components/Chat/LoadingIcon";
import SignOut from "@components/Chat/Signout";
import SignIn from "@components/Chat/Signin";
import { auth } from "@config/firebaseApp";

export default function Comment({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  const isChat = useAppSelector((state) => state.chat.isChat);
  const showChat = isChat ? "" : "opacity-0 scale-0 -z-10";

  const [user, loading, error] = useAuthState(auth);

  if (loading) return <LoadingIcon />;
  if (error) return <p>error occur</p>;

  return (
    <div className="w-full bg-slate-100 border rounded-md p-4">
      <div>방명록에 응원의 한 마디를 남겨보세요.</div>
      {user && (
        <div className="w-full col-end px-1">
          <SignOut />
        </div>
      )}
      {user ? (
        // 댓글 입력 필드
        <CommentInput />
      ) : (
        <div className="m-2 p-2">
          <SignIn />
        </div>
      )}

      {/* 댓글 목록 */}
      <div className="w-full h-48 border-y bg-slate-300">Comment Lists</div>
    </div>
  );
}
