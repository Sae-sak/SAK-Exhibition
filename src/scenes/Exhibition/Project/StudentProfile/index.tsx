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
    <div className="col-center my-8 w-full gap-8 rounded-md border p-8">
      {/* 학생 프로필 헤더 */}
      <div>
        <div className="row-center relative z-10">
          <span className="border-y px-1 font-accent text-2xl leading-4 transition-all lg:mt-8 lg:text-3xl lg:leading-5">
            Student Profile
          </span>
        </div>
      </div>

      <div className="col-center gap-8 md:w-full md:flex-row">
        <div className="col-center w-full">
          {/* 임시 이미지 영역 */}
          <div
            style={{
              backgroundImage: `url(${profileImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            className="h-40 w-40 rounded-md bg-white md:h-48 md:w-48 lg:h-60 lg:w-60"
          ></div>
        </div>

        {/* 학생 정보 영역*/}
        <div className="col-center w-full md:my-4 lg:my-8">
          <div className="col-center gap-2 md:h-48 md:items-start md:justify-between lg:h-60">
            {/* 이름 */}
            <div className="col-center mb-2 md:items-start">
              <span className="lg:text-md border-b font-accent text-sm xl:text-lg ">
                Name
              </span>
              <span className="lg:text-lg xl:text-xl">{name}</span>
            </div>

            {/* 이메일 */}
            <div className="col-center mb-2 md:items-start">
              <span className="lg:text-md border-b font-accent text-sm xl:text-lg">
                Email
              </span>
              <span className="lg:text-lg xl:text-xl">{email}</span>
            </div>

            {/* 좌우명 */}
            <div className="col-center mb-2 md:items-start">
              <span className="lg:text-md border-b font-accent text-sm xl:text-lg">
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
