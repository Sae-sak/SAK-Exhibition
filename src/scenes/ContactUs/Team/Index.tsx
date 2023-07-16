import Profile from "./Profile";
import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";
import { textVariant } from "@util/variants";

export default function Team() {
  return (
    <div className="col-center container px-5 py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="col-center relative h-full w-full gap-8"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textVariant(0.5)}
          className="font-title text-2xl font-bold"
        >
          TEAM SAESAK
        </motion.h1>

        <div className="col-start max-w-2xl gap-4">
          <motion.p variants={textVariant(0.7)}>
            안녕하세요. 경기대학교 건축학과 온라인 졸업 전시회 웹사이트 제작을
            맡은 TEAM SAESAK 입니다.
          </motion.p>
          <motion.p variants={textVariant(0.9)}>
            물리적, 시간적 제약 없이 학생들의 작품을 전시하고, 관람할 수 있도록
            함으로써 더 많은 사람들이 함께 즐길 수 있는 전시 환경을 구축하고자
            합니다.
          </motion.p>
        </div>

        <motion.div
          variants={textVariant(0.9)}
          className="col-center py-4 lg:flex-row"
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
