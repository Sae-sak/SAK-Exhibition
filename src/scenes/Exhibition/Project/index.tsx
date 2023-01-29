import { IProject } from "@type/exhibition";

import ProjectHeader from "./ProjectHeader";
import ProjectContent from "./ProjectContent";

import AnchorUrl from "./AnchorUrl";
import StickyUrl from "./StickyUrl";

import ProgressBar from "./ProgressBar";
import ModalImage from "./ModalImage";
import Carousel from "./Carousel";
import Comment from "./Comment";

export default function Project({ projectData }: { projectData: IProject }) {
  const {
    slug,
    title,
    excerpt,
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

  const imagePath = `/posts-images/${slug.replaceAll("/", "_")}`;
  const thumbnailImg = `${imagePath}/thumbnail.jpg`;
  const drawingImgs = [
    `${imagePath}/draw1.jpg`,
    `${imagePath}/draw2.jpg`,
    `${imagePath}/draw3.jpg`,
  ];

  return (
    <>
      <ProgressBar />
      <article className="container p-5 ">
        <ProjectHeader
          title={title}
          name={name}
          excerpt={excerpt}
          thumbnailImg={thumbnailImg}
        />

        {/* body 세등분 */}
        <section className="flex pt-24 flex-nowrap">
          {/* sticky URLs */}
          <section className="sticky hidden h-5 top-52 lg:w-1/6 lg:block">
            <StickyUrl />
          </section>

          {/* content */}
          <section className="w-full lg:w-2/3">
            <ProjectContent content={content} />
            <Carousel data={drawingImgs} />
            <Comment />
          </section>

          {/* anchor URLs */}
          <section className="sticky hidden h-5 top-52 lg:w-1/6 lg:block">
            <AnchorUrl content={content} />
          </section>
        </section>
      </article>

      <ModalImage />
    </>
  );
}
