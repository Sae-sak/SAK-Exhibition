import MainFooter from "./MainFooter";
import SimpleFooter from "./SimpleFooter";

export default function Footer() {
  return (
    <footer className="border-t ">
      {/* main footer */}
      <MainFooter />

      {/* sub footer */}
      <SimpleFooter />
    </footer>
  );
}
