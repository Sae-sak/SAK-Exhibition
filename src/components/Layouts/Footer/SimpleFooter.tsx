import SNS from "./FooterItem/SNS";
import KGULinks from "./FooterItem/KGULinks";
import Copywrite from "./FooterItem/Copywrite";

export default function SimpleFooter() {
  return (
    <footer className="text-gray-600 body-font">
      {/* sub footer */}
      <div className="bg-gray-200">
        <div className="container flex-wrap gap-2 px-5 py-4 mx-auto col-center sm:flex-row">
          <KGULinks />
          <Copywrite />
          <SNS />
        </div>
      </div>
    </footer>
  );
}
