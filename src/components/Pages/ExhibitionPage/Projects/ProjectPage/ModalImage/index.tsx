import Image from "next/image";
import {motion, useAnimation} from "framer-motion";

import {modalOverlay} from "@components/Base/Util/Variants/modalOverlay";

import {useAppDispatch, useAppSelector} from "@toolkit/hook";
import {photoActions} from "@features/photo/photoSlice";
import Overlay from "./Overlay";

export default function ModalImage() {
  const {selectedId} = useAppSelector((state) => state.photo);
  const dispatch = useAppDispatch();

  return (
    <>
      <Overlay />

      <motion.div
        variants={modalOverlay}
        className="fixed top-0 bottom-0 z-10 col-center"
        onClick={() => dispatch(photoActions.closePhoto())}
      >
        {selectedId ? (
          <Image
            src={selectedId}
            alt={selectedId + "modal"}
            width={600}
            height={300}
          />
        ) : null}
      </motion.div>
    </>
  );
}
