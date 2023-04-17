// useState, useEffect 가져오기
import React, { useEffect, useState } from "react";

// time 변수 선언 : useState 사용, 초기값 new Date()
export default function Clock() {
  const [time, setTime] = useState("00:00:00 AM");

  // 타이머 설정: useEffect 사용, 1초마다 time 변수를 현재 시간으로 업데이트
  useEffect(() => {
    const intervalID = setInterval(() => {
      // 시, 분, 초 추출, AM/PM 설정(12시간제)
      const fixTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setTime(fixTime);
    }, 1000);

    // setInterval에 의해 실행된 반복 작업 종료, 컴포넌트가 처음 나타났을 때 한 번만 실행되도록
    return () => clearInterval(intervalID);
  }, []);

  // 시, 분, 초와 AM/PM을 포함하는 시계 반환
  return (
    <div className="w-full gap-4 col-center">
      <div className="text-4xl font-extrabold ">{`${time}`}</div>
      <div className="font-semibold ">Kimyoo04eco@naver.com</div>
      <div className="font-semibold ">010-8131-5224</div>
    </div>
  );
}