export type TagType =
  | "문화" // programTags
  | "복합"
  | "주거"
  | "숙박"
  | "상업"
  | "노유자"
  | "오피스"
  | "교육"
  | "의료"
  | "공원"
  | "추모"
  | "교통"
  | "공모전"
  | "기타"
  | "신축" // typeTags
  | "증축"
  | "리모델링"
  | "마스터플랜"
  | "파빌리온"
  | "";

export type StudioType =
  | "kim-ei-suk"
  | "kim-ju-cheol"
  | "park-jung-dae"
  | "yoo-su-young"
  | "";

export type StudioKRType = "김이석" | "김주철" | "박정대" | "유수영" | "";

export interface IProject {
  slug: string;
  title: string;
  date: string;
  year: number;
  semester: number;
  grade: number;
  studio: string;
  namepath: string;
  excerpt: string;
  name: string;
  email: string;
  motto: string;
  tags: TagType[];
  content: string;
}
