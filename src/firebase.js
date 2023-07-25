import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzuz0Fsy34rKATUFKQjfur7OH_eAQhvuw",
  authDomain: "react-todo-app-e54c9.firebaseapp.com",
  projectId: "react-todo-app-e54c9",
  storageBucket: "react-todo-app-e54c9.appspot.com",
  messagingSenderId: "37354701730",
  appId: "1:37354701730:web:0e5ca9c48d7c59b018e8fb",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { auth, db, provider };
