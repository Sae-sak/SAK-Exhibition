import { getAllProjects } from "@components/Base/Util/project-filtering";
import MainLayout from "@components/Layouts/MainLayout";
import { IProject } from "@constants/types/exhibition";

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
