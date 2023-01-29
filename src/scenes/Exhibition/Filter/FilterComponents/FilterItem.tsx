import { StudioKRType, StudioType, TagType } from "@type/exhibition";
import { STUDENT, STUDIO, TAG } from "@type/Filter";

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
    <>
      <button
        className="cursor-pointer w-28 hover:text-kgu_main_yellow"
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
      </button>
    </>
  );
}
