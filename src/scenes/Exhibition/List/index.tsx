import { IProject } from "@type/exhibition";
import ThumbnailItem from "./Thumbnail-item";

export default function List({ projects }: { projects: IProject[] }) {
  return (
    <div className="">
      <div className="container flex flex-wrap mx-auto"></div>

      <ul className="container flex flex-wrap mx-auto">
        {projects.map((project: IProject) => (
          <ThumbnailItem project={project} key={project.slug} />
        ))}
      </ul>
    </div>
  );
}
