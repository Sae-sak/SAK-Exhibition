import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { IProject } from "@type/exhibition";

export default function ThumbnailItem({ project }: { project: IProject }) {
  const { slug, title, name, excerpt } = project;
  const imagePath = `${slug.replaceAll("/", "_")}`;
  const thumbnailImg = `/posts-images/${imagePath}/thumbnail.jpg`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group mb-12 w-full p-2 pt-4 md:w-1/2 lg:w-1/3"
      >
        <Link rel="preload" href={`/exhibition/${slug}`}>
          <div className="relative h-full border bg-white dark:bg-black">
            {/* 썸네일 이미지 */}
            <Image
              src={thumbnailImg}
              alt={title}
              width={630}
              height={400}
              className="h-full object-cover transition-all group-hover:opacity-30"
              quality={50}
              loading="lazy"
            />

            {/* hover 시 설명 노출 */}
            <div className="absolute top-0 hidden p-4 transition-all group-hover:block">
              <p className="text-lg ">{excerpt}</p>
            </div>
          </div>

          {/* 학생이름, 프로젝트 제목 */}
          <div className="col-center h-14 border border-t-0 bg-white px-3 dark:bg-black">
            <span className="text-sm">{name}</span>
            <p className="text-center font-medium ">{title}</p>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
