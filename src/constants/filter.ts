import {StudioKRType, StudioType, TagType} from "./types/exhibition";

type studioNamesType = {
  name: StudioType;
  nameKR: StudioKRType;
};

export const studioNames: studioNamesType[] = [
  {name: "kim-ei-suk", nameKR: "김이석"},
  {name: "kim-ju-cheol", nameKR: "김주철"},
  {name: "park-jung-dae", nameKR: "박정대"},
  {name: "yoo-su-young", nameKR: "유수영"},
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
