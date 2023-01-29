import CTA from "./CTA";
import Greetings from "./Greetings";
import Introduce from "./Introduce";
import Overview from "./Overview";
import Points from "./Points";

export default function Home() {
  return (
    <div className="container px-5">
      <Greetings />
      <Introduce />
      <Points />
      <CTA />
      <Overview />
    </div>
  );
}
