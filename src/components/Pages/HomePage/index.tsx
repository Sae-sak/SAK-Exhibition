import CTA from "./CTA";
import Guide from "./Guide";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <div className="container px-5">
      <Hero />
      <Guide />
      <CTA />
    </div>
  );
}
