import { useAppSelector } from "@toolkit/hook";
import { IComment } from "@type/comment";
import { timeYmd } from "@util/variants/datetime";
import Image from "next/image";
import CommentToggle from "./CommentToggle";
import CommentInput from "./CommentInput";
import { Fragment } from "react";

export default function CommentItem({ comment }: { comment: IComment }) {
  const { isUpdate, commentId } = useAppSelector((state) => state.comment);

  const cutDisplayName =
    comment.displayName.length > 8
      ? comment.displayName.slice(0, 8) + "..."
      : comment.displayName;

  return (
    <Fragment>
      {isUpdate && commentId === comment.commentId ? (
        <CommentInput slug={comment.slug} commentText={comment.text} />
      ) : (
        <div className="relative w-full border-b px-1 py-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              {/* 작성자 프로필 */}
              <div className="h-[32px] w-[32px] flex-shrink-0">
                <Image
                  className="rounded-full"
                  width={32}
                  height={32}
                  src={comment.photoURL}
                  alt={comment.uid}
                />
              </div>
              <div className="flex flex-col items-start justify-start">
                {/* 작성자 이름 */}
                <div className="w-40 overflow-hidden">
                  <span className="truncate">{cutDisplayName}</span>
                </div>

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
          <p className="px-2 pb-3 pt-2">{comment.text}</p>
        </div>
      )}
    </Fragment>
  );
}
