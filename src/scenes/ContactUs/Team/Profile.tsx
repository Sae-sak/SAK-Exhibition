import ShareButton from "@components/ShareButton";
import Image from "next/image";

export default function Profile({ name, job, description, email, kakao }) {
  return (
    <div className="p-4">
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
          <span className="row-center sm:justify-start">
            {/* 이메일 */}
            <ShareButton company={"CopyEmail"} emailPath={email} />

            {/* 카카오톡 */}
            <a href={`${kakao}`} className="ml-2 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
