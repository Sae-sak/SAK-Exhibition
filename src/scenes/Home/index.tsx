import HBorder from "@components/HBorder";
import CTA from "./CTA";
import Greetings from "./Greetings";
import Introduce from "./Introduce";
import Overview from "./Overview";
import Points from "./Points";
import FindWay from "./FindWay";

export default function Home() {
  return (
    <div className="w-full col-center px-5">
      <Greetings />
      <HBorder />

      <Introduce />
      <HBorder />

      <Points />
      <HBorder />

      <CTA />
      <HBorder />

      <Overview />
      <HBorder />

      <FindWay />
    </div>
  );
}
