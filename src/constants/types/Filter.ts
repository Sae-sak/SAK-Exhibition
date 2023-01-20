import {TagType} from "./exhibition";

export interface IFilterState {
  isFilter: boolean;
  categoryName: string;
  studentFilter: string;
  studioFilter: string;
  tagFilter: TagType;
}

export const STUDENT = "Student";
export const STUDIO = "Studio";
export const TAG = "Tag";

export const CATEGORIES = [STUDENT, STUDIO, TAG];

type TStudent = "Student";
type TStudio = "Studio";
type TTag = "Tag";

export interface ICategoryName {
  categoryName: TStudent | TStudio | TTag;
}

export interface IFilterName {
  filterName: TagType;
}
