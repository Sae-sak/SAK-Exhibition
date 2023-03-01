import { selectCategory } from "@features/filter/filterSlice";
import { useAppDispatch } from "@toolkit/hook";

export default function FilterButton({ categoryName }) {
  const dispatch = useAppDispatch();

  return (
    <span
      className="text-3xl font-bold text-right transition-all cursor-pointer"
      onClick={() => dispatch(selectCategory({ categoryName }))}
    >
      {categoryName}
    </span>
  );
}
