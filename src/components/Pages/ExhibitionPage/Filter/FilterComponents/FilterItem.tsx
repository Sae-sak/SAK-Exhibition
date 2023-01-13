import {enableFilter} from "@features/filter/filterSlice";
import {useAppDispatch} from "@toolkit/hook";

export default function FilterItem({filterName}) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="cursor-pointer hover:text-red-600"
      onClick={() => dispatch(enableFilter({filterName}))}
    >
      <span>{filterName}</span>
    </button>
  );
}
