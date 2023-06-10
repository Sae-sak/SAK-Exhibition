import CommentInput from "./CommentInput";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingIcon from "@components/Chat/LoadingIcon";
import SignOut from "@components/Chat/Signout";
import SignIn from "@components/Chat/Signin";
import { auth } from "@config/firebaseApp";
import CommentList from "./CommentList";

export default function Comment({ slug }: { slug: string }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <LoadingIcon />;
  if (error) return <p>error occur</p>;

  return (
    <div className="w-full bg-light_bg_1 dark:bg-night_bg_1  border rounded-md p-4">
      <div>방명록에 응원의 한 마디를 남겨보세요.</div>
      {user && (
        <div className="w-full col-end px-1">
          <SignOut />
        </div>
      )}
      {user ? (
        // 댓글 입력 필드
        <CommentInput slug={slug} />
      ) : (
        <div className="py-4">
          <SignIn />
        </div>
      )}

      {/* 댓글 목록 */}
      <CommentList slug={slug} />
    </div>
  );
}
