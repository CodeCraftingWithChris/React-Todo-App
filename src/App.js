import "./App.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [user] = useAuthState(auth);
  return <div>{!user ? <LoginPage /> : <HomePage />}</div>;
}

export default App;
