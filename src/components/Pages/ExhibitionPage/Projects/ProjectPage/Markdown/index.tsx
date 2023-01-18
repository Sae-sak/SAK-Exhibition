import {motion} from "framer-motion";
import Image from "next/image";

const MarkdownComponents = {
  p(paragraph) {
    const {node} = paragraph;

    if (node.children[0].tagName === "img") {
      const image = node.children[0];
      return (
        <motion.div
          className="col-center"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
        >
          <Image
            className="w-full"
            src={`${image.properties.src}`}
            alt={image.properties.src}
            width={600}
            height={300}
            priority
          />
        </motion.div>
      );
    }
    return (
      <motion.div
        className="w-full"
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
      >
        <p>{paragraph.children}</p>
      </motion.div>
    );
  },
  h1(header) {
    return (
      <h1 id={header.node.children[0].value.replaceAll(" ", "-")}>
        {header.node.children[0].value}
      </h1>
    );
  },
};

export default MarkdownComponents;
