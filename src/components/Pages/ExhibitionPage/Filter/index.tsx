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
    <div className="z-90">
      {isFilter ? (
        <div className="relative w-screen h-screen ">
          {/* 필터 분류 선택 */}
          <FilterSelect />

          {/* 필터 선택 목록 */}
          <FilterList />

          {/* 배경 */}
          <Overlay />
        </div>
      ) : null}
    </div>
  );
}
