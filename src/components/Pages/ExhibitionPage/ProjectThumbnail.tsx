import {IProject} from "@constants/types/exhibition";
import Image from "next/image";
import Link from "next/link";

export default function ProjectThumbnail(props: {project: IProject}) {
  const {title, year, semester, studio, namePath, studentInfo, tags} =
    props.project;
  const projectPath = `${year}/${semester}/${studentInfo.grade}/${studio}/${namePath}`;
  const thumbnail = `/images/exhibition/projects/${projectPath}/thumbnail.jpg`;
  const profileImg = `/images/exhibition/students/${studio}/${namePath}.jpg`;

  return (
    <Link
      href={`/exhibition/${projectPath}`}
      className="flex flex-col items-center justify-center gap-4 bg-red-100 w-80 "
    >
      <div>
        <Image src={thumbnail} alt={title} width={300} height={200} />
      </div>

      <div>
        <h1>{title}</h1>

        <div>
          <p>Studio: {studio}</p>
          <p>{studentInfo.name}</p>
          <span>Tag: {tags}</span>
        </div>
      </div>
    </Link>
  );
}
