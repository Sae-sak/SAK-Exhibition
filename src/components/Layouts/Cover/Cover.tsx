import {useState} from "react";

export default function Cover() {
  const [active, setActive] = useState(true);

  if (typeof window !== "undefined") {
    active
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "auto");
  }

  return active ? (
    <div className="absolute z-50 flex flex-col items-center justify-center w-screen h-screen gap-10 bg-blue-100">
      <div className="relative w-screen h-screen ">
        {/* 상당 우측 텍스트*/}
        <div className="absolute top-14 right-14">
          <span>SCHOOL OF ARCHITECTURE IN KYONGGI UNIV.</span>
        </div>

        {/* 이미지, 타이틀 */}
        <div className="flex flex-col items-center justify-center w-screen h-screen ">
          <div className="flex items-center justify-center w-screen h-screen gap-10 p-10">
            <div className="w-1/2 h-full">
              <div className="flex items-center justify-center w-full h-full bg-red-100">
                <div>전시 이미지 / 그래픽</div>
              </div>
            </div>
            <div className="w-1/2 h-full">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="text-3xl">전시제목</div>
                <div>exhibtion title</div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 우측 링크*/}
        <button
          onClick={(prev) => setActive(!prev)}
          className="absolute flex flex-col items-center justify-center bottom-14 right-14"
        >
          <span className="text-3xl">입장하기</span>
          <span className="text-lg ">Entrance</span>
        </button>
      </div>
    </div>
  ) : null;
}
