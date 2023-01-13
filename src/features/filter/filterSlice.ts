import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  IFilterState,
  ICategoryName,
  IFilterName,
} from "@constants/types/Filter";

const initialState: IFilterState = {
  isFilter: false,
  categoryName: "",
  filterName: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    openFilter(state) {
      state.isFilter = true;
      state.categoryName = "";
      state.filterName = "";
    },
    closeFilter(state) {
      state.isFilter = false;
    },
    selectCategory(state, action: PayloadAction<ICategoryName>) {
      state.categoryName = action.payload.categoryName;
    },
    enableFilter(state, action: PayloadAction<IFilterName>) {
      state.isFilter = false;
      state.categoryName = "";
      state.filterName = action.payload.filterName;
    },
    disableFilter(state) {
      state.filterName = "";
    },
  },
});

export const {
  openFilter,
  closeFilter,
  selectCategory,
  enableFilter,
  disableFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
