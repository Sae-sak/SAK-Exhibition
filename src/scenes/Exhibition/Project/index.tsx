import { IProject } from "@type/exhibition";
import Quote from "@components/Quote";

import ProjectHeader from "./ProjectHeader";
import ProjectContent from "./ProjectContent";

import AnchorUrl from "./AnchorUrl";
import StickyUrl from "./StickyUrl";

import ProgressBar from "./ProgressBar";
import Carousel from "./Carousel";
import Comment from "./Comment";
import StudentProfile from "./StudentProfile";
import checkImageExists from "@util/checkImageExists";
import { useEffect, useState } from "react";

export default function Project({ projectData }: { projectData: IProject }) {
  const { slug, title, excerpt, name, email, motto, content } = projectData;

  // thumbnail image 주소를 저장
  const thumbnail = `/posts-images/${slug.replaceAll("/", "_")}/thumbnail.jpg`;

  // drawing images 주소를 배열에 저장
  const [drawingImgs, setDrawingImgs] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      const drawingImg = `/posts-images/${slug.replaceAll(
        "/",
        "_"
      )}/draw${i}.jpg`;
      checkImageExists(drawingImg).then((res) => {
        if (res) {
          setDrawingImgs((prev) => [...prev, drawingImg]);
        }
      });
    }
  }, [slug]);

  return (
    <>
      <ProgressBar />
      <article className="container px-5 pb-5 ">
        <ProjectHeader
          title={title}
          name={name}
          excerpt={excerpt}
          thumbnail={thumbnail}
        />
        <section className="mt-4 flex flex-nowrap border-r lg:border-x">
          <section className="sticky top-[90px] hidden h-5 px-4 lg:block lg:w-1/4">
            {/* anchor URLs */}
            <AnchorUrl content={content} />

            {/* sticky URLs */}
            <StickyUrl />
          </section>

          {/* content */}
          <section className="w-full border-l px-4 lg:w-3/4">
            <div className="border-t pt-2">
              <ProjectContent content={content} />
              <Carousel data={drawingImgs} />
              <StudentProfile
                name={name}
                email={email}
                motto={motto}
                slug={slug}
              />

              <Comment slug={slug} />
              <Quote />
            </div>
          </section>
        </section>
      </article>
    </>
  );
}
