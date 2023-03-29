import { useAppSelector } from "@toolkit/hook";

import { IProject } from "@type/exhibition";

import { STUDENT, STUDIO, studioNames, TAG } from "@constants/filter";
import FilterItem from "./FilterItem";
import { AnimatePresence } from "framer-motion";

export default function FilterList({ projects }: { projects: IProject[] }) {
  const categoryName = useAppSelector((state) => state.filter.categoryName);

  const studentNames = projects.map((project) => project.name);

  const tagNames = [];
  const tagsArr = projects.map((project) => project.tags);
  for (let tagArr of tagsArr) {
    for (let i = 0; i < tagArr.length; i++) {
      if (!tagNames.includes(tagArr[i])) {
        tagNames.push(tagArr[i]);
      }
    }
  }

  return (
    <div className="z-50 w-full col-center">
      <div className="flex-wrap p-4 gap-4 row-start max-w-[700px]">
        <AnimatePresence mode="wait">
          {categoryName === STUDENT
            ? studentNames.map((studentName) => {
                return (
                  <FilterItem key={studentName} studentName={studentName} />
                );
              })
            : null}

          {categoryName === STUDIO
            ? studioNames.map((studioName) => {
                return (
                  <FilterItem
                    key={studioName.name}
                    studioName={studioName.name}
                    studioNameKR={studioName.nameKR}
                  />
                );
              })
            : null}

          {categoryName === TAG
            ? tagNames.map((tag) => {
                return <FilterItem key={tag} tagName={tag} />;
              })
            : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
