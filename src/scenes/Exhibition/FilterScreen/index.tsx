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
        <div className="fixed top-0 z-50 w-screen h-screen">
          {/* 필터 분류 선택 */}
          <FilterSelect projects={projects} />

          {/* 필터 선택 목록 */}
        </div>
      ) : null}
    </>
  );
}
