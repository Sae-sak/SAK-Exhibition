import {IProject} from "@constants/types/exhibition";
import Filter from "./Filter";
import Projects from "./Projects";

export default function ExhibitionPage(props: {projects: IProject[]}) {
  const {projects} = props;
  return (
    <>
      <Filter />
      <Projects projects={projects} />
    </>
  );
}
