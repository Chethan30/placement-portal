import React from "react";
import NavBar from "../../components/NavigationBar/NavBar";
import AdminNavBar from "../../components/NavigationBar/AdminNavBar";
import { Route, Routes } from "react-router-dom";
import CVScorer from "../CVScorer/CVScorer";
import Applications from "../ApplicationsPage/Applications";
import Profile from "../Profile/Profile";
import HomePage from "./HomePage";
import AdminHome from "../Admin/AdminHome/AdminHome";
import JobDescription from "../JobDescription/JobDescription";
import ApplyPage from "../ApplyPage/ApplyPage";
import AddJob from "../Admin/AddJob/AddJob";
import AddPost from "../Admin/AddPost/AddPost";
import Forum from "../Forum/Forum";
import Statistics from "../Statistics/Statistics";
// import AppliedModal from "../ApplyPage/AppliedModal";
// import styles from "./HomeScreen.module.css";
function HomeScreen(props) {
  return (
    <div>
      {sessionStorage.getItem("role") === "student" ? (
        <NavBar onLogout={props.onLogout} />
      ) : (
        <AdminNavBar onLogout={props.onLogout} />
      )}
      {/* <NavBar /> */}
      <Routes>
        <Route path="home" element={<HomePage onLogout={props.onLogout} />} />
        <Route
          path="adminhome"
          element={<AdminHome onLogout={props.onLogout} />}
        />
        <Route path="addjob" element={<AddJob />} />
        <Route path="addpost" element={<AddPost />} />
        <Route path="cvscorer" element={<CVScorer />} />
        <Route path="apply" element={<ApplyPage />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="applications" element={<Applications />} />
        <Route path="jobdescrption" element={<JobDescription />} />
        <Route path="forum" element={<Forum />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </div>
  );
}

export default HomeScreen;
