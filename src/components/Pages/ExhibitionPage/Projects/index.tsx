import {IProject} from "@constants/types/exhibition";
import ProjectThumbnail from "./ProjectThumbnail";

export default function Projects({projects}: {projects: IProject[]}) {
  return (
    <div className="">
      <div className="container flex flex-wrap mx-auto"></div>

      <ul className="container flex flex-wrap mx-auto">
        {projects.map((project: IProject) => (
          <ProjectThumbnail project={project} key={project.slug} />
        ))}
      </ul>
    </div>
  );
}
