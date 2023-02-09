import Portal from "@components/Portal";
import ThemeChanger from "@util/Theme/ThemeChanger";
import { LayoutGroup } from "framer-motion";
import NavLink from "./NavLink";
import Overlay from "./Overlay";

const Menu = ({ setIsClicked }) => {
  return (
    <Overlay setIsClicked={setIsClicked}>
      <div className="z-40 gap-10 col-center">
        <nav className="w-48 gap-4 col-start sm:mt-auto ">
          <LayoutGroup>
            <NavLink linkpath={"home"} name={"Home"} />
            <NavLink linkpath={"about"} name={"About"} />
            <NavLink linkpath={"exhibition"} name={"Exhibition"} />
            <NavLink linkpath={"contactus"} name={"Contact Us"} />
          </LayoutGroup>
        </nav>

        {/* 토글 버튼 */}
        <ThemeChanger />
      </div>
    </Overlay>
  );
};

// HOC 적용
export default Portal(Menu);
