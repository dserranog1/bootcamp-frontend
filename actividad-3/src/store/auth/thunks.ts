import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AnyAction } from "redux";
import type { ThunkAction } from "redux-thunk";
import {
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { RootState } from "../store";
import { checkingCredentials, login, setUserInfo } from "./authSlice";

export const checkingAuthentication = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    dispatch(checkingCredentials({ val: 2 }));
  };
};

export const startGoogleSignIn = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const signInResponse = await signInWithGoogle();
    if (signInResponse[0] === "ok") {
      dispatch(login(signInResponse[1]));
    } else {
      console.log(signInResponse[1]);
    }
  };
};

export const startCreatingUserWithEmailPassword = ({
  inputEmail,
  password,
}: {
  inputEmail: string;
  password: string;
  displayName?: string;
}): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const registeredUserInfo = await registerUserWithEmailPassword({
      inputEmail,
      password,
    });
    dispatch(setUserInfo(registeredUserInfo));
    // dispatch(registerUserWithEmailPassword({ email, password }))
    // console.log(resp);
  };
};

export const createUserFromGoogleAuth = createAsyncThunk(
  "auth/createUser",
  async ({
    inputEmail,
    password,
  }: {
    inputEmail: string;
    password: string;
  }) => {
    const registeredUserInfo = await registerUserWithEmailPassword({
      inputEmail,
      password,
    });
    return registeredUserInfo ? registeredUserInfo : null;
  }
);
