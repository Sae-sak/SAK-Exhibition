import {Dispatch, SetStateAction} from "react";

export interface IFilter {
  setIsFilter: Dispatch<SetStateAction<Number>>;
}
