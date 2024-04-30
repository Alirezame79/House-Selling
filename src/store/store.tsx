import { configureStore } from "@reduxjs/toolkit";
import { advertisingSlice } from "./slices/advertising";

const store = configureStore({
  reducer: {
    advertising: advertisingSlice.reducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;