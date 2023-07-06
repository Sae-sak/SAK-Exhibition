import { staggerContainer } from "@util/variants/container";
import GoToAb from "./GoToAb";
import GoToEx from "./GoToEx";
import { motion } from "framer-motion";
import Image from "next/image";
import { textVariant } from "@util/variants";
import Hall from "@components/Hall";

export default function CTA() {
  return (
    <div className="col-center py-40">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="col-center gap-8 w-full px-5"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={textVariant(0.5)}
          className="text-2xl sm:text-3xl md:text-4xl font-accent"
        >
          Exhibition Layout
        </motion.h1>

        <div className="w-full col-center gap-4 lg:flex-row lg:justify-between">
          {/* 전시 배치도
          <motion.div className="dark:hidden" variants={textVariant(0.7)}>
            <Image
              src={"/images/psd/plan.png"}
              alt={"OVERSEER"}
              width={700}
              height={700}
              priority
            />
          </motion.div>
          <motion.div className="hidden dark:block" variants={textVariant(0.7)}>
            <Image
              src={"/images/psd/plan_dark.png"}
              alt={"OVERSEER"}
              width={700}
              height={700}
              priority
            />
          </motion.div> */}
          <motion.div className="flex flex-col justify-end items-center gap-3 flex-shrink-0">
            {/* 전시장 3D 모델 */}
            <motion.div
              className="pb-8 w-[800px] h-[600px]"
              variants={textVariant(0.9)}
            >
              <Hall />
            </motion.div>
            {/* 페이지 이동 버튼 */}
            <div className="col-center gap-3">
              <motion.div variants={textVariant(0.9)}>
                <GoToAb />
              </motion.div>
              <motion.div variants={textVariant(0.9)}>
                <GoToEx />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
