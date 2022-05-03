import React from "react";
import NavBar from "../../components/NavigationBar/NavBar";
import { Route, Routes } from "react-router-dom";
import CVScorer from "../CVScorer/CVScorer";
import Applications from "../ApplicationsPage/Applications";
import Profile from "../Profile/Profile";
import HomePage from "./HomePage";
import JobDescription from "../JobDescription/JobDescription";
// import styles from "./HomeScreen.module.css";
function HomeScreen(props) {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="home" element={<HomePage onLogout={props.onLogout} />} />
        <Route path="cvscorer" element={<CVScorer />} />
        <Route path="applications" element={<Applications />} />
        <Route path="jobdescrption" element={<JobDescription />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </div>
  );
}

export default HomeScreen;
