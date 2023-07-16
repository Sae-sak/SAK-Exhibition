import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { photoActions } from "@features/photo/photoSlice";

import { motion } from "framer-motion";
import Overlay from "./Overlay";
import { OverlayVariant } from "@util/variants";

export default function ModalImage() {
  const { selectedId } = useAppSelector((state) => state.photo);
  const dispatch = useAppDispatch();

  return (
    <>
      <Overlay />

      {selectedId ? (
        <>
          <motion.div
            variants={OverlayVariant}
            className="col-center fixed bottom-0 top-0 z-50 h-screen w-screen"
            onClick={() => dispatch(photoActions.closePhoto())}
          >
            <Image
              src={selectedId}
              alt={selectedId + "modal"}
              fill
              sizes="100%"
              quality={80}
              className="h-auto w-auto object-contain"
            />
          </motion.div>
        </>
      ) : null}
    </>
  );
}
