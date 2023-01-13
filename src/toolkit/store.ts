import {configureStore} from "@reduxjs/toolkit";

import filterReducer from "@features/filter/filterSlice";
import alertReducer from "@features/alert/alertSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    alert: alertReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// useDispatch, useSelect를 사용할 때 필요
export type AppDispatch = typeof store.dispatch;
