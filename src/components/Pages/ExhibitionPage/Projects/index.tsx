import {IProject} from "@constants/types/exhibition";
import ProjectThumbnail from "../ProjectThumbnail";

export default function Projects(props) {
  const {projects} = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <ul className="flex flex-col gap-4">
        {projects.map((project: IProject) => (
          <ProjectThumbnail key={project.studentInfo.email} project={project} />
        ))}
      </ul>
    </div>
  );
}
