import { ICommentForm } from "@type/comment";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function CommentInput() {
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
  };

  return (
    <div className="mb-2 mt-4 border-t pb-2 ">
      <form onSubmit={handleSubmit(onValid)} className="col-center gap-1">
        <div className="row-start w-full gap-2"></div>
        {/* 댓글 입력 필드 헤더 */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center w-full">
            {/* 작성자 프로필 */}
            <div className="m-2 w-10 h-10 bg-cyan-800 rounded-full"></div>

            {/* 작성자 이름 */}
            <span className=" border-b">아무개</span>
          </div>
          {/* 제출 버튼 */}
          <button type="submit" className="m-2 rounded-2xl border h-8 w-20">
            submit
          </button>
        </div>

        <div className="flex w-full flex-col gap-1">
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
                className="textareafield bg-slate-100 resize-none placeholder:text-sm"
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
