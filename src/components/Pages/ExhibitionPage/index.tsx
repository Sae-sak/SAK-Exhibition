import Filter from "./Filter";
import Projects from "./Projects";
import Banner from "./Banner";

import {IProject} from "@constants/types/exhibition";

import {useAppSelector} from "@toolkit/hook";
import {useEffect, useState} from "react";
import {getFilteredProjects} from "@components/Base/Util/project-util";

export default function ExhibitionPage({projects}: {projects: IProject[]}) {
  const name = useAppSelector((state) => state.filter.studentFilter);
  const studio = useAppSelector((state) => state.filter.studioFilter);
  const tag = useAppSelector((state) => state.filter.tagFilter);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const filteredProjects = getFilteredProjects(projects, {name, studio, tag});
    setFilteredProjects(filteredProjects);
  }, [name, studio, tag, projects]);

  return (
    <>
      <Filter />
      <Banner />
      <Projects projects={filteredProjects} />
    </>
  );
}
