import HBorder from "@components/HBorder";
import { openFilter } from "@features/filter/filterSlice";
import { useAppDispatch } from "@toolkit/hook";

export default function FilterButton() {
  const dispatch = useAppDispatch();

  return (
    <div className="relative w-full col-center group">
      <button
        onClick={() => {
          dispatch(openFilter());
        }}
      >
        <div className="gap-12 text-3xl mb-[18px] row-center strea font-title">
          <span>Student</span>
          <div className="text-2xl">|</div>
          <span>Studio</span>
          <div className="text-2xl">|</div>
          <span>Tag</span>
        </div>
      </button>

      <HBorder />
    </div>
  );
}
