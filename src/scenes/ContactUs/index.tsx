import HBorder from "@components/HBorder";
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
      <ContactUsForm />
    </div>
  );
}
