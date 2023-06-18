import ShareButton from "@components/ShareButton";
import Image from "next/image";

export default function Profile({ name, job, description, email, github }) {
  return (
    <div className="p-4 sm:w-[500px]">
      <div className="flex flex-col items-center justify-center h-full text-center sm:flex-row sm:justify-start sm:text-left">
        {/* 프로필 이미지 */}
        <Image
          alt="team"
          className="flex-shrink-0 object-cover object-center w-48 h-48 mb-4 border rounded-md sm:mb-0"
          src={`/images/contactus/team/${name}.jpg`}
          width={200}
          height={200}
        />
        <div className="flex-grow sm:pl-8 ">
          {/* 이름 */}
          <h2 className="text-lg text-gray-900 ">{name}</h2>

          {/* 직업 */}
          <h3 className="mb-3 text-gray-500 ">{job}</h3>

          {/* 설명 */}
          <p className="mb-1">{description}</p>

          {/* SNS Links */}
          <span className="flex justify-center sm:justify-start items-center gap-2">
            {/* 이메일 */}
            <ShareButton company={"CopyEmail"} emailPath={email} />

            {/* 깃허브 */}
            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="col-center"
            >
              <button>
                <Image
                  src={"/images/contactus/team/github-mark.png"}
                  alt={"github"}
                  width={24}
                  height={24}
                  quality={10}
                  className="dark:hidden"
                />
                <Image
                  src={"/images/contactus/team/github-mark-white.png"}
                  alt={"github"}
                  width={24}
                  height={24}
                  quality={10}
                  className="hidden dark:block"
                />
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
