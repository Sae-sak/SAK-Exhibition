import { IComment } from "@type/comment";
import { timeYmd } from "@util/variants/datetime";
import Image from "next/image";

export default function CommentItem({ comment }: { comment: IComment }) {
  return (
    <div className="w-full py-2 border-b">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center w-full">
          {/* 작성자 프로필 */}
          <div className="m-2 w-10 h-10 ">
            <Image
              className="rounded-full"
              width={36}
              height={36}
              src={comment.photoURL}
              alt={comment.uid}
            />
          </div>

          <div className="flex items-center gap-2">
            {/* 작성자 이름 */}
            <span>{comment.displayName}</span>
            <span className="text-sm text-slate-400">
              {timeYmd(comment.createdAt)}
            </span>
          </div>
        </div>

        {/* 더보기 버튼 (수정, 삭제) */}
        <i className="relate ri-more-2-fill"></i>
      </div>

      {/* 댓글 내용 */}
      <div>
        <p className="mx-16 mb-2">{comment.text}</p>
      </div>
    </div>
  );
}

// const showButtons = useAppSelector((state) => state.comment);
// const dispatch = useAppDispatch();

// const handleButtonClick = () => {
//   dispatch(toggleMore());
// };

// {showButtons && (
//   //  수정, 삭제 버튼
//   <div className="absolute right-36 w-20 h-18 rounded-md border bg-light_bg_1 dark:bg-night_bg_1">
//     <button className=" px-4 py-1 flex items-center justify-between">
//       <i className="ri-pencil-line"></i>
//       <span>수정</span>
//     </button>
//     <button className=" border-t px-4 py-1 flex items-center justify-between">
//       <i className="ri-close-line"></i>
//       <span>삭제</span>
//     </button>
//   </div>
// )}
