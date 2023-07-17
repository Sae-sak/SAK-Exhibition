import MainLayout from "@layouts/MainLayout";
import Exhibition from "@scenes/Exhibition";
import { IProject } from "@type/exhibition";
import { getAllProjects } from "@util/project-filtering";
import Head from "next/head";

export default function ExhibitionPage({ projects }: { projects: IProject[] }) {
  return (
    <>
      <Head>
        <title>SAK-Exhibition | Exhibition</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SAK-Exhibition | Exhibition" />
        <meta
          property="og:description"
          content="2023 경기대학교 건축학과 온라인 졸업 전시 웹사이트"
        />
        <meta
          property="og:image"
          content={`https://sak-exhibition.vercel.app/images/door.png`}
        />
        <meta
          property="og:url"
          content="https://sak-exhibition.vercel.app/exhibition"
        />
      </Head>
      <MainLayout>
        <Exhibition projects={projects} />
      </MainLayout>
    </>
  );
}

export function getStaticProps() {
  const allProjects = getAllProjects();

  return {
    props: {
      projects: allProjects,
    },
  };
}
