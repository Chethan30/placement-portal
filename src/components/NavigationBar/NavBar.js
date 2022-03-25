import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";
import "./NavBar.css";
function NavBar() {
  const { username } = useContext(LoginContext);

  return (
    <nav>
      <Link to="home" className="home">
        <li className="logo-nav">Placement Portal</li>
      </Link>
      <ul className="menu">
        <Link to="cvscorer" className="cvscorer">
          <li>CVScorer</li>
        </Link>
        <Link to="applications" className="applications">
          <li>Applications</li>
        </Link>
        <Link to="notifications" className="notifications">
          <li>Notifications</li>
        </Link>
        <Link to="profile" className="profile">
          <li>{username}</li>
        </Link>
      </ul>
      <button className="hamburger is-active">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default NavBar;
