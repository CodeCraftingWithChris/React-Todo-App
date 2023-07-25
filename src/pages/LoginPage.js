import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";

function LoginPage() {
  const signInUser = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider).catch((err) => alert(err.message));
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex-col text-center space-y-6">
        <h1 className="text-4xl font-bold">My Todo App</h1>
        <button
          onClick={signInUser}
          className="bg-green-500 p-4 rounded-lg text-sm font-bold text-white hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
