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
      <div className="w-full gap-4 row-center">
        <Clock />
        <VBorder height={'h-64'}/>
        <ContactUsForm />
      </div>
    </div>
  );
}
