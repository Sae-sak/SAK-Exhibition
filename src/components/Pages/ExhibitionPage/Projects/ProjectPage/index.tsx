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

  const thumbnail = `/images/exhibition/projects/${slug}/thumbnail.jpg`;

  return (
    <article>
      <ProjectHeader title={title} thumbnail={thumbnail} namepath={namepath} />
      <ProjectContent content={content} />
    </article>
  );
}
