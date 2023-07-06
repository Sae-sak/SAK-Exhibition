import HBorder from "@components/HBorder";
import Committee from "./Committee";
import Team from "./Team/Index";
import ContactSection from "./ContactSection";
import Contributors from "./Contributors";

export default function ContactUs() {
  return (
    <div className="w-full col-center px-5">
      <Committee />
      <HBorder />

      <Team />
      <HBorder />

      <Contributors />
      <HBorder />

      <ContactSection />
    </div>
  );
}
