import Image from "next/image";
import HeaderWrapper from "./HeaderWrapper";
import ImageWrapper from "./ImageWrapper";
import ParagraphWrapper from "./ParagraphWrapper";

const MarkdownComponents = {
  p(paragraph) {
    const { node } = paragraph;

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
        <p className="">{paragraph.children}</p>
      </ParagraphWrapper>
    );
  },

  h1(header) {
    return (
      <HeaderWrapper value={header.node.children[0].value}>
        {header.node.children[0].value}
      </HeaderWrapper>
    );
  },
};

export default MarkdownComponents;
