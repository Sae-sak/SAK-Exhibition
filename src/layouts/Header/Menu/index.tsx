import Portal from "@components/Portal";

import { motion } from "framer-motion";

import Overlay from "./Overlay";
import KGUCorner from "./KGUCorner";
import ThemeChanger from "@util/Theme/ThemeChanger";
import NavLinks from "./NavLinks";

const Menu = ({ setIsClicked }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed z-40 w-screen h-screen col-center"
      >
        <div className="z-30 gap-10 col-center">
          {/* 네비게이션 버튼들 */}
          <NavLinks />

          {/* KGU 로고의 양쪽 코너 */}
          <KGUCorner />

          {/* 토글 버튼 */}
          <ThemeChanger />
        </div>

        {/* 화면 덮기 */}
        <Overlay setIsClicked={setIsClicked} />
      </motion.div>
    </>
  );
};

export default Portal(Menu);
