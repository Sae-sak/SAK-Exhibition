import Image from "next/image";
import {useState} from "react";
import shape from "public/images/cover/shape.jpg";

export default function Cover() {
  const [active, setActive] = useState(true);

  if (typeof window !== "undefined") {
    active
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "auto");
  }

  return active ? (
    <div className="absolute z-50 w-screen h-screen gap-10 bg-blue-100 col-center">
      <div className="relative w-screen h-screen ">
        {/* 상당 우측 텍스트*/}
        <div className="absolute top-14 right-14">
          <span className="font-bold">
            SCHOOL OF ARCHITECTURE IN KYONGGI UNIV.
          </span>
        </div>

        {/* 이미지 & 타이틀 */}
        <div className="w-screen h-screen col-center ">
          <div className="flex items-center justify-center w-screen h-screen gap-10 p-10">
            <div className="w-1/2 h-full">
              <div className="flex items-center justify-center w-full h-full overflow-hidden">
                <Image src={shape} alt={"shape"} />
              </div>
            </div>
            <div className="w-1/2 h-full">
              <div className="w-full h-full gap-4 col-center">
                <div className="text-4xl font-bold">NEW NORMAL VILLAGE</div>
                <div className="text-2xl">&apos;뉴 노멀&apos; 시대의 건축</div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 우측 링크*/}
        <button
          onClick={(prev) => setActive(!prev)}
          className="absolute col-center bottom-14 right-14"
        >
          <span className="text-3xl">입장하기</span>
          <span className="text-lg ">Entrance</span>
        </button>
      </div>
    </div>
  ) : null;
}
