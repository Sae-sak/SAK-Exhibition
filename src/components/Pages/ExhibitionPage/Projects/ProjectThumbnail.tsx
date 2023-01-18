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
  const imagePath = `${slug.replaceAll("/", "_")}`;
  const thumbnailImg = `/posts-images/${imagePath}/thumbnail.jpg`;
  const profileImg = `/posts-images/${imagePath}/profile.jpg`;

  return (
    <li className="w-full p-2 mb-12 rounded lg:w-1/3 md:w-1/2">
      <Link href={`/exhibition/${slug}/`} as={`/exhibition/${slug}/`}>
        <Image
          src={thumbnailImg}
          alt={title}
          width={900}
          height={900}
          object-fit="cover"
          className="object-cover h-full"
          priority
        />
        <div className="h-14">
          <span className="text-sm text-gray-500 font-titleKR">{name}</span>
          <p className="text-gray-700 font-titleKR">{title}</p>
        </div>
      </Link>
    </li>
  );
}
