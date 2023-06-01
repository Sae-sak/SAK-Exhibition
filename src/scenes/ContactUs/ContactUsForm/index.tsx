import { IContactForm } from "@type/email";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import ErrorMsg from "./ContactUsItem/ErrorMsg";
import { useAppDispatch } from "@toolkit/hook";
import { alertActions } from "@features/alert/alertSlice";

export default function ContactUsForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<IContactForm>({
    defaultValues: {},
  });

  const onValid = async (data: IContactForm) => {
    if (!data || !data.name || !data.email || !data.message) return;

    try {
      const response = await axios.post("http://localhost:3000/api/sendemail", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      console.log(response.data);
      function mailSuccess() {
        dispatch(
          alertActions.alert({
            alertType: "Success",
            content: "메일이 정상적으로 전송되었습니다.",
          })
        );
      }
      mailSuccess();
    } catch (error) {
      console.log(error);

      function mailFail() {
        dispatch(
          alertActions.alert({
            alertType: "Danger",
            content: "메일 전송에 실패했습니다.",
          })
        );
      }
      mailFail();
    }
  };
  return (
    <div className="">
      {/* 제목 */}
      <div className="col-center">
        <h1 className="mb-4 text-2xl font-bold font-title sm:text-xl">
          Contact Our Team
        </h1>
      </div>

      {/* form */}
      <form className="flex flex-wrap md:mx-4" onSubmit={handleSubmit(onValid)}>
        {/* name textfield */}
        <div className="w-1/2 p-2">
          <div className="relative">
            <label htmlFor="name" className="text-sm leading-8 ">
              Name *
            </label>
            <input
              {...register("name", {
                required: "이름을 입력해 주세요.",
              })}
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="이름 / 소속"
              maxLength={10}
              className="textfield"
            />
          </div>
          <ErrorMsg>{errors?.name?.message}</ErrorMsg>
        </div>

        {/* Email textfield */}
        <div className="w-1/2 p-2">
          <div className="relative">
            <label htmlFor="email" className="text-sm leading-8 ">
              Email *
            </label>
            <input
              {...register("email", {
                required: "이메일을 입력해 주세요.",
                validate: {
                  onlyEmail: (value) => {
                    return (
                      [
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      ].every((pattern) => pattern.test(value)) ||
                      "이메일 형식만 입력 가능합니다."
                    );
                  },
                },
              })}
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="이메일"
              maxLength={320}
              className="textfield"
            />
          </div>
          <ErrorMsg>{errors?.email?.message}</ErrorMsg>
        </div>

        {/* message textarea */}
        <div className="w-full p-2">
          <div className="relative">
            <label htmlFor="message" className="text-sm leading-8 ">
              Message *
            </label>
            <Controller
              {...register("message", {
                required: "메시지를 입력해주세요.",
                minLength: {
                  value: 6,
                  message: "최소 다섯 글자 이상 입력해주세요.",
                },
              })}
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  className="textareafield"
                  placeholder="문의 사항을 입력해 주세요."
                />
              )}
            />
          </div>
          <ErrorMsg>{errors?.message?.message}</ErrorMsg>
        </div>

        {/* submit area */}
        <div className="w-full gap-4 row-center">
          <div className="w-full p-2 pt-2 mt-2 text-xs border-gray-200 text-start ">
            <a className="text-gray-500">kimyoo04@gmail.com</a>
          </div>
          <div className="w-full p-2 pt-2 mt-2 col-end">
            <button className="flex font-mono text-xl border-b">
              <span>submit</span>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
