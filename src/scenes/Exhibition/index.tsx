import { useEffect, useState } from "react";
import { useAppSelector } from "@toolkit/hook";

import FilterScreen from "./FilterScreen";
import Filter from "./Filter";
import List from "./List";

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
    <div className="col-center container px-3">
      {/* filter screen */}
      <FilterScreen projects={projects} />

      {/* filter button and banner */}
      <Filter />

      {/* filtered project list */}
      <List projects={filteredProjects} />
    </div>
  );
}
