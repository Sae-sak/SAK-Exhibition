import {useRouter} from "next/router";
import Image from "next/image";
import NotFoundPage from "@/pages/404";

export default function ProjectPage() {
  const router = useRouter();
  const {slug} = router.query;

  if (slug && typeof slug !== "string" && slug.length === 5) {
    const [year, semester, grade, studio, namepath] = slug;
    const projectPath = slug.join("/");
    const thumbnail = `/images/exhibition/projects/${projectPath}/thumbnail.jpg`;
    const projectContent = ``;

    return (
      <>
        <div>
          <Image src={thumbnail} alt={slug[-1]} width={300} height={200} />
        </div>
      </>
    );
  } else {
    return <NotFoundPage />;
  }
}
