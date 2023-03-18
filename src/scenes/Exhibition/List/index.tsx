import { IProject } from "@type/exhibition";
import ThumbnailItem from "./Thumbnail-item";

export default function List({ projects }: { projects: IProject[] }) {
  return (
    <ul className="flex flex-wrap w-full">
      {projects.map((project: IProject) => (
        <ThumbnailItem project={project} key={project.slug} />
      ))}
    </ul>
  );
}
