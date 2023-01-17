import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  IFilterState,
  ICategoryName,
  IFilterName,
} from "@constants/types/Filter";

const initialState: IFilterState = {
  isFilter: false,
  categoryName: "",
  studentFilter: "",
  studioFilter: "",
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

    enableStudentFilter(state, action: PayloadAction<IFilterName>) {
      state.isFilter = false;
      state.categoryName = "";
      state.studentFilter = action.payload.filterName;
    },
    enableStudioFilter(state, action: PayloadAction<IFilterName>) {
      state.isFilter = false;
      state.categoryName = "";
      state.studioFilter = action.payload.filterName;
    },
    enableTagFilter(state, action: PayloadAction<IFilterName>) {
      state.isFilter = false;
      state.categoryName = "";
      state.tagFilter = action.payload.filterName;
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
