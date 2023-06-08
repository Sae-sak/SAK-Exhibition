import { useEffect, useRef } from "react";

export default function Overview() {
  const mapElement = useRef(null);

  // useEffect(() => {
  //   const { naver } = window;
  //   if (!mapElement.current || !naver) return;

  //   // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
  //   const location = new naver.maps.LatLng(37.5176, 126.9577);
  //   const mapOptions: naver.maps.MapOptions = {
  //     center: location,
  //     zoom: 17,
  //     zoomControl: true,
  //     zoomControlOptions: {
  //       position: naver.maps.Position.TOP_RIGHT,
  //     },
  //   };
  //   const map = new naver.maps.Map(mapElement.current, mapOptions);
  //   new naver.maps.Marker({
  //     position: location,
  //     map,
  //   });
  // }, []);

  return (
    <div className="py-8 flex flex-col items-start justify-start md:items-start md:flex-row md:justify-between gap-8">
      <div className="flex flex-col items-start md:h-80 justify-between gap-4">
        <h1 className="text-2xl md:text-3xl">오프라인 전시장 안내</h1>

        <div className="col-start gap-1">
          <span className="text-sm md:text-md">
            전시 기간: 7월 7일 - 7월 9일
          </span>

          <div className="flex items-start justify-start flex-wrap sm:gap-4 md:gap-1">
            <span className="text-sm md:text-md">
              개막식: 23.07.07 금요일 11 AM
            </span>
            <span className="text-sm md:text-md">
              시상식: 23.07.07 금요일 12 PM
            </span>
          </div>

          <span className="text-sm md:text-md">
            전시 장소: 서울 용산구 양녕로 445 노들갤러리 1관
          </span>
        </div>
      </div>

      <div ref={mapElement} className="w-full md:w-2/3 h-80 border"></div>
    </div>
  );
}
