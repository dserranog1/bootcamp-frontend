// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2FPAThSjnzNAbr4dTyIce7ne2F65bJCg",
  authDomain: "bootcamp-react-ed97e.firebaseapp.com",
  projectId: "bootcamp-react-ed97e",
  storageBucket: "bootcamp-react-ed97e.appspot.com",
  messagingSenderId: "387357906479",
  appId: "1:387357906479:web:ad92070b196f71876bd8da",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const fireBaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
