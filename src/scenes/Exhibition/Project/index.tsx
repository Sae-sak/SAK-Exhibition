import { IProject } from "@type/exhibition";
import Quote from "@components/Quote";

import ProjectHeader from "./ProjectHeader";
import ProjectContent from "./ProjectContent";

import AnchorUrl from "./AnchorUrl";
import StickyUrl from "./StickyUrl";

import ProgressBar from "./ProgressBar";
import ModalImage from "./ModalImage";
import Carousel from "./Carousel";
import Comment from "./Comment";
import StudentProfile from "./StudentProfile";

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
    email,
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
      <article className="container px-5 pb-5 ">
        <ProjectHeader
          title={title}
          name={name}
          excerpt={excerpt}
          thumbnailImg={thumbnailImg}
        />
        <section className="flex mt-4 border-r flex-nowrap lg:border-x">
          <section className="sticky hidden h-5 px-4 top-[90px] lg:w-1/4 lg:block">
            {/* anchor URLs */}
            <AnchorUrl content={content} />

            {/* sticky URLs */}
            <StickyUrl />
          </section>

          {/* content */}
          <section className="w-full px-4 border-l lg:w-3/4">
            <div className="pt-2 border-t">
              <ProjectContent content={content} />
              <Carousel data={drawingImgs} />
              <StudentProfile name={name} email={email} motto={motto} slug={slug} />
              <Comment />
              <Quote />
            </div>
          </section>
        </section>
      </article>

      <ModalImage />
    </>
  );
}
