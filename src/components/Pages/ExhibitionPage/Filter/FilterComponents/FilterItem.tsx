import {STUDENT, STUDIO, TAG} from "@constants/types/Filter";
import {
  enableStudentFilter,
  enableStudioFilter,
  enableTagFilter,
} from "@features/filter/filterSlice";
import {useAppDispatch, useAppSelector} from "@toolkit/hook";

export default function FilterItem({filterName}) {
  const dispatch = useAppDispatch();
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  return (
    <button
      className="w-20 cursor-pointer hover:text-kgu_main_yellow"
      onClick={() => {
        categoryName === STUDENT
          ? dispatch(enableStudentFilter({filterName}))
          : categoryName === STUDIO
          ? dispatch(enableStudioFilter({filterName}))
          : categoryName === TAG
          ? dispatch(enableTagFilter({filterName}))
          : null;
      }}
    >
      <span>{filterName}</span>
    </button>
  );
}
