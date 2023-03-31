import { useState } from "react";
import { motion } from "framer-motion";

import { StudioKRType, StudioType, TagType } from "@type/exhibition";
import { STUDENT, STUDIO, TAG } from "@constants/filter";

import {
  enableStudentFilter,
  enableStudioFilter,
  enableTagFilter,
} from "@features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";

export default function FilterItem({
  studentName = "",
  studioName = "",
  studioNameKR = "",
  tagName = "",
}: {
  studentName?: string;
  studioName?: StudioType;
  studioNameKR?: StudioKRType;
  tagName?: TagType;
}) {
  const dispatch = useAppDispatch();
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  const [indx, setIndx] = useState(0);
  const KGUColor = ["", "#E9511D", "#F49800", "#009E59", "#0050A0"];

  function onRandomKGUColor() {
    setIndx(Math.floor(((Math.random() * 10) % 4) + 1));
  }
  function onResetColor() {
    setTimeout(() => setIndx(0), 200);
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`w-20 h-8`}
      onMouseEnter={onRandomKGUColor}
      onMouseLeave={onResetColor}
      onClick={() => {
        categoryName === STUDENT
          ? dispatch(enableStudentFilter({ studentName }))
          : categoryName === STUDIO
          ? dispatch(enableStudioFilter({ studioName, studioNameKR }))
          : categoryName === TAG
          ? dispatch(enableTagFilter({ tagName }))
          : null;
      }}
    >
      <span style={{ color: `${KGUColor[indx]}` }}>
        {studentName !== "" && studentName}
        {studioName !== "" && studioNameKR}
        {tagName !== "" && tagName}
      </span>
    </motion.button>
  );
}
