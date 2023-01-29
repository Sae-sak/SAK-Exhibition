import {
  getProjectData,
  getProjectFiles,
} from "@components/Base/Util/project-filtering";
import MainLayout from "@components/Layouts/MainLayout";
import { IProject } from "@constants/types/exhibition";

export default function ProjectPage({
  projectData,
}: {
  projectData: IProject;
}) {
  return (
    <MainLayout>
      <Project projectData={projectData} />
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const filename = slug.join("_") + ".md";
  const projectData = getProjectData(filename);

  return {
    props: {
      projectData: projectData,
    },
  };
}

export async function getStaticPaths() {
  const filenames = getProjectFiles();
  const slugs = filenames.map((filename) =>
    filename.replace(/\.md$/, "").split("_")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
