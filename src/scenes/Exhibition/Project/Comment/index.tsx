import CommentInput from "./CommentInput";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingIcon from "@components/Chat/LoadingIcon";
import SignOut from "@components/Chat/Signout";
import SignIn from "@components/Chat/Signin";
import { auth } from "@config/firebaseApp";
import CommentList from "./CommentList";
import { useAppSelector } from "@toolkit/hook";

export default function Comment({ slug }: { slug: string }) {
  const isUpdate = useAppSelector((state) => state.comment.isUpdate);

  const [user, loading, error] = useAuthState(auth);

  if (loading) return <LoadingIcon />;
  if (error) return <p>error occur</p>;

  return (
    <div className="w-full bg-light_bg_1 dark:bg-night_bg_1  border rounded-md p-4">
      <div className="flex justify-between items-center w-full border-b pb-4">
        <p>응원의 한 마디를 남겨보세요.</p>
        {user && <SignOut />}
      </div>

      {user ? (
        // 댓글 입력 필드
        !isUpdate && <CommentInput slug={slug} />
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
