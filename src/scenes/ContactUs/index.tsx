import HBorder from "@components/HBorder";
import Clock from "./Clock";
import ContactUsForm from "./ContactUsForm";
import StudentCouncil from "./StudentCouncil";
import Team from "./Team/Index";

export default function ContactUs() {
  return (
    <div className="container gap-20 px-5 py-16 col-center ">
      <StudentCouncil />
      <HBorder />
      <Team />
      <HBorder />

      <div className="w-full gap-20 col-center md:flex md:justify-between md:flex-row">
        <Clock />

        {/* vborder */}
        <div className="hidden md:block">
          <div className={`border-r-[1px] h-96 w-[1px]`}></div>
        </div>

        {/* hborder */}
        <div className="w-full md:hidden">
          <div className="border-t-[1px] h-[1px] w-full"></div>
        </div>

        <ContactUsForm />
      </div>
    </div>
  );
}