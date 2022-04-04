import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import { BrowserRouter as Router } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./context/auth-context";

function App() {
  const { success, logoutHandler } = useContext(AuthContext);

  return (
    <div className="main">
      <div className="container-right">
        <Router>
          {success && <HomeScreen onLogout={logoutHandler} />}
          {!success && <LoginPage />}
        </Router>
      </div>
    </div>
  );
}

export default App;
