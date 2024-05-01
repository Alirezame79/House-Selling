import { configureStore } from "@reduxjs/toolkit";
import { advertisingSlice } from "./slices/advertising";
import { profileSlice } from "./slices/profile";

const store = configureStore({
  reducer: {
    advertising: advertisingSlice.reducer,
    profile: profileSlice.reducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;