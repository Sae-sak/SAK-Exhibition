import Profile from "./Profile";
import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";
import { textVariant } from "@util/variants";

export default function Team() {
  return (
    <div className="container col-center py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="col-center gap-8 w-full px-5"
        viewport={{ once: true }}
      >
        <div className="w-full gap-4 mb-8 text-center col-center">
          <motion.h1
            variants={textVariant(0.5)}
            className="text-2xl font-bold font-title"
          >
            TEAM SAESAK
          </motion.h1>
          <motion.p
            variants={textVariant(0.7)}
            className="mx-auto text-base leading-relaxed  lg:w-2/3"
          >
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven`t heard of them.
          </motion.p>
        </div>
        <motion.div
          variants={textVariant(0.9)}
          className="col-center lg:flex-row"
        >
          <Profile
            name={"정채영"}
            job={"Project Manager"}
            description={"사람 재미를 아는 길잡이가 되자"}
            email={"chaezero1997@gmail.com"}
            github={"https://github.com/chae-zero"}
          />
          <Profile
            name={"김 유"}
            job={"Frontend Developer"}
            description={"굳건하게 코딩하는 개발자"}
            email={"kimyoo04eco@naver.com"}
            github={"https://github.com/kimyoo04"}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
