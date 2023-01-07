import ReactMarkdown from "react-markdown";

export default function ProjectContent({content}: {content: string}) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
