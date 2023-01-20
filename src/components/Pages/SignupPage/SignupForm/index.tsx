import ErrorMsg from "../ErrorMsg";
import {useForm} from "react-hook-form";
import {ISignUpForm} from "@constants/types/signup";
import {useRouter} from "next/router";

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
    reset,
  } = useForm<ISignUpForm>({
    defaultValues: {},
  });

  const onValid = (data: ISignUpForm) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "passwordCheck",
        {message: "Password are not the same"},
        {shouldFocus: true}
      );
    } else {
      const {name, phone, email, password} = data;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="gap-6 p-4 border col-center"
    >
      {/* 이름 */}
      <div className="col-center">
        <div className="row-center">
          <ErrorMsg>{errors?.name?.message}</ErrorMsg>
        </div>
        <input
          {...register("name", {
            required: "Name is required",
          })}
          placeholder="* Name"
          className="border-b"
          name="name"
          type="text"
          maxLength={25}
        />
      </div>

      {/* 휴대전화번호 */}
      <div className="col-center">
        <div className="row-center">
          <ErrorMsg>{errors?.phone?.message}</ErrorMsg>
        </div>
        <input
          {...register("phone", {
            onChange: (e) => {
              if (e.target.value.length === 10) {
                reset({
                  phone: e.target.value.replace(
                    /(\d{3})(\d{3})(\d{4})/,
                    "$1-$2-$3"
                  ),
                });
              }
              if (e.target.value.length === 13) {
                reset({
                  phone: e.target.value
                    .replace(/-/g, "")
                    .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"),
                });
              }
            },
            required: "Phone number is required",
            pattern: {
              value: /^\d{3}-\d{3,4}-\d{4}$/,
              message: "Only phone number allowed",
            },
          })}
          placeholder="* Phone (000-0000-0000)"
          className="border-b"
          name="phone"
          type="tel"
          maxLength={13}
        />
      </div>

      {/* 이메일 */}
      <div className="col-center">
        <div className="row-center">
          <ErrorMsg>{errors?.email?.message}</ErrorMsg>
        </div>
        <input
          {...register("email", {
            required: "Email is required",
            validate: {
              onlyEmail: (value) => {
                return (
                  [
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  ].every((pattern) => pattern.test(value)) ||
                  "Only emails allowed"
                );
              },
              notGmail: (value) => {
                return (
                  [
                    /^[a-z0-9](\.?[a-z0-9]){5,}((?!@g(oogle)?mail\.com).)*$/i,
                  ].every((pattern) => pattern.test(value)) ||
                  "gmail is not allowed"
                );
              },
            },
          })}
          placeholder="* Email"
          className="border-b"
          name="email"
          type="email"
          maxLength={35}
        />
      </div>

      {/* 비밀번호 */}
      <div className="col-center">
        <div className="row-center">
          <ErrorMsg>{errors?.password?.message}</ErrorMsg>
        </div>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Your password have to be longer than 5.",
            },
            maxLength: {
              value: 16,
              message: "Your password have to be shorter than 17.",
            },
          })}
          placeholder="* Password (longer than 5)"
          className="border-b"
          name="password"
          type="password"
        />
      </div>

      {/* 비밀번호 확인 */}
      <div className="col-center">
        <div className="row-center">
          <div></div>
          <ErrorMsg>{errors?.passwordCheck?.message}</ErrorMsg>
        </div>
        <input
          {...register("passwordCheck", {
            required: "Checking password is required",
          })}
          placeholder="* Password Check"
          className="border-b"
          name="passwordCheck"
          type="password"
        />
      </div>
      <div>
        <ErrorMsg>{errors?.extraError?.message}</ErrorMsg>
        <button>Signup</button>
      </div>
    </form>
  );
}
