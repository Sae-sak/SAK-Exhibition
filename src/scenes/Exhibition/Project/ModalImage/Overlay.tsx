import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { photoActions } from "@features/photo/photoSlice";

import { motion, useAnimation } from "framer-motion";
import { OverlayVariant } from "@util/variants";

export default function Overlay() {
  const { selectedId } = useAppSelector((state) => state.photo);
  const dispatch = useAppDispatch();

  const overlayAni = useAnimation();

  useEffect(() => {
    if (selectedId) {
      overlayAni.start("on");
      if (typeof window !== "undefined")
        window.document.body.style.overflow = "hidden";
    } else {
      overlayAni.start("off");
      if (typeof window !== "undefined")
        window.document.body.style.overflow = "auto";
    }
  }, [selectedId, overlayAni]);

  return (
    <motion.div
      variants={OverlayVariant}
      className="fixed top-0 left-0 w-screen h-screen "
      animate={overlayAni}
      onClick={() => dispatch(photoActions.closePhoto())}
    ></motion.div>
  );
}
