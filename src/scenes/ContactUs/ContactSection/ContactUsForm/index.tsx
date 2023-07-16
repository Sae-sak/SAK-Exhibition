import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "@toolkit/hook";
import ErrorMsg from "./ContactUsItem/ErrorMsg";
import { alertActions } from "@features/alert/alertSlice";

import { motion } from "framer-motion";
import { textVariant } from "@util/variants";

import { IContactForm } from "@type/email";

export default function ContactUsForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IContactForm>({
    defaultValues: {},
  });

  const onValid = async (data: IContactForm) => {
    if (!data || !data.name || !data.email || !data.message) return;

    try {
      const response = await axios.post(
        "https://sak-exhibition.vercel.app/api/sendemail",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        }
      );
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
        <motion.h1
          variants={textVariant(0.5)}
          className="mb-4 text-xl font-bold sm:text-2xl"
        >
          Contact Our Team
        </motion.h1>
      </div>

      {/* form */}
      <motion.form
        variants={textVariant(0.7)}
        className="flex flex-wrap md:mx-4"
        onSubmit={handleSubmit(onValid)}
      >
        {/* name textfield */}
        <div className="w-1/2 p-2">
          <div className="relative">
            <label htmlFor="name" className="text-sm leading-8">
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
        <motion.div variants={textVariant(0.7)} className="w-full p-2">
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
        </motion.div>

        {/* submit area */}
        <motion.div
          variants={textVariant(0.9)}
          className="row-center w-full gap-4"
        >
          <div className="col-end mt-2 w-full p-2 pt-2">
            <button className="flex border-b font-title text-lg font-bold">
              <span>submit</span>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </motion.div>
      </motion.form>
    </div>
  );
}
