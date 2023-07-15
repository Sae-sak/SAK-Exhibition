import { textVariant } from "@util/variants";
import { staggerContainer } from "@util/variants/container";
import { motion } from "framer-motion";

export default function StudentProfile({
  name,
  email,
  motto,
  slug,
}: {
  name: string;
  email: string;
  motto: string;
  slug: string;
}) {
  const imagePath = `/posts-images/${slug.replaceAll("/", "_")}`;
  const profileImg = [`${imagePath}/profile.jpg`];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="col-center my-8 w-full gap-8 rounded-md border px-6 py-6"
    >
      {/* 학생 프로필 헤더 */}
      <motion.div variants={textVariant(0.5)}>
        <div className="row-center relative z-10">
          <span className="border-y px-1 font-accent text-2xl leading-4 transition-all lg:mt-8 lg:text-3xl lg:leading-5">
            Student Profile
          </span>
        </div>
      </motion.div>

      <div className="col-center gap-8 md:w-full md:flex-row">
        <motion.div variants={textVariant(0.6)} className="col-center w-full">
          {/* 이미지 영역 */}
          <div
            style={{
              backgroundImage: `url(${profileImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            className="h-40 w-40 rounded-md bg-white md:h-48 md:w-48 lg:h-60 lg:w-60"
          ></div>
        </motion.div>

        {/* 학생 정보 영역*/}
        <div className="col-center w-full md:my-4 lg:my-8">
          <div className="col-center gap-2 md:h-48 md:items-start md:justify-between lg:h-60">
            {/* 이름 */}
            <motion.div
              variants={textVariant(0.7)}
              className="col-center mb-2 md:items-start"
            >
              <span className="lg:text-md border-b font-accent text-sm xl:text-lg ">
                Name
              </span>
              <span className="lg:text-lg xl:text-xl">{name}</span>
            </motion.div>

            {/* 이메일 */}
            <motion.div
              variants={textVariant(0.8)}
              className="col-center mb-2 md:items-start"
            >
              <span className="lg:text-md border-b font-accent text-sm xl:text-lg">
                Email
              </span>
              <span className="lg:text-lg xl:text-xl">{email}</span>
            </motion.div>

            {/* 좌우명 */}
            <motion.div
              variants={textVariant(0.9)}
              className="col-center mb-2 md:items-start"
            >
              <span className="lg:text-md border-b font-accent text-sm xl:text-lg">
                Motto
              </span>
              <p className="lg:text-lg xl:text-xl">{motto}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
