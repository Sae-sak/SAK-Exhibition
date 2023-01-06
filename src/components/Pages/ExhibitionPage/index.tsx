import Projects from "./Projects";

export default function ExhibitionPage(props) {
  const {projects} = props;
  return <Projects projects={projects} />;
}
