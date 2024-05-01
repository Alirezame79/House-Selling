import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: false,
  reducers: {
    setProfile: (state, action) => {
      return action.payload;
    }
  }
})

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;