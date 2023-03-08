import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { createUserFromGoogleAuth } from "./thunks";

export type User = {
  photoURL: string | null;
  uid: string;
  email: string | null;
  displayName: string | null;
};

const initialState: User | null = null;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User | null>) => {
      state = action.payload;
    },
    logout: (state, action: PayloadAction<User | null>) => state,
    checkingCredentials: (state, action) => {
      console.log(action.payload);
      return state;
    },
    setUserInfo: (state, action: PayloadAction<User | null>) => {
      console.log("user info", action.payload);
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      createUserFromGoogleAuth.fulfilled,
      (state, action: PayloadAction<User | null>) => {
        state = action.payload;
        console.log("user info from async thunk", action.payload);
      }
    );
  },
});

export const { login, logout, checkingCredentials, setUserInfo } =
  authSlice.actions;
