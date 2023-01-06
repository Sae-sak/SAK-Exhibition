export type ITag =
  | "리노베이션"
  | "공모전"
  | "공공공간"
  | "공연장"
  | "도시재생"
  | "마을재생"
  | "";

export interface IStudentInfo {
  name: string;
  grade: number;
  email: string;
  motto: string;
}

export interface IProject {
  title: string;
  year: number;
  semester: number;
  studio: string;
  namePath: string;
  studentInfo: IStudentInfo;
  tags: ITag[];
}
