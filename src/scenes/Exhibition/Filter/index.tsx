import { disableFilter } from "@features/filter/filterSlice";
import HBorder from "@components/HBorder";
import { openFilter } from "@features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";

export default function Filter() {
  const dispatch = useAppDispatch();
  const { tagFilter, studioFilterKR, studioFilter, studentFilter } =
    useAppSelector((state) => state.filter);

  return (
    <div className="col-center container w-screen px-5">
      <div className="flex w-full items-center justify-between gap-4 pt-4">
        {/* 필터 버튼 */}
        <button
          onClick={() => {
            dispatch(openFilter());
          }}
          className="w-32 flex-shrink-0 rounded-full border py-1"
        >
          <span className="font-accent text-lg">
            {studentFilter !== ""
              ? "Student"
              : studentFilter !== ""
              ? "Studio"
              : studentFilter !== ""
              ? "Tag"
              : "Filter"}
          </span>
        </button>

        <HBorder />

        {/* 필터링한 요소 */}
        {studentFilter !== "" ? (
          <div className="flex flex-shrink-0 items-center justify-end gap-2 text-lg font-medium">
            <span>{studentFilter}</span>
            <i
              onClick={() => dispatch(disableFilter())}
              className="ri-close-line cursor-pointer pt-0.5"
            ></i>
          </div>
        ) : studioFilter !== "" ? (
          <div className="flex flex-shrink-0 items-center justify-end gap-2 text-lg font-medium">
            <span>{studioFilterKR}</span>
            <i
              onClick={() => dispatch(disableFilter())}
              className="ri-close-line cursor-pointer pt-0.5"
            ></i>
          </div>
        ) : tagFilter !== "" ? (
          <div className="flex flex-shrink-0 items-center justify-end gap-2 text-lg font-medium">
            <span>{tagFilter}</span>
            <i
              onClick={() => dispatch(disableFilter())}
              className="ri-close-line cursor-pointer pt-0.5"
            ></i>
          </div>
        ) : null}
      </div>
    </div>
  );
}
