import React, { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  const displayMinutes = time.getMinutes().toString().padStart(2, "0");
  const displaySeconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className=" w-full col-start gap-4 ">
      <div className=" font-extrabold text-3xl">
        {`${ampm}  ${displayHours}:${displayMinutes}:${displaySeconds} `}
      </div>
      <span className=" font-extrabold text-3xl">(UTC+09:00)</span>
      <div className=" font-semibold">Kimyoo04eco@naver.com</div>
      <div className=" font-semibold">010-8131-5224</div>
    </div>
  );
}
