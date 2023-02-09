import { useState } from "react";
import Menu from "@layouts/Header/Menu";
import { AnimatePresence } from "framer-motion";

export default function MenuToggle() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {isClicked && <Menu setIsClicked={setIsClicked} />}
      </AnimatePresence>

      <i
        onClick={() => setIsClicked(true)}
        className="text-2xl ri-menu-3-line"
      />
    </>
  );
}
