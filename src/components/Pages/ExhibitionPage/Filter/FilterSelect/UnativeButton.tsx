import {selectCategory} from "@features/filter/filterSlice";
import {useAppDispatch} from "@toolkit/hook";

export default function UnactiveButton({categoryName}) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="text-white"
      onClick={() => dispatch(selectCategory({categoryName}))}
    >
      <span>{categoryName}</span>
    </div>
  );
}
