import { auth, db } from "@config/firebaseApp";
import { ICommentForm } from "@type/comment";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function CommentInput({ slug }: { slug: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setError,
    reset,
  } = useForm<ICommentForm>({
    // 초기값 지정
    defaultValues: { comment: "" },
  });

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

    // 유저 확인
    const user = auth.currentUser;

    // 현재 시간을 가져오고 UTC로 변환
    const now = new Date();
    const utcTimestampString = now.toISOString();

    // firestore에 저장
    if (user) {
      const { uid, displayName, photoURL } = user;
      await addDoc(collection(db, "comments"), {
        uid,
        displayName,
        text: data.comment,
        photoURL,
        createdAt: utcTimestampString,

        slug,
      });

      reset({ comment: "" }); // 전송 후 텍스트 지우기
    }
  };

  return (
    <div className="py-2 mt-4 border-y  ">
      <form onSubmit={handleSubmit(onValid)} className="col-center">
        {/* 댓글 입력 필드 헤더 */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-full">
            {/* 작성자 프로필 */}
            <div className="m-2 w-10 h-10 ">
              <Image
                className="rounded-full"
                width={36}
                height={36}
                src={auth.currentUser.photoURL}
                alt={auth.currentUser.uid}
              />
            </div>

            {/* 작성자 이름 */}
            <span className="ml-2 border-b">
              {auth.currentUser.displayName}
            </span>
          </div>
          {/* 제출 버튼 */}
          <button type="submit" className="m-2 rounded-2xl border h-8 w-20">
            submit
          </button>
        </div>

        <div className="flex w-full flex-col">
          {/* 댓글 입력 컨트롤러 */}
          <Controller
            {...register("comment", {
              required: "댓글을 작성해 주세요.",
              minLength: {
                value: 3,
                message: "최소 세 글자 이상 입력해 주세요.",
              },
              maxLength: {
                value: 500,
                message: "최대 500 글자까지 입력할 수 있어요.",
              },
            })}
            name="comment"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                id="content"
                name="content"
                rows={2}
                className="w-full px-3 py-1 leading-8 outline-none placeholder:pt-2 bg-light_bg_1 dark:bg-night_bg_1 resize-none placeholder:text-sm"
                placeholder="자유롭게 댓글을 작성해 보세요."
                maxLength={501}
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
