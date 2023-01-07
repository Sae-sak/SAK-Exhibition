export type ITag =
  | "리노베이션"
  | "공모전"
  | "공공공간"
  | "공연장"
  | "도시재생"
  | "마을재생"
  | "";

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
  tags: ITag[];
  content: string;
}
