import {selectCategory} from "@features/filter/filterSlice";
import {useAppDispatch} from "@toolkit/hook";

export default function FilterButton({categoryName}) {
  const dispatch = useAppDispatch();

  return (
    <div className="gap-4 cursor-pointer row-center">
      <span
        className="text-4xl text-right text-white"
        onClick={() => dispatch(selectCategory({categoryName}))}
      >
        {categoryName}
      </span>
      <i className="text-3xl text-white ri-search-line"></i>
    </div>
  );
}
