import { StudioKRType, StudioType, TagType } from "@type/exhibition";
import { STUDENT, STUDIO, TAG } from "@type/Filter";
import { motion } from "framer-motion";

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

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="cursor-pointer w-28"
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
      <span>
        {studentName !== ""
          ? studentName
          : studioName !== ""
          ? studioNameKR
          : tagName !== ""
          ? tagName
          : null}
      </span>
    </motion.button>
  );
}
