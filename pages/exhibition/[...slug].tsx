import MainLayout from "@layouts/MainLayout";
import Project from "@scenes/Exhibition/Project";
import { IProject } from "@type/exhibition";
import { getProjectData, getProjectFiles } from "@util/project-filtering";
import Head from "next/head";

export default function ProjectPage({
  projectData,
}: {
  projectData: IProject;
}) {
  return (
    <>
      <Head>
        <title>SAK-Exhibition | {projectData.name}</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`SAK-Exhibition | ${projectData.name}`}
        />
        <meta property="og:description" content={projectData.excerpt} />
        <meta
          property="og:image"
          content={`https://sak-exhibition.vercel.app/posts-images/${projectData.slug.replaceAll(
            "/",
            "_"
          )}/thumbnail.jpg`}
        />
        <meta
          property="og:url"
          content={`https://sak-exhibition.vercel.app/exhibition/${projectData.slug}`}
        />
      </Head>

      <MainLayout>
        <Project projectData={projectData} />
      </MainLayout>
    </>
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
