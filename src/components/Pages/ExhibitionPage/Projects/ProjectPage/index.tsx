import ProjectHeader from "./ProjectHeader";
import ProjectContent from "./ProjectContent";
import {IProject} from "@constants/types/exhibition";

export default function ProjectPage({projectData}: {projectData: IProject}) {
  const {
    slug,
    title,
    date,
    year,
    semester,
    grade,
    studio,
    namepath,
    tags,
    name,
    motto,
    content,
  } = projectData;

  const thumbnailImg = `/images/exhibition/${slug.replaceAll(
    "/",
    " "
  )}/thumbnail.jpg`;

  return (
    <article>
      <div className="container flex-wrap p-5 mx-auto">
        <ProjectHeader title={title} thumbnailImg={thumbnailImg} />
        <div>
          <ProjectContent content={content} />
        </div>
      </div>
    </article>
  );
}
