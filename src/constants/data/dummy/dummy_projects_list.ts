import {IProject} from "@constants/types/exhibition";

export const DUMMY_PROJECTS_LIST: IProject[] = [
  {
    title: "용산철도병원 리노베이션",
    year: 2022,
    semester: 1,
    studio: "park-jung-dae",
    namePath: "kim-yoo",
    studentInfo: {
      name: "유자유",
      grade: 5,
      email: "kimyoo04eco@naver.com",
      motto: "정기용 건축가 같은 건축가가 되고 싶다.",
    },
    tags: ["리노베이션"],
  },
  {
    title: "행궁동 마을재생 프로젝트",
    year: 2022,
    semester: 1,
    studio: "kim-ju-chul",
    namePath: "yoo-ja-yoo",
    studentInfo: {
      name: "김 유",
      grade: 5,
      email: "yoojacha@naver.com",
      motto: "돈 많이 벌어요~",
    },
    tags: ["마을재생"],
  },
];
