import {getAllProjects} from "@components/Base/Util/project-util";
import MainLayout from "@components/Layouts/MainLayout";
import ExhibitionPage from "@components/Pages/ExhibitionPage";
import {IProject} from "@constants/types/exhibition";

export default function Exhibition({projects}: {projects: IProject[]}) {
  return (
    <MainLayout>
      <div>
        <ExhibitionPage projects={projects} />
      </div>
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
