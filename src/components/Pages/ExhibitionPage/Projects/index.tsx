import {IProject} from "@constants/types/exhibition";
import ProjectThumbnail from "../ProjectThumbnail";

export default function Projects(props) {
  const {projects} = props;

  return (
    <div className="bg-red-300">
      <ul className="flex flex-col gap-4">
        {projects.map((project: IProject) => (
          <ProjectThumbnail key={project.studentInfo.email} project={project} />
        ))}
      </ul>
    </div>
  );
}
