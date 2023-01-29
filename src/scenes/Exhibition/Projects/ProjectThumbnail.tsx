import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IProject } from "@type/exhibition";

export default function ProjectThumbnail({ project }: { project: IProject }) {
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
    <motion.div
      className="w-full p-2 mb-12 rounded lg:w-1/3 md:w-1/2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link
        rel="preload"
        href={`/exhibition/${slug}/`}
        as={`/exhibition/${slug}/`}
      >
        <Image
          src={thumbnailImg}
          alt={title}
          width={900}
          height={900}
          object-fit="cover"
          className="object-cover h-full"
          loading="lazy"
        />
        <div className="h-14">
          <span className="text-sm text-gray-500 font-titleKR">{name}</span>
          <p className="text-gray-700 font-titleKR">{title}</p>
        </div>
      </Link>
    </motion.div>
  );
}
