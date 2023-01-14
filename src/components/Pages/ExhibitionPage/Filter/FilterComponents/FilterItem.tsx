import {enableFilter} from "@features/filter/filterSlice";
import {useAppDispatch} from "@toolkit/hook";

export default function FilterItem({filterName}) {
  const dispatch = useAppDispatch();

  return (
    <button
      className="w-20 cursor-pointer hover:text-kgu_main_yellow"
      onClick={() => dispatch(enableFilter({filterName}))}
    >
      <span>{filterName}</span>
    </button>
  );
}
