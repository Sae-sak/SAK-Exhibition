import {studioNames} from "@constants/Filter";
import {IProject} from "@constants/types/exhibition";
import {STUDENT, STUDIO, TAG} from "@constants/types/filter";
import {useAppSelector} from "@toolkit/hook";
import FilterItem from "./FilterItem";

export default function FilterList({projects}: {projects: IProject[]}) {
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
    <div className="z-50 w-1/2 text-white ">
      <div className="flex-wrap gap-4 row-start">
        {categoryName === STUDENT
          ? studentNames.map((studentName) => {
              return <FilterItem key={studentName} studentName={studentName} />;
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
      </div>
    </div>
  );
}
