import FilterList from "./FilterComponents/FilterList";
import Overlay from "./FilterComponents/Overlay";
import FilterSelect from "./FilterSelect";

import {useAppDispatch, useAppSelector} from "@toolkit/hook";
import {openFilter} from "@features/filter/filterSlice";

export default function Filter() {
  const dispatch = useAppDispatch();
  const isFilter = useAppSelector((state) => state.filter.isFilter);

  if (typeof window !== "undefined") {
    isFilter
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "auto");
  }

  return (
    <div className="z-90">
      <button
        onClick={() => {
          dispatch(openFilter());
        }}
      >
        <h1 className="text-3xl font-bold">- Filter -</h1>
      </button>

      {isFilter ? (
        <div className="relative w-screen h-screen ">
          <div className="top-0 gap-24 row-center">
            {/* 필터 분류 선택 */}
            <FilterSelect />

            {/* 필터 선택 목록 */}
            <FilterList />
          </div>

          {/* 배경 */}
          <Overlay />
        </div>
      ) : null}
    </div>
  );
}
