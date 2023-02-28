import SNS from "./FooterItem/SNS";
import KGULinks from "./FooterItem/KGULinks";
import Copywrite from "./FooterItem/Copywrite";

export default function SimpleFooter() {
  return (
    <footer className="border-t">
      {/* sub footer */}
      <div className="container flex-wrap gap-2 px-5 py-2 mx-auto col-center sm:flex-row">
        <KGULinks />
        <Copywrite />
        <SNS />
      </div>
    </footer>
  );
}
