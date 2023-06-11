import { auth } from "@config/firebaseApp";
import { commentActions } from "@features/comment/commentSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { IComment } from "@type/comment";
import { timeYmd } from "@util/variants/datetime";
import Image from "next/image";
import CommentToggle from "./CommentToggle";
import { divide } from "lodash";
import CommentInput from "./CommentInput";

export default function CommentItem({ comment }: { comment: IComment }) {
  const { isMore, isUpdate, isDelete, commentId } = useAppSelector(
    (state) => state.comment
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {isUpdate && commentId === comment.commentId ? (
        <CommentInput slug={comment.slug} commentText={comment.text} />
      ) : (
        <div className="relative w-full py-4 px-1 border-b">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              {/* 작성자 프로필 */}
              <div className="w-[32px] h-[32px]">
                <Image
                  className="rounded-full"
                  width={32}
                  height={32}
                  src={comment.photoURL}
                  alt={comment.uid}
                />
              </div>
              <div className="space-x-2">
                {/* 작성자 이름 */}
                <span className="w-20 overflow-hidden">
                  <span className="tuncate">{comment.displayName}</span>
                </span>

                {/* 작성 시간 : timeYmd 함수 활용 */}
                <span className="text-sm text-slate-400">
                  {comment.createdAt && timeYmd(comment.createdAt.seconds)}
                </span>
              </div>
            </div>

            {/* 더보기 버튼 */}
            <CommentToggle comment={comment} />
          </div>

          {/* 댓글 내용 */}
          <p className="px-2 pt-2 pb-3">{comment.text}</p>
        </div>
      )}
    </>
  );
}
