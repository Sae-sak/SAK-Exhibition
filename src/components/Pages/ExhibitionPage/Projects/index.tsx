import {IProject} from "@constants/types/exhibition";
import ProjectThumbnail from "./ProjectThumbnail";
import Image from "next/image";

export default function Projects({projects}: {projects: IProject[]}) {
  return (
    <div className="bg-red-300">
      <div className="container flex flex-wrap mx-auto"></div>

      <ul className="container flex flex-wrap mx-auto">
        {projects.map((project: IProject) => (
          <ProjectThumbnail project={project} key={project.email} />
        ))}
      </ul>
    </div>
  );
}
