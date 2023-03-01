import FilterList from "./FilterComponents/FilterList";
import Overlay from "./FilterComponents/Overlay";
import FilterSelect from "./FilterSelect";

import { useAppSelector } from "@toolkit/hook";
import { IProject } from "@type/exhibition";

export default function FilterScreen({ projects }: { projects: IProject[] }) {
  const isFilter = useAppSelector((state) => state.filter.isFilter);

  if (typeof window !== "undefined") {
    isFilter
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "auto");
  }

  return (
    <>
      {isFilter ? (
        <div className="z-50 w-screen h-screen">
          <div className="gap-32 mt-12 col-center">
            {/* 필터 분류 선택 */}
            <FilterSelect />

            {/* 필터 선택 목록 */}
            <FilterList projects={projects} />
          </div>

          {/* 배경 */}
          <Overlay />
        </div>
      ) : null}
    </>
  );
}
