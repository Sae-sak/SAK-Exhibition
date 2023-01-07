import {IProject} from "@constants/types/exhibition";
import Filter from "./Filter";
import Projects from "./Projects";

export default function ExhibitionPage({projects}: {projects: IProject[]}) {
  return (
    <>
      <Filter />
      <Projects projects={projects} />
    </>
  );
}
