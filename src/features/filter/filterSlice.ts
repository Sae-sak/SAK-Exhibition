import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  IFilterState,
  ICategoryName,
  IStudentFilterName,
  IStudioFilterName,
  ITagFilterName,
} from "@constants/types/filter";

const initialState: IFilterState = {
  isFilter: false,
  categoryName: "",
  studentFilter: "",
  studioFilter: "",
  studioFilterKR: "",
  tagFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    openFilter(state) {
      state.isFilter = true;
      state.categoryName = "";
      state.studentFilter = "";
      state.studioFilter = "";
      state.tagFilter = "";
    },
    closeFilter(state) {
      state.isFilter = false;
      state.categoryName = "";
      state.studentFilter = "";
      state.studioFilter = "";
      state.tagFilter = "";
    },
    selectCategory(state, action: PayloadAction<ICategoryName>) {
      state.categoryName = action.payload.categoryName;
    },

    enableStudentFilter(state, action: PayloadAction<IStudentFilterName>) {
      state.isFilter = false;
      state.categoryName = "";
      state.studentFilter = action.payload.studentName;
    },
    enableStudioFilter(state, action: PayloadAction<IStudioFilterName>) {
      state.isFilter = false;
      state.categoryName = "";
      state.studioFilter = action.payload.studioName;
      state.studioFilterKR = action.payload.studioNameKR;
    },
    enableTagFilter(state, action: PayloadAction<ITagFilterName>) {
      state.isFilter = false;
      state.categoryName = "";
      state.tagFilter = action.payload.tagName;
    },

    disableFilter(state) {
      state.isFilter = false;
      state.studentFilter = "";
      state.studioFilter = "";
      state.tagFilter = "";
      state.categoryName = "";
    },
  },
});

export const {
  openFilter,
  closeFilter,
  selectCategory,
  enableStudentFilter,
  enableStudioFilter,
  enableTagFilter,
  disableFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
