import FilterList from "./FilterComponents/FilterList";
import Overlay from "./FilterComponents/Overlay";
import FilterSelect from "./FilterSelect";

import {useAppDispatch, useAppSelector} from "@toolkit/hook";
import {openFilter} from "@features/filter/filterSlice";

export default function Filter() {
  const dispatch = useAppDispatch();
  const isFilter = useAppSelector((state) => state.filter.isFilter);

  return (
    <>
      <button
        onClick={() => {
          dispatch(openFilter());
        }}
      >
        <h1 className="text-3xl font-bold">- Filter -</h1>
      </button>

      {isFilter ? (
        <>
          {/* 필터 분류 선택 */}
          <FilterSelect />

          {/* 필터 선택 목록 */}
          <FilterList />

          {/* 배경 */}
          <Overlay />
        </>
      ) : null}
    </>
  );
}
