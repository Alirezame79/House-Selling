import { createSlice } from "@reduxjs/toolkit";
import { advertising } from "../../types/advertising";

const initialState: advertising = {
  id: "",
  address: "",
  description: "",
  location: [35.743918, 51.251342],
  phone: "",
};

export const advertisingSlice = createSlice({
  name: "advertising",
  initialState,
  reducers: {
    setValue: (state, action) => {
      return action.payload;
    },
  },
});

export const { setValue } = advertisingSlice.actions;
export default advertisingSlice.reducer;
