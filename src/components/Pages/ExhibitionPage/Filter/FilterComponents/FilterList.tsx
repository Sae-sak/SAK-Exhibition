import {
  studentNames,
  studioNames,
  programTags,
  typeTags,
} from "@constants/exhibition2023";
import {STUDENT, STUDIO, TAG} from "@constants/types/Filter";
import {useAppSelector} from "@toolkit/hook";
import FilterItem from "./FilterItem";

export default function FilterList() {
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  return (
    <>
      <div className="fixed z-10 flex flex-wrap w-1/2 gap-4 text-white">
        {categoryName === STUDENT
          ? studentNames.map((studentName) => {
              return <FilterItem key={studentName} filterName={studentName} />;
            })
          : null}

        {categoryName === STUDIO
          ? studioNames.map((studioName) => {
              return <FilterItem key={studioName} filterName={studioName} />;
            })
          : null}
        {categoryName === TAG
          ? programTags.map((programTag) => {
              return <FilterItem key={programTag} filterName={programTag} />;
            })
          : null}
        {categoryName === TAG
          ? typeTags.map((typeTag) => {
              return <FilterItem key={typeTag} filterName={typeTag} />;
            })
          : null}
      </div>
    </>
  );
}
