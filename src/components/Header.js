import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <header className="flex items-center justify-between p-8 shadow-lg">
      <h1 className="text-3xl font-bold">My Todo App</h1>
      <img
        src={user?.photoURL}
        alt="profile"
        className="h-10 w-10 rounded-full cursor-pointer"
        onClick={() => auth.signOut()}
      />
    </header>
  );
}

export default Header;
