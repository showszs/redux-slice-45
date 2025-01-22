import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";
import { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
}

const initialState: UserState = {
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const selectUsername = (state: RootState) => state.user.name;
