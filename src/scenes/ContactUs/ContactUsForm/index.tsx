import EmailField from "./ContactUsItem/EmailField";
import MessageArea from "./ContactUsItem/MessageArea";
import PasswordField from "./ContactUsItem/PasswordField";

export default function ContactUsForm() {
  return (
    <div className="">
      {/* 제목 */}
      <div className="col-center">
        <h1 className="mb-4 text-2xl font-bold font-title sm:text-xl">
          Contact Our Team
        </h1>
      </div>

      {/* form */}
      <form className="flex flex-wrap md:mx-4">
        {/* Email textfield */}
        <EmailField />

        {/* password textfield */}
        <PasswordField />

        {/* message textarea */}
        <MessageArea />

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
