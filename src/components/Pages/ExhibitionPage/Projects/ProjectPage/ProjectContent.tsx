import ReactMarkdown from "react-markdown";
import MarkdownComponents from "./Markdown";

export default function ProjectContent({content}: {content: string}) {
  return (
    <ReactMarkdown components={MarkdownComponents}>{content}</ReactMarkdown>
  );
}
