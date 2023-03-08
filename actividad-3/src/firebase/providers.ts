import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { User } from "../store/auth/authSlice";
import { fireBaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

type SignInSuccess = ["ok", User];
type SignInFailed = ["fail", FirebaseError | "unknown error"];

type SignInResponse = SignInSuccess | SignInFailed;

export const signInWithGoogle = async (): Promise<SignInResponse> => {
  try {
    const result = await signInWithPopup(fireBaseAuth, googleProvider);
    const { email, displayName, photoURL, uid } = result.user;
    return ["ok", { email, displayName, photoURL, uid }];
  } catch (error) {
    if (error instanceof FirebaseError) {
      return ["fail", error];
    }
    return ["fail", "unknown error"];
  }
};

export const registerUserWithEmailPassword = async ({
  inputEmail,
  password,
}: {
  inputEmail: string;
  password: string;
}) => {
  try {
    const res = await createUserWithEmailAndPassword(
      fireBaseAuth,
      inputEmail,
      password
    );
    console.log(res);
    const { email, displayName, photoURL, uid } = res.user;
    return { email, displayName, uid, photoURL };
  } catch (error) {
    console.log(error);
  }
};
