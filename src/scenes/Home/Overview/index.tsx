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
    <div className="h-screen p-8 border col-center">
      <h1 className="text-3xl">오프라인 전시장 안내</h1>

      <div>
        <div>
          <span>전시 기간:</span>
          <p> 07.07 - 07.09</p>
        </div>

        <div>
          <p>개막식: 23.07.07 Fri. 11am</p>
          <p>시상식: 23.07.07 Fri. 12pm</p>
        </div>

        <div>
          <span>전시 장소:</span>
          <p>서울 용산구 양녕로 445 노들갤러리 1관</p>
        </div>
      </div>

      <div ref={mapElement} className="w-full h-full border"></div>
    </div>
  );
}
