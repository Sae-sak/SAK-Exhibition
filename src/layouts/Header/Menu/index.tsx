import Portal from "@components/Portal";
import ThemeChanger from "@util/Theme/ThemeChanger";
import { motion, LayoutGroup } from "framer-motion";
import NavLink from "./NavLink";
import Overlay from "./Overlay";

const Menu = ({ setIsClicked }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-40 w-screen h-screen col-center"
      >
        <div className="z-30 gap-10 col-center">
          <nav className="w-48 gap-4 col-start sm:mt-auto ">
            <LayoutGroup>
              <NavLink linkpath={"home"} name={"Home"} />
              <NavLink linkpath={"about"} name={"About"} />
              <NavLink linkpath={"exhibition"} name={"Exhibition"} />
              <NavLink linkpath={"contactus"} name={"Contact Us"} />
            </LayoutGroup>
          </nav>

          <div className="absolute -left-[230px] rotate-45 w-[280px] h-[280px] border-[50px] border-t-kgu_main_red border-r-kgu_main_yellow md:w-[600px] md:h-[600px] md:border-[100px] md:-left-[500px] dark:border-t-kgu_main_red dark:border-r-kgu_main_yellow "></div>
          <div className="absolute -right-[230px] rotate-45 w-[280px] h-[280px] border-[50px] border-l-kgu_main_blue border-b-kgu_main_green md:w-[600px] md:h-[600px] md:border-[100px] md:-right-[500px] dark:border-l-kgu_main_blue dark:border-b-kgu_main_green"></div>

          {/* 토글 버튼 */}
          <ThemeChanger />
        </div>
        <Overlay setIsClicked={setIsClicked} />
      </motion.div>
    </>
  );
};

export default Portal(Menu);
