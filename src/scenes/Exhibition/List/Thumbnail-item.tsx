import { useState } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Loading from "@components/Loading";

import { IProject } from "@type/exhibition";

export default function ThumbnailItem({ project }: { project: IProject }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
    excerpt,
    content,
  } = project;
  const imagePath = `${slug.replaceAll("/", "_")}`;
  const thumbnailImg = `/posts-images/${imagePath}/thumbnail.jpg`;
  const profileImg = `/posts-images/${imagePath}/profile.jpg`;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full p-2 pt-4 mb-12 lg:w-1/3 md:w-1/2 group"
      >
        <Link
          rel="preload"
          href={`/exhibition/${slug}/`}
          onClick={(e) => {
            if (e.ctrlKey || e.metaKey) return;
            e.preventDefault();
            setIsLoading(true);
            router.push(e.currentTarget.href);
          }}
        >
          <div className="relative h-full border border-light_font_1 dark:border-night_font_1">
            <Image
              src={thumbnailImg}
              alt={title}
              width={630}
              height={400}
              className="object-cover h-full transition-all bg-black group-hover:opacity-30"
              loading="lazy"
            />

            <div className="absolute top-0 hidden p-4 transition-all group-hover:block">
              <p className="text-lg font-body">{excerpt}</p>
            </div>
          </div>
          <div className="px-3 border border-t-0 border-light_font_1 col-center h-14 dark:border-night_font_1">
            <span className="text-sm font-bold font-body">{name}</span>
            <p className="font-bold text-center font-body">{title}</p>
          </div>
        </Link>
      </motion.div>
      {isLoading && <Loading />}
    </>
  );
}
