import FilterList from "./FilterComponents/FilterList";
import Overlay from "./FilterComponents/Overlay";
import FilterSelect from "./FilterSelect";

import {useAppSelector} from "@toolkit/hook";

export default function Filter() {
  const isFilter = useAppSelector((state) => state.filter.isFilter);

  if (typeof window !== "undefined") {
    isFilter
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "auto");
  }

  return (
    <>
      {isFilter ? (
        <div className="z-50 w-screen h-screen ">
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
    </>
  );
}
