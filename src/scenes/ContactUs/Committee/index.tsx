import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";
import { textVariant } from "@util/variants";

export default function Committee() {
  return (
    <div className="container col-center py-20 px-5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="relative col-center gap-8 w-full h-full"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textVariant(0.5)}
          className="text-2xl md:text-3xl font-bold"
        >
          졸업전시 준비 위원회
        </motion.h1>

        <div className="col-start gap-4 max-w-2xl">
          <motion.p variants={textVariant(0.7)}>
            안녕하세요. 경기대학교 제56회 건축학과 졸업 전시의 총괄을 맡은
            전성주 학생입니다.
          </motion.p>
          <motion.p variants={textVariant(0.9)}>
            Overseer라는 타이틀로 올해 전시를 준비하게 되었습니다. 사회적 이슈,
            건축적 트렌드, 본인이 5년 혹은 그 이상 건축이라는 학문을 성취하면서
            느낀 건축의 새로운 패러다임과 가치관을 담았습니다.
          </motion.p>
          <motion.p variants={textVariant(1.1)}>
            배움의 끝은 없고 저희는 이제 시작입니다. 앞으로도 즐거운 게임처럼,
            한 수 한 수를 두며 게임 같은 건축을 인생을 즐겨가겠습니다. 이 온라인
            전시가 누군가에게 한 수가 되길, 누군가의 첫 수가 될 수 있길
            기원합니다. 즐겁게 봐주세요. 감사합니다.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
