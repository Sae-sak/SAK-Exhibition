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
    <li className="w-full p-2 mb-10 rounded lg:w-1/3 md:w-1/2">
      <Link
        href={`/exhibition/${projectPath}`}
        as={`/exhibition/${projectPath}`}
      >
        <Image
          src={thumbnail}
          alt={title}
          width={900}
          height={900}
          object-fit="cover"
          className="object-cover h-full"
        />
        <span className="text-sm text-gray-500 font-titleKR">{name}</span>
        <p className="text-gray-700 font-titleKR">{title}</p>
      </Link>
    </li>
  );
}
