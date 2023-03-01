import { selectCategory } from "@features/filter/filterSlice";
import { useAppDispatch } from "@toolkit/hook";

export default function FilterButton({ categoryName }) {
  const dispatch = useAppDispatch();

  return (
    <span
      className="text-2xl text-right transition-all cursor-pointer hover:font-bold"
      onClick={() => dispatch(selectCategory({ categoryName }))}
    >
      {categoryName}
    </span>
  );
}
