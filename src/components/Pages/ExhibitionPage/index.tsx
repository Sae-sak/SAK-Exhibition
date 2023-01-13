import {IProject} from "@constants/types/exhibition";
import Filter from "./Filter";
import Projects from "./Projects";
import Banner from "./Banner";

export default function ExhibitionPage({projects}: {projects: IProject[]}) {
  return (
    <>
      <Filter />
      <Banner />
      <Projects projects={projects} />
    </>
  );
}
