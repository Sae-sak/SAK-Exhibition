import MainLayout from "@components/Layouts/MainLayout";
import ExhibitionPage from "@components/Pages/ExhibitionPage";
import {DUMMY_PROJECTS_LIST} from "@constants/pages/dummy_projects_list";

export default function Page() {
  return (
    <MainLayout>
      <div>
        <ExhibitionPage projects={DUMMY_PROJECTS_LIST} />
      </div>
    </MainLayout>
  );
}
