import MainLayout from "@layouts/MainLayout";
import Exhibition from "@scenes/Exhibition";
import { IProject } from "@type/exhibition";
import { getAllProjects } from "@util/project-filtering";

export default function ExhibitionPage({ projects }: { projects: IProject[] }) {
  return (
    <MainLayout>
      <Exhibition projects={projects} />
    </MainLayout>
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
