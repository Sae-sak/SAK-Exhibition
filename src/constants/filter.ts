import { StudioKRType, StudioType, TagType } from "@type/exhibition";
import { TStudent, TStudio, TTag } from "@type/Filter";

type studioNamesType = {
  name: StudioType;
  nameKR: StudioKRType;
};

export const studioNames: studioNamesType[] = [
  { name: "kim-hyun-whee", nameKR: "김현휘" },
  { name: "ryu-jeon-hee", nameKR: "류전희" },
  { name: "ahn-chang-mo", nameKR: "안창모" },
  { name: "yun-hee-jin", nameKR: "윤희진" },
  { name: "lee-seung-hoon", nameKR: "이승훈" },
];

export const tagNames: TagType[] = [
  "문화", // programTags
  "복합",
  "주거",
  "숙박",
  "상업",
  "노유자",
  "오피스",
  "교육",
  "의료",
  "공원",
  "추모",
  "교통",
  "공모전",
  "기타",
  "신축", // typeTags
  "증축",
  "리모델링",
  "마스터플랜",
  "파빌리온",
];

export const STUDENT = "Student";
export const STUDIO = "Studio";
export const TAG = "Tag";

export const CATEGORIES: [TStudent, TStudio, TTag] = [STUDENT, STUDIO, TAG];
