import {disableFilter} from "@features/filter/filterSlice";
import {useAppDispatch, useAppSelector} from "@toolkit/hook";

export default function Banner() {
  const dispatch = useAppDispatch();
  const filterName = useAppSelector((state) => state.filter.filterName);

  return filterName !== "" ? (
    <div className="w-screen bg-red-300 col-center ">
      <div className="gap-2 row-center">
        <span>{filterName}</span>
        <i
          onClick={() => dispatch(disableFilter())}
          className="cursor-pointer top-10 right-10 ri-close-line"
        ></i>
      </div>
    </div>
  ) : null;
}
