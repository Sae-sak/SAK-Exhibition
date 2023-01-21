import {useAppDispatch} from "@toolkit/hook";
import {openFilter} from "@features/filter/filterSlice";

export default function FilterButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative flex justify-between w-screen h-16 border">
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 border left-1/2 top-1/2 row-center ">
        <div className="w-16 h-16 border"></div>

        <button
          onClick={() => {
            dispatch(openFilter());
          }}
        >
          <h1 className="text-3xl font-bold">- Filter -</h1>
        </button>

        <div className="w-16 h-16 border col-center">
          <i className="text-xl border ri-question-line"></i>
        </div>
      </div>
    </div>
  );
}
