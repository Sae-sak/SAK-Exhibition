import { motion } from "framer-motion";
import { textVariant } from "@util/variants";
import { staggerContainer } from "@util/variants/container";
import { playerData } from "public/data/playerData";

export default function Points() {
  return (
    <div className="container col-center py-8 h-screen">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="w-full col-center gap-8"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textVariant(0.5)}
          className="text-2xl md:text-4xl font-accent"
        >
          Player List
        </motion.h1>

        <div className="flex items-start justify-between w-full max-w-2xl">
          {playerData.map((data) => (
            <div key={data.studio}>
              {/* 스튜디오 이름 */}
              <motion.h3
                className="col-center font-title text-lg font-bold"
                variants={textVariant(0.7)}
              >
                {data.studio}
              </motion.h3>

              {/* 학생 목록 */}
              <motion.ul variants={textVariant(0.9)} className="col-center">
                {data.players.map((player, indx) => (
                  <li key={player + indx}>{player}</li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
