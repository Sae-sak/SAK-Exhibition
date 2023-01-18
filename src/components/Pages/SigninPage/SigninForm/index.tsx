import {useForm} from "react-hook-form";
import {ISignInForm} from "@constants/types/signin";
import ErrorMsg from "../ErrorMsg";
import Link from "next/link";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ISignInForm>({
    defaultValues: {},
  });

  const onValid = (data: ISignInForm) => {
    const {email, password} = data;
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="gap-6 col-start">
      {/* 이메일 */}
      <div className="gap-1 col-start">
        <div className="row-center">
          <ErrorMsg>{errors?.email?.message}</ErrorMsg>
        </div>
        <input
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식만 가능합니다.",
            },
          })}
          placeholder="Email"
          className="border-b"
          name="email"
          type="text"
          autoComplete="" // 추후 설정
        />
      </div>

      {/* 비밀번호 */}
      <div className="gap-1 col-start">
        <div className="row-center">
          <ErrorMsg>{errors?.password?.message}</ErrorMsg>
        </div>
        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 5,
              message: "5글자 이상 입력해주세요.",
            },
          })}
          placeholder="Password"
          name="password"
          type="password"
          autoComplete="" // 추후 설정
        />
        <ErrorMsg>{errors?.extraError?.message}</ErrorMsg>
      </div>
      <div className="flex items-center justify-between gap-2">
        <button type="submit">로그인</button>
        <div>
          <Link href="/signup">
            <span>회원가입하기</span>
          </Link>
        </div>
      </div>
    </form>
  );
}
