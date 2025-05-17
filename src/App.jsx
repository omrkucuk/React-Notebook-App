import { useContext } from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { UserContext } from "./context/UserContext";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage"; // Profil sayfasını ekledik
import { Route, Router } from "@mui/icons-material";

function App() {
  const { state } = useContext(UserContext);

  return (
    <div>
      {state.currentPage === "register" && <Register />}
      {state.currentPage === "login" && <Login />}
      {state.currentPage === "home" && <HomePage />}
      {state.currentPage === "profile" && <ProfilePage />}{" "}
    </div>
  );
}

export default App;
