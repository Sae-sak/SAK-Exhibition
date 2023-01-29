import { IPhoto, IPhotoState } from "@type/photo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IPhotoState = {
  selectedId: null,
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    openPhoto(state, action: PayloadAction<IPhoto>) {
      state.selectedId = action.payload.selectedId;
    },

    closePhoto(state) {
      state.selectedId = null;
    },

    openPost(state) {
      state.selectedId = null;
    },
  },
});

export const photoActions = photoSlice.actions;
export default photoSlice.reducer;
