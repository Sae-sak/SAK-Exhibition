import {useAppDispatch} from "@toolkit/hook";
import {openFilter} from "@features/filter/filterSlice";

export default function FilterButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative h-16 flex justify-between w-screen border">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  border row-center ">
        <div className="border h-16 w-16"></div>
        <button
          onClick={() => {
            dispatch(openFilter());
          }}
        >
          <h1 className="text-3xl font-bold">- Filter -</h1>
        </button>
        <div className="border h-16 w-16 col-center">
          <i className="ri-question-line border text-xl"></i>
        </div>
      </div>
    </div>
  );
}
