import { StudioKRType, StudioType, TagType } from "./exhibition";

export interface IFilterState {
  isFilter: boolean;
  categoryName: string;
  studentFilter: string;
  studioFilter: StudioType;
  studioFilterKR: StudioKRType;
  tagFilter: TagType;
}

export interface IFilter {
  // 필터 미구현
  title?: string;
  year?: string;
  semester?: string;
  grade?: string;

  // 필터 구현
  studio: StudioType;
  name: string;
  tag: TagType;
}

export type TStudent = "Student";
export type TStudio = "Studio";
export type TTag = "Tag";

// 3 categories -> filter names -> student, studio, tag
export interface ICategoryName {
  categoryName: TStudent | TStudio | TTag;
}
export interface IFilterName {
  filterName: string | StudioType | TagType;
}
export interface IStudentFilterName {
  studentName: string;
}
export interface IStudioFilterName {
  studioName: StudioType;
  studioNameKR: StudioKRType;
}
export interface ITagFilterName {
  tagName: TagType;
}
