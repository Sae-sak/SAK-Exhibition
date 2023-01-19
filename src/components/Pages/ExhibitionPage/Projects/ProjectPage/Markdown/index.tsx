import Image from "next/image";
import ImageWrapper from "./ImageWrapper";
import ParagraphWrapper from "./paragraphWrapper";

const MarkdownComponents = {
  p(paragraph) {
    const {node} = paragraph;

    if (node.children[0].tagName === "img") {
      const image = node.children[0].properties;
      return (
        <ImageWrapper src={image.src}>
          <Image
            className="w-full"
            src={`${image.src}`}
            alt={image.src}
            width={600}
            height={300}
            loading="lazy"
          />
        </ImageWrapper>
      );
    }
    return (
      <ParagraphWrapper key={paragraph.choildren}>
        <p>{paragraph.children}</p>
      </ParagraphWrapper>
    );
  },
  h1(header) {
    return (
      <h1
        className="mb-2 text-2xl font-bold font-titleKR"
        id={header.node.children[0].value.replaceAll(" ", "-")}
      >
        {header.node.children[0].value}
      </h1>
    );
  },
};

export default MarkdownComponents;
