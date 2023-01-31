import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Cover() {
  const [active, setActive] = useState(true);
  const router = useRouter();

  if (typeof window !== "undefined") {
    active
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "auto");
  }

  return active ? (
    <div className="absolute z-50 w-screen h-screen gap-10 text-white bg-black col-center">
      <div className="relative w-screen h-screen ">
        {/* 상당 우측 텍스트*/}
        <div className="absolute text-left top-14 left-14 text-night_gray_3">
          <span className="font-bold">
            <span className="text-2xl text-kgu_main_orange">S</span>CHOOL OF{" "}
            <span className="text-2xl text-kgu_main_yellow">A</span>RCHITECTURE{" "}
            <div>
              IN <span className="text-2xl text-kgu_main_blue">K</span>
              YONGGI UNIVERSITY{" "}
            </div>
            <div>
              <span className="text-2xl text-kgu_main_green">E</span>
              <span>XHIBITION</span>
            </div>
          </span>
        </div>

        {/* 이미지 & 타이틀 */}
        <div className="w-screen h-screen col-center ">
          <div className="flex items-center justify-center w-screen h-screen gap-10 p-10">
            <div className="w-1/2 h-full">
              <div className="w-full h-full gap-4 col-center">
                <div className="text-4xl font-bold">NEW NORMAL VILLAGE</div>
                <div className="text-2xl">&apos;뉴 노멀&apos; 시대의 건축</div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 우측 링크*/}
        <Link
          href={"/home"}
          className="absolute text-white row-center bottom-14 right-14 group"
        >
          <div className="z-10 gap-4 group-hover:-mr-4 row-center font-header">
            <span className="text-2xl leading-4 bg-black border-gray-500 border-y">
              Exhibition Enter
            </span>
          </div>
          <div className="group-hover:rotate-12 transform-gpu w-20 h-24 border-[12px] border-t-kgu_main_yellow border-l-kgu_main_orange border-r-kgu_main_green border-b-kgu_main_blue"></div>
        </Link>
      </div>
    </div>
  ) : null;
}
