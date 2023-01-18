import Image from "next/image";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";

const imagePath = `/images/exhibition/`;

const MarkdownComponents = {
  p(paragraph) {
    const {node} = paragraph;

    if (node.children[0].tagName === "img") {
      const image = node.children[0];
      return (
        <div className="col-center">
          <Image
            src={`${image.properties.src}`}
            alt={image.properties.src}
            width={600}
            height={300}
            priority
          />
        </div>
      );
    }
    return <p>{paragraph.children}</p>;
  },
};

export default MarkdownComponents;
