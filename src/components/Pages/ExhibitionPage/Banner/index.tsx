import {disableFilter} from "@features/filter/filterSlice";
import {useAppDispatch, useAppSelector} from "@toolkit/hook";
import {studioNames} from "@constants/Filter";
import {StudioKRType} from "@constants/types/exhibition";

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

  return studentFilter !== "" ? (
    <div className="w-screen bg-red-300 col-center ">
      <div className="gap-2 row-center">
        <span>{studentFilter}</span>
        <i
          onClick={() => dispatch(disableFilter())}
          className="cursor-pointer top-10 right-10 ri-close-line"
        ></i>
      </div>
    </div>
  ) : studioFilter !== "" ? (
    <div className="w-screen bg-red-300 col-center ">
      <div className="gap-2 row-center">
        <span>{studioFilterKR}</span>
        <i
          onClick={() => dispatch(disableFilter())}
          className="cursor-pointer top-10 right-10 ri-close-line"
        ></i>
      </div>
    </div>
  ) : tagFilter !== "" ? (
    <div className="w-screen bg-red-300 col-center ">
      <div className="gap-2 row-center">
        <span>{tagFilter}</span>
        <i
          onClick={() => dispatch(disableFilter())}
          className="cursor-pointer top-10 right-10 ri-close-line"
        ></i>
      </div>
    </div>
  ) : null;
}
