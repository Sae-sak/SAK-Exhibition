import { useAppSelector } from "@toolkit/hook";
import { CATEGORIES } from "@type/Filter";

import FilterButton from "./FilterButton";
import UnactiveButton from "./UnativeButton";

export default function FilterSelect() {
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  return (
    <div className="z-50 w-56 gap-10 p-4 row-center">
      {CATEGORIES.map((CATEGORY) =>
        categoryName === "" || categoryName === CATEGORY ? (
          <FilterButton key={CATEGORY} categoryName={CATEGORY} />
        ) : (
          <UnactiveButton key={CATEGORY} categoryName={CATEGORY} />
        )
      )}
    </div>
  );
}
