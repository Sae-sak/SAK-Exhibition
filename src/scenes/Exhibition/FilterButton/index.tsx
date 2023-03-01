import { useAppDispatch } from "@toolkit/hook";
import { openFilter } from "@features/filter/filterSlice";
import Banner from "./Banner";

export default function FilterButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="container flex items-center justify-between w-screen px-5">
      <div className=" relative h-[32px]">
        <div className="absolute left-0 top-2">
          <div className="top-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
          <div className="w-[120px] z-20 h-3"></div>
          <div className="bottom-[8px] h-[1px] w-full bg-light_gray_1 dark:bg-night_gray_1" />
        </div>
        <button
          onClick={() => {
            dispatch(openFilter());
          }}
          className="absolute w-[120px] z-20 "
        >
          <h3 className="text-xl font-bold font-body dark:text-night_main_yellow">
            Filtered by {">"}
          </h3>
        </button>
      </div>
      {/* filter selection results */}
      <Banner />
    </div>
  );
}
