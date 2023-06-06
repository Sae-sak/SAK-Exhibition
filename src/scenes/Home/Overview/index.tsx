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
      <h1 className="text-5xl">Overview</h1>

      <div ref={mapElement} className="w-full h-full border"></div>
    </div>
  );
}
