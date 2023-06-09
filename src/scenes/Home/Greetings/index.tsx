import Image from "next/image";
import poster from "public/images/poster.webp";
import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";
import { textVariant } from "@util/variants";

export default function Greetings() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="py-8 max-h-screen border-b col-center gap-8"
    >
      <motion.h1
        variants={textVariant(0.9)}
        className="text-2xl md:text-3xl text-center"
        viewport={{ once: true }}
      >
        제56회 경기대학교 건축학과 졸업 전시회
      </motion.h1>

      <motion.div
        variants={textVariant(1.1)}
        className="w-full h-full col-center"
        viewport={{ once: true }}
      >
        <Image
          priority
          src={poster}
          width={500}
          height={500}
          alt="poster"
          quality={40}
        />
      </motion.div>
    </motion.div>
  );
}
