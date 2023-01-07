import {IProject} from "@constants/types/exhibition";
import ProjectThumbnail from "./ProjectThumbnail";

export default function Projects({projects}: {projects: IProject[]}) {
  return (
    <div className="bg-red-300">
      <ul className="flex flex-col gap-4">
        {projects.map((project: IProject) => (
          <li key={project.email}>
            <ProjectThumbnail project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
