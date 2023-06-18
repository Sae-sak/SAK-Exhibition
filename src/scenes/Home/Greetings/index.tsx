import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer } from "@util/variants/container";
import { textVariant } from "@util/variants";
import HBorder from "@components/HBorder";

export default function Greetings() {
  return (
    <div className="container -mt-20 col-center h-screen px-5">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="relative col-center gap-8 w-full h-full"
        viewport={{ once: true }}
      >
        {/* 가운데 타이틀 영역 */}
        <div className="absolute top-24 z-10 row-center gap-4 w-full md:gap-20">
          <motion.div
            variants={textVariant(0.5)}
            className="md:text-xl font-title mb-2 flex-shrink-0"
          >
            <p>KGONGGI UNIV.</p>
            <p>Dept. of ARCHITECTURE</p>
          </motion.div>

          <motion.div
            variants={textVariant(0.5)}
            className="border-t-[1px] h-[1px] w-full"
          ></motion.div>

          <motion.div
            variants={textVariant(0.5)}
            className="flex flex-col items-end md:text-xl font-title mb-2 flex-shrink-0"
          >
            <p>56TH GRADUATION</p>
            <p>EXHIBITION</p>
          </motion.div>
        </div>

        {/* 가운데 타이틀 영역 */}
        <div className="z-10 col-center w-full">
          <motion.p
            variants={textVariant(0.7)}
            className="col-center text-xl font-arch font-bold mb-2"
          >
            See The World Through Architecture
          </motion.p>

          <motion.div className="dark:hidden" variants={textVariant(0.7)}>
            <Image
              src={"/images/psd/OVERSEER.png"}
              alt={"OVERSEER"}
              width={500}
              height={500}
              priority
            />
          </motion.div>
          <motion.div className="hidden dark:block" variants={textVariant(0.7)}>
            <Image
              src={"/images/psd/OVERSEER_dark.png"}
              alt={"OVERSEER"}
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </div>

        {/* 체스 건물 */}
        <div className="absolute bottom-0 col-center w-full">
          <motion.div variants={textVariant(0.9)}>
            <Image
              src={"/images/psd/chess_building.png"}
              alt={"chess_building"}
              width={500}
              height={500}
              priority
              className="opacity-90 dark:opacity-70"
            />
          </motion.div>
        </div>

        {/* 오른손, 왼손 */}
        <div className="absolute bottom-[440px] hidden w-full h-60 md:block">
          <div className="flex justify-between items-center w-full">
            <motion.div className="" variants={textVariant(0.9)}>
              <Image
                src={"/images/psd/left_hand.png"}
                alt={"left_hand"}
                width={240}
                height={240}
                priority
                className="opacity-90 dark:opacity-70"
              />
            </motion.div>
            <motion.div className="pb-80" variants={textVariant(0.9)}>
              <Image
                src={"/images/psd/right_hand.png"}
                alt={"right_hand"}
                width={240}
                height={240}
                priority
                className="opacity-90 dark:opacity-70"
              />
            </motion.div>
          </div>
        </div>

        {/* 관계자 로고 */}
        <div className="absolute bottom-6 grid grid-cols-3 w-96">
          <motion.div className="col-center" variants={textVariant(1.1)}>
            <Image
              src={"/images/psd/kgu_logo.png"}
              alt={"left_hand"}
              width={50}
              height={50}
              priority
              className="dark:hidden"
            />
            <Image
              src={"/images/psd/kgu_logo_dark.png"}
              alt={"left_hand"}
              width={50}
              height={50}
              priority
              className="hidden dark:block"
            />
          </motion.div>
          <motion.div className="col-center" variants={textVariant(1.1)}>
            <Image
              src={"/images/psd/sak_logo.png"}
              alt={"left_hand"}
              width={100}
              height={100}
              priority
              className="dark:hidden"
            />
            <Image
              src={"/images/psd/sak_logo_dark.png"}
              alt={"left_hand"}
              width={100}
              height={100}
              priority
              className="hidden dark:block"
            />
          </motion.div>
          <motion.div className="col-center" variants={textVariant(1.1)}>
            <Image
              src={"/images/psd/noddle_island.png"}
              alt={"left_hand"}
              width={80}
              height={80}
              priority
              className="dark:hidden"
            />
            <Image
              src={"/images/psd/noddle_island_dark.png"}
              alt={"left_hand"}
              width={80}
              height={80}
              priority
              className="hidden dark:block"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
