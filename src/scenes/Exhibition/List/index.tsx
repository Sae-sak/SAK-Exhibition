import { IProject } from "@type/exhibition";
import ThumbnailItem from "./Thumbnail-item";

export default function List({ projects }: { projects: IProject[] }) {
  return (
    <ul className="flex w-full flex-wrap py-2">
      {projects.map((project: IProject) => (
        <ThumbnailItem key={project.slug} project={project} />
      ))}
    </ul>
  );
}
