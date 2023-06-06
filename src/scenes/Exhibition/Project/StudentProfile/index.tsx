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
    <div className="w-full my-8 col-center gap-8 p-8 bg-accent_green/20 dark:bg-accent_green/50 rounded-md border">
      {/* 학생 프로필 헤더 */}
      <div>
        <div className="relative z-10 row-center">
          <span className="px-1 text-2xl leading-4 transition-all font-accent border-y">
            Student Profile
          </span>
        </div>
      </div>

      <div className="col-center md:w-full gap-8 md:flex-row">
        <div className="col-center w-full">
          {/* 임시 이미지 영역 */}
          <div
            style={{
              backgroundImage: `url(${profileImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            className="w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-md bg-white"
          ></div>
        </div>

        {/* 학생 정보 영역*/}
        <div className="col-center w-full">
          <div className="col-center gap-2 md:items-start">
            {/* 이름 */}
            <div className="col-center md:items-start mb-2">
              <span className="border-b font-accent text-sm lg:text-md xl:text-lg ">
                Name
              </span>
              <span className="lg:text-lg xl:text-xl">{name}</span>
            </div>

            {/* 이메일 */}
            <div className="col-center md:items-start mb-2">
              <span className="border-b font-accent text-sm lg:text-md xl:text-lg">
                Email
              </span>
              <span className="lg:text-lg xl:text-xl">{email}</span>
            </div>

            {/* 좌우명 */}
            <div className="col-center md:items-start mb-2">
              <span className="border-b font-accent text-sm lg:text-md xl:text-lg">
                Motto
              </span>
              <p className="lg:text-lg xl:text-xl">{motto}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
