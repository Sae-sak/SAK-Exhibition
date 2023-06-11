import { auth, db } from "@config/firebaseApp";
import { commentActions } from "@features/comment/commentSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { IComment } from "@type/comment";
import { deleteDoc, doc } from "firebase/firestore";

export default function CommentToggle({ comment }: { comment: IComment }) {
  const { isMore, isUpdate, isDelete, commentId } = useAppSelector(
    (state) => state.comment
  );
  const dispatch = useAppDispatch();

  // 현재 접속 중인 유저 정보
  const currentUid = auth.currentUser.uid;

  // 댓글 작성자 uid
  const commentUid = comment.uid;

  //  댓글 삭제 함수
  async function handleDelete() {
    try {
      const commentRef = doc(db, "comments", commentId);
      await deleteDoc(commentRef).then(() => {
        console.log("deleteDoc success");
        dispatch(commentActions.clickDelete(comment.commentId));
      });
    } catch (error) {
      console.error("deleteDoc error ==> ", error);
    }
  }

  return (
    <>
      {/* 더보기 버튼 (수정, 삭제) */}
      {currentUid === commentUid && (
        <i
          className=" ri-more-2-fill"
          onClick={() => dispatch(commentActions.toggleMore(comment.commentId))}
        ></i>
      )}
      {isMore && comment.commentId === commentId && (
        <div className="absolute right-4 top-4 w-20 h-18 rounded-md border bg-light_bg_1 dark:bg-night_bg_1">
          {/* 수정 버튼 */}

          <button
            className="px-4 py-1 flex items-center justify-between"
            onClick={() => {
              dispatch(commentActions.clickUpdate(comment.commentId));
            }}
          >
            <i className="ri-pencil-line"></i>
            <span>수정</span>
          </button>

          {/* 삭제 버튼 */}
          <button
            className=" border-t px-4 py-1 flex items-center justify-between"
            onClick={() => handleDelete()}
          >
            <i className="ri-close-line"></i>
            <span>삭제</span>
          </button>
        </div>
      )}
    </>
  );
}
