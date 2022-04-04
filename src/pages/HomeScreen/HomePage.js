import React from "react";
// import styles from "./HomePage.module.css";

function HomePage(props) {
  return (
    <div>
      <div>HomePage</div>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
