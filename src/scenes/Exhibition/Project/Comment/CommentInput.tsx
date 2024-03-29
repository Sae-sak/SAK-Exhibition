import { auth, db } from "@config/firebaseApp";
import { commentActions } from "@features/comment/commentSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { ICommentForm } from "@type/comment";
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import Image from "next/image";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function CommentInput({
  slug,
  commentText = "",
}: {
  slug: string;
  commentText?: string;
}) {
  const { isUpdate, commentId } = useAppSelector((state) => state.comment);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
    reset,
  } = useForm<ICommentForm>({
    // 초기값 지정
    defaultValues: { comment: commentText },
  });
  // 현재 접속 중인 유저 확인
  const user = auth.currentUser;
  const cutDisplayName =
    auth.currentUser.displayName.length > 8
      ? auth.currentUser.displayName.slice(0, 8) + "..."
      : auth.currentUser.displayName;

  const onValid: SubmitHandler<ICommentForm> = async (data) => {
    //  폼 데이터 유효성 검사
    if (!data.comment) {
      const errMsg: { [key: string]: string } = {};

      if (!data.comment) errMsg.comment = "내용을 입력해 주세요.";

      const setErrors = (errors: Record<string, string>) => {
        Object.entries(errors).forEach(([key, value]) => {
          // 폼 구성 요소 이름 및 에러 메시지 전달
          setError(key as "comment", {
            message: value,
            type: "required",
          });
        });
      };

      // 데이터가 유효하지 않을 경우의 에러 메시지 설정
      setErrors(errMsg);
      return;
    }

    // firestore에 저장 (학생별 slug 추가)
    if (user) {
      const { uid, displayName, photoURL } = user;

      // try ,catch문 활용
      if (isUpdate) {
        try {
          // const commentRef = doc(db, "comments", commentId);
          await updateDoc(doc(db, "comments", commentId), {
            text: data.comment,
          }).then(() => {
            console.log("updateDoc success");
            dispatch(commentActions.resetComment());
          });
        } catch (error) {
          console.error("updateDoc error ==> ", error);
        }
      } else {
        try {
          const commentRef = doc(collection(db, "comments"));
          await setDoc(commentRef, {
            uid,
            commentId: commentRef.id,
            displayName,
            text: data.comment,
            photoURL,
            createdAt: serverTimestamp(),

            slug,
          });

          // 전송 후 텍스트 지우기
          reset({ comment: "" });
        } catch (error) {
          console.error("createDoc error ==> ", error);
        }
      }
    }
    // isUpdate를 가지고 true일 때와 false를 조건문을 걸어서,
  };

  return (
    <div className="px-1 py-2 pt-4">
      <form onSubmit={handleSubmit(onValid)} className="col-center">
        {/* 댓글 입력 필드 헤더 */}
        <div className="flex w-full items-center justify-between  pb-3">
          <div className="flex items-center">
            {/* 작성자 프로필 이미지 */}
            <div className="h-[32px] w-[32px] ">
              <Image
                className="rounded-full"
                width={32}
                height={32}
                src={auth.currentUser.photoURL}
                alt={auth.currentUser.uid}
              />
            </div>

            {/* 작성자 이름 */}
            <span className="ml-2 border-b">{cutDisplayName}</span>
          </div>
          <div className="row-center gap-2">
            {/* 제출 버튼 */}
            <button
              type="submit"
              className="col-center h-8 rounded-full border px-4 py-1 transition-colors duration-200 hover:bg-accent_pink dark:hover:bg-accent_green"
            >
              submit
            </button>
            {isUpdate && commentId !== "" && (
              <button
                className="h-8 rounded-full border px-2 py-1"
                onClick={() => dispatch(commentActions.resetComment())}
              >
                취소
              </button>
            )}
          </div>
        </div>

        <div className="flex w-full flex-col">
          {/* 댓글 입력 컨트롤러 */}
          <Controller
            name="comment"
            control={control}
            rules={{
              required: true,
              minLength: {
                value: 3,
                message: "최소 세 글자 이상 입력해 주세요.",
              },
              maxLength: {
                value: 500,
                message: "최대 500 글자까지 입력할 수 있어요.",
              },
            }}
            render={({ field }) => (
              <textarea
                id="comment"
                name="comment"
                rows={2}
                className="w-full resize-none rounded-md border bg-light_bg_1 px-3 py-1 leading-8 outline-none placeholder:pt-2 placeholder:text-sm dark:bg-night_bg_1"
                placeholder="자유롭게 댓글을 작성해 보세요."
                {...field}
              />
            )}
          />

          <span className="text-xs font-medium text-red-500">
            {errors?.comment?.message}
          </span>
        </div>
      </form>
    </div>
  );
}
