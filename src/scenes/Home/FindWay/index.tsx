import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";
import { textVariant } from "@util/variants";

export default function FindWay() {
  return (
    <div className="container col-center py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="col-center gap-8 w-full px-5"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textVariant(0.5)}
          className="w-full text-2xl md:text-3xl"
        >
          찾아오시는 길
        </motion.h1>
        <div className="w-full col-start gap-10">
          <motion.div variants={textVariant(0.7)}>
            <h3 className="font-title text-xl mb-2 font-medium">
              {"[지하철]"}
            </h3>

            <ul className="list-disc list-inside col-start gap-3">
              <div>
                <li>1호선</li>
                <p>
                  1호선 용산역 1번 출구로 나와 도보로 약 300m 위치에 있는
                  신용산역 정류장(03-004)으로 이동 후 노들섬 방면 버스 탑승 ▶
                  노들섬 정류장(03-340)에서 하차
                </p>
              </div>
              <div>
                <li>4호선</li>
                <p>
                  4호선 신용산역 3번출구로 나와 도보로 약 100m 위치에 있는
                  신용산역 정류장(03-004)으로 이동 후 용산역 노들섬 방면 버스
                  탑승 ▶ 노들섬 정류장(03-340)에서 하차
                </p>
              </div>
              <div>
                <li>9호선</li>
                <p>9호선 노들역 2번출구로 나와 한강대교 방면으로 600m 이동</p>
              </div>
            </ul>
          </motion.div>

          <motion.div variants={textVariant(0.9)}>
            <h3 className="font-title text-xl mb-2 font-medium">{"[버스]"}</h3>

            <ul className="list-disc list-inside col-start gap-3">
              <li>노들섬 정류장(03-340)에서 하차</li>

              <li>
                간선버스 : 150, 151, 152, 500, 501, 504, 506, 507, 605, 750A,
                750B, 751, 752
              </li>

              <li>지선버스 : 6211</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
