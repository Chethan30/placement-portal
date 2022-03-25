import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import { LoginContext } from "./context/LoginContext";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

function App() {
  // const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [success, setSuccess] = useState(false);

  return (
    <div className="main">
      {/* <div className="container-left">
        <h1>Placement Portal</h1>
      </div> */}
      <div className="container-right">
        <Router>
          <LoginContext.Provider
            value={{ username, setUsername, setToken, setSuccess }}
          >
            {token ? <HomeScreen /> : <LoginPage />}
          </LoginContext.Provider>
        </Router>
      </div>
    </div>
  );
}

export default App;
