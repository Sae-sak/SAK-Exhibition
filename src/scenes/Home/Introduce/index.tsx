import { textVariant, textVariant2 } from "@util/variants";
import { staggerContainer, textContainer } from "@util/variants/container";
import { motion } from "framer-motion";

export default function Introduce() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      className="-mt-20 py-8 w-full border-b col-center gap-4 h-screen"
    >
      <motion.p
        variants={textContainer}
        className={`font-normal text-2xl md:text-3xl text-secondary-white font-accent`}
      >
        {Array.from("About Overseer").map((letter, index) => (
          <motion.span
            key={index}
            variants={textVariant2}
            viewport={{ once: true }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.p>

      <motion.p
        variants={textVariant(1.8)}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        <span className="font-medium">‘Overseer’</span>는 단어가 담은 뜻 그대로
        감독이자 관찰자라는 뜻을 지니고 있다. 도면을 그릴 때 가장 먼저 기준이
        되는 ‘축’을 정하게 되면, 바탕에 그려지는 축과 기준선은 첫 레이어인
        ‘그리드’를 형성한다. 우리는 그리드를 체스판으로 빗대어 지역과 도시를, 한
        명 한 명의 생각과 가치관이 담긴 건축물들을 체스 말로 표현하였다. 체스의
        한 수를 두는 자들이 Overseer인 우리들이다. 도시, 동네, 공간의 강점과
        특이점, 문제점 등을 하나하나 세세하게 관찰, 감독한다. 그리고, 마침내.
        본인이 들어선 그 게임을 이기는 ‘한 수’를 배워나간다.
      </motion.p>
    </motion.div>
  );
}
