import { useEffect, useState } from "react";
import { useAppSelector } from "@toolkit/hook";

import Filter from "./Filter";
import FilterButton from "./Filter/FilterButton";
import List from "./List";
import Banner from "./Banner";

import { IProject } from "@type/exhibition";
import { getFilteredProjects } from "@util/project-filtering";

export default function Exhibition({ projects }: { projects: IProject[] }) {
  const [filteredProjects, setFilteredProjects] = useState([]);

  const name = useAppSelector((state) => state.filter.studentFilter);
  const studio = useAppSelector((state) => state.filter.studioFilter);
  const tag = useAppSelector((state) => state.filter.tagFilter);

  useEffect(() => {
    const filteredProjects = getFilteredProjects(projects, {
      name,
      studio,
      tag,
    });
    setFilteredProjects(filteredProjects);
  }, [name, studio, tag, projects]);

  return (
    <div className="container px-3 py-5 col-center">
      {/* filter screen */}
      <Filter projects={projects} />

      {/* filter screen 활성화 버튼 */}
      <FilterButton />

      {/* filter selection results */}
      <Banner />

      {/* filtered project list */}
      <List projects={filteredProjects} />
    </div>
  );
}
