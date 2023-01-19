import ProjectHeader from "./ProjectHeader";
import ProjectContent from "./ProjectContent";
import AnchorUrl from "./AnchorUrl";

import {IProject} from "@constants/types/exhibition";
import ProgressBar from "@components/Base/ProgressBar/ProgressBar";
import ModalImage from "./ModalImage";

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

        {/* body */}
        <div className="flex pt-24 flex-nowrap">
          <div className="sticky w-1/6 h-5 top-52">
            <div className="bg-red-200 ">
              <span>다음 게시물</span>
              <div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
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
