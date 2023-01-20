import ProjectHeader from "./ProjectHeader";
import ProjectContent from "./ProjectContent";
import AnchorUrl from "./AnchorUrl";

import {IProject} from "@constants/types/exhibition";
import ProgressBar from "@components/Base/ProgressBar/ProgressBar";
import ModalImage from "./ModalImage";
import StickyUrl from "./StickyUrl";

export default function ProjectPage({projectData}: {projectData: IProject}) {
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
  } = projectData;

  const thumbnailImg = `/posts-images/${slug.replaceAll(
    "/",
    "_"
  )}/thumbnail.jpg`;

  return (
    <>
      <ProgressBar />
      <article className="container p-5 ">
        <ProjectHeader title={title} thumbnailImg={thumbnailImg} />

        {/* body 세등분 */}
        <div className="flex pt-24 flex-nowrap">
          {/* sticky URLs */}
          <div className="sticky w-1/6 h-5 top-52">
            <StickyUrl />
          </div>

          {/* content */}
          <div className="w-2/3">
            <ProjectContent content={content} />
          </div>

          {/* anchor URLs */}
          <div className="sticky w-1/6 h-5 top-52">
            <AnchorUrl content={content} />
          </div>
        </div>
      </article>

      <ModalImage />
    </>
  );
}
