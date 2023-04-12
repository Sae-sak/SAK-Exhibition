import { IContactForm } from "@type/email";
import { Controller, useForm } from "react-hook-form";
import EmailField from "./ContactUsItem/EmailField";
import MessageArea from "./ContactUsItem/MessageArea";
import NameField from "./ContactUsItem/NameField";
import axios from "axios";
import { useState } from "react";

export default function ContactUsForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
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
      alert("메일 전송이 완료되었습니다.");
    } catch (error) {
      console.log(error);
      alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
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
        <NameField
          id="name"
          inputProps={{
            ...register("name", {
              onChange: (e) => {
                setNameValue(e.target.value);
              },
            }),
          }}
        />

        {/* Email textfield */}
        <EmailField
          id="email"
          inputProps={{
            ...register("email", {
              onChange: (e) => {
                setEmailValue(e.target.value);
              },
            }),
          }}
        />

        {/* message textarea */}
        <div className="w-full p-2">
          <div className="relative">
            <label htmlFor="message" className="text-sm leading-8 font-body">
              Message *
            </label>
            <Controller
              {...register("message")}
              name="message"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full px-3 py-1 leading-8 transition-colors duration-200 ease-in-out border-b outline-none font-body focus:border focus:rounded focus:border-gray-500 hover:ring-1 hover:ring-gray-500 hover:rounded hover:border-gray-500"
                  rows={4} // 원하는 행 수
                  cols={50} // 원하는 열 수
                  placeholder="문의 사항을 입력해 주세요."
                />
              )}
            />
          </div>
        </div>

        {/* submit area */}
        <div className="w-full gap-4 row-center">
          <div className="w-full p-2 pt-2 mt-2 text-xs border-gray-200 text-start font-body">
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
