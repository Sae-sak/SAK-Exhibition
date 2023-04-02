import HBorder from "@components/HBorder";
import VBorder from "@components/VBorder";
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
      <div className="gap-4 w-fit col-center md:flex md:flex-row md:justify-center md:items-center ">
        <Clock />
        <div className="rotate-90 md:rotate-0">
          <VBorder height={"h-96"} />
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
}