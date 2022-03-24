import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import { LoginContext } from "./context/LoginContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CVScorer from "./pages/CVScorer/CVScorer";
import Applications from "./pages/ApplicationsPage/Applications";
import Profile from "./pages/Profile/Profile";

function App() {
  // const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  return (
    <Router>
      <LoginContext.Provider value={{ username, setUsername, setToken }}>
        {token ? <HomePage /> : <LoginPage />}
      </LoginContext.Provider>
      <Routes>
        {/* <Route path="home" element={<HomePage />} /> */}
        <Route path="cvscorer" element={<CVScorer />} />
        <Route path="applications" element={<Applications />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
