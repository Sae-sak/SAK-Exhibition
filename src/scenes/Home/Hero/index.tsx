import Image from "next/image";
import exhibition_poster from "public/images/home/exhibition_poster.jpg";

export default function Hero() {
  return (
    <div className="py-4 border col-center">
      <div className="gap-6 col-center">
        <div className="gap-2 text-center col-center">
          <h1 className="text-5xl">NEW NORMAL VILLAGE</h1>
          <time className="text-3xl text-gray-700 font-header">
            2023.07.21 - 2023. 09.05
          </time>
          <p className="text-gray-700 font-title">
            Kyonggi School of Architecture 23th Graduation Exhibition
          </p>
        </div>

        <Image src={exhibition_poster} alt={"exhibition_poster"} />

        <div className="text-center gap-7 col-center">
          <div>
            <p>
              COVID-19 바이러스는 전 세계로 빠르게 퍼져나가 2020년 3월
              세계보건기구 WHO는 팬데믹을 선언하게 되었다.
            </p>
            <p>
              이는 세계 곳곳의 문화, 경제, 정치, 사회 모든 분야에 상상할 수
              없었던 영향을 미쳤고, 우리의 일상생활까지 변화시키기에 이르렀다.
            </p>
          </div>

          <div>
            <p>
              사회적 거리두기가 엄격히 시행되고 국경의 문들이 닫히면서 세계는
              우리에게
            </p>
            <p>
              개인의 사적인 영역, 서로가 공유하는 공간, 거시적으로는 도시를
              바라보는 시각의 변화를 요구하고 있다.
            </p>
          </div>

          <div>
            <p>
              급변하는 사회의 모습은 물리적인 공간의 가치 또는 장소성에 질문을
              던지기 시작했으며,
            </p>
            <p>
              구체적으로는 사회적 거리두기로 인한 언택트 사회의 급성장과
              가상공간의 활용을 기반한
            </p>
            <p>
              메타버스 개념의 등장 등이 건축분야에 새로운 차원의 문제로
              등장했다.
            </p>
          </div>

          <div>
            <p>
              지금이 건축에서의 ‘뉴 노멀 (New Normal)’의 시작을 알리는
              시점이라고 해석할 수 있을 것이다.
            </p>
            <p>
              하지만, 건축에서의 뉴 노멀을 COVID-19과 연관성을 짓는 것만으로
              생각할 수 있는 것은 아니다.
            </p>
          </div>

          <div>
            <p>
              4차산업의 빠른 성장, 가상공간의 등장으로 질문을 받는 장소성의
              의미, 온라인 클라우드 커뮤니티의 활성화로 인한 교육 또는
              근무환경의 변화,
            </p>
            <p>
              새로운 직업군의 등장이 요구하는 새로운 형태의 공간, 거리두기로
              인한 물리적 경계가 갖는 의미 등
            </p>
            <p>
              수없는 변화가 동시다발적으로 일어나고 있는 시대를 우리는 살고
              있다.
            </p>
          </div>

          <div>
            <p>
              2021년 경희대학교 제 48회 미석전은 ‘뉴 노멀’ 시대의 건축이라는
              포괄적인 공통주제로 공간의 새로운 기준,
            </p>
            <p>
              그리고 다양한 사회적 문화적 정치적 문제를 대하는 창의적이고 다양한
              건축적 해법을 제시한다.
            </p>
          </div>

          <div className="mt-6">
            <p>졸업설계 주임교수 이 석</p>
          </div>
        </div>
      </div>
    </div>
  );
}
