import {IProject} from "@constants/types/exhibition";
import Image from "next/image";
import Link from "next/link";

export default function ProjectThumbnail({project}: {project: IProject}) {
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
  } = project;
  const projectPath = `${year}/${semester}/${grade}/${studio}/${namepath}`;
  const thumbnail = `/images/exhibition/projects/${projectPath}/thumbnail.jpg`;
  const profileImg = `/images/exhibition/students/${studio}/${namepath}.jpg`;

  return (
    <Link
      href={`/exhibition/${projectPath}`}
      as={`/exhibition/${projectPath}`}
      className="flex flex-col items-center justify-center gap-4 bg-red-100 w-80 "
    >
      <div>
        <Image src={thumbnail} alt={title} width={300} height={200} />
      </div>

      <div>
        <span>{title}</span>

        <div>
          <p>Studio: {studio}</p>
          <p>name: {name}</p>
          <span>Tag: {tags}</span>
        </div>
      </div>
    </Link>
  );
}
