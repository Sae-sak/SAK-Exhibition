import {
  studentNames,
  studioNames,
  programTags,
  typeTags,
} from "@constants/exhibition2023";
import FilterItem from "./FilterItem";

export default function FilterList({
  isActive,
  setIsSetFilter,
  setIsFilter,
  names,
}) {
  const [STUDENT, STUDIO, TAG] = names;

  return (
    <>
      <div className="fixed z-10 flex flex-wrap w-1/2 gap-4 text-white">
        {isActive === STUDENT
          ? studentNames.map((studentName) => {
              return (
                <FilterItem
                  key={studentName}
                  setIsSetFilter={setIsSetFilter}
                  setIsFilter={setIsFilter}
                  filterName={studentName}
                />
              );
            })
          : null}

        {isActive === STUDIO
          ? studioNames.map((studioName) => {
              return (
                <FilterItem
                  key={studioName}
                  setIsSetFilter={setIsSetFilter}
                  setIsFilter={setIsFilter}
                  filterName={studioName}
                />
              );
            })
          : null}
        {isActive === TAG
          ? programTags.map((programTag) => {
              return (
                <FilterItem
                  key={programTag}
                  setIsSetFilter={setIsSetFilter}
                  setIsFilter={setIsFilter}
                  filterName={programTag}
                />
              );
            })
          : null}
        {isActive === TAG
          ? typeTags.map((typeTag) => {
              return (
                <FilterItem
                  key={typeTag}
                  setIsSetFilter={setIsSetFilter}
                  setIsFilter={setIsFilter}
                  filterName={typeTag}
                />
              );
            })
          : null}
      </div>
    </>
  );
}
