import GoToEx from "./CTA/GoToEx";

export default function About() {
  return (
    <div className="gap-6 col-center">
      <h1 className="text-5xl font-semibold">About SAK</h1>
      <div>
        <div className="bg-gray-400 col-center h-72 w-80">SAK 로고 이미지</div>
      </div>
      <div>SAK: School of Architecture in Kynonggi Univ.</div>
      <div className=" gap-4 col-center [&>p]:text-center ">
        <p>안녕하세요, 2022 경기대학교 건축학과 학생회 SAK 입니다.</p>
        <p>SAK은 School of Architecture in Kynonggi Univ.의 약자입니다.</p>
        <p>
          코로나 19 이후 졸업 전시회 공간이 오프라인에서 온라인으로
          전환되었습니다.
        </p>
        <div className="col-center [&>p]:text-center">
          <p>
            이에 기존 오프라인 전시회에서의 현장감과 몰입감을 잃지 않으면서도,
          </p>
          <p>안전하고 접근성이 좋은 온라인 전시 공간을 구축하고자</p>
          <p>SAK Exhibition 웹사이트를 제작했습니다.</p>
        </div>
        <div className="col-center [&>p]:text-center">
          <p>
            학우 여러분의 졸업 작품이 시간과 장소에 구애받지 않고 빛을 발할 수
          </p>
          <p>
            있도록, 관객 여러분이 보다 편리하고 재미있는 온라인 전시를 즐기실 수
          </p>
          <p>있도록, SAK Exhibition 사이트 운영에 부단히 힘쓰겠습니다.</p>
        </div>
        <p>여러분의 따뜻한 응원과 기대 부탁드립니다. 감사합니다.</p>
      </div>
      <GoToEx />
      <button>View more</button>
      <div className="gap-4 col-center">
        <div className="col-center [&>p]:text-center">
          <p>경기대학교 건축학과는 국제경쟁력을 갖춘 건축사 양성을 위하여</p>
          <p>2009년부터 한국 건축학교육 인증원(KAAB)의 인증실사를 통해</p>
          <p>국제적인 5년제 건축학 프로그램을 운영하고 있습니다.</p>
        </div>

        <div className="col-center [&>p]:text-center">
          <p>한국의 지역적, 문화적, 역사적 맥락에 바탕을 두고</p>
          <p>
            이를 개발하고 세계화시킬 수 있는 주체성 있는 건축교육 시행을
            지향합니다.
          </p>
        </div>

        <div className="col-center [&>p]:text-center">
          <p>
            이러한 전문적이고 충실한 교육 실시를 위하여, 건축의 실무 여러
            분야에서 활동하는 건축가와 전문가를
          </p>
          <p>
            겸임교수와 대우교수 등으로 초빙하여 현장감 넘치는 전문교육을
            실시하고 있습니다.
          </p>
        </div>

        <div className="col-center [&>p]:text-center">
          <p>
            국내 최초의 디렉터시스템 도입(1991)과 건축대학원 설립(1994) 등을
            통하여
          </p>
          <p>
            한국건축교육을 이끌어가는 선두주자로 평가받고 있는 경기대학교
            건축학과는
          </p>
          <p>
            그 역사와 전통이 깊은 자랑스러운 학과로서, 건축산업의 변화에
            대비하는 미래지향적 교육을 실시합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
