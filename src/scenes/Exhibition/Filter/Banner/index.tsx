import { disableFilter } from "@features/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { studioNames } from "@constants/filter";
import { StudioKRType } from "@type/exhibition";

export default function Banner() {
  const dispatch = useAppDispatch();
  const studentFilter = useAppSelector((state) => state.filter.studentFilter);
  const studioFilter = useAppSelector((state) => state.filter.studioFilter);
  const studioFilterKR = useAppSelector((state) => state.filter.studioFilterKR);
  const tagFilter = useAppSelector((state) => state.filter.tagFilter);

  let studioName: StudioKRType = "";
  studioNames.filter((data) => {
    if (data.name === studentFilter) studioName = data.nameKR;
  });

  return (
    <div className="pb-[4px]">
      {studentFilter !== "" ? (
        <div className="flex items-center justify-end gap-2 text-lg font-bold font-body">
          <span>{studentFilter}</span>
          <i
            onClick={() => dispatch(disableFilter())}
            className="cursor-pointer top-10 right-10 ri-close-line"
          ></i>
        </div>
      ) : studioFilter !== "" ? (
        <div className="flex items-center justify-end gap-2 text-lg font-bold font-body">
          <span>{studioFilterKR}</span>
          <i
            onClick={() => dispatch(disableFilter())}
            className="cursor-pointer top-10 right-10 ri-close-line"
          ></i>
        </div>
      ) : tagFilter !== "" ? (
        <div className="flex items-center justify-end gap-2 text-lg font-bold font-body">
          <span>{tagFilter}</span>
          <i
            onClick={() => dispatch(disableFilter())}
            className="cursor-pointer top-10 right-10 ri-close-line"
          ></i>
        </div>
      ) : null}
    </div>
  );
}
