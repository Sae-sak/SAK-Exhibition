export default function Clock() {
  // const clock = document.querySelector("#clock");

  // const date = new Date();
  // const hours = String(date.getHours()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  // const minutes = String(date.getMinutes()).padStart(2, "0");
  // clock.innerText = `${hours}:${minutes}:${seconds}`; // 반드시 백틱 사용

  return (
    <div className=" w-full col-start gap-4 ">
      <span className=" font-extrabold text-3xl">00:03:16 (UTC+09:00)</span>
      <div className=" font-semibold">Kimyoo04eco@naver.com</div>
      <div className=" font-semibold">010-8131-5224</div>
    </div>
  );
}
