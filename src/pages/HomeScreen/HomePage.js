import React from "react";
import styles from "./HomePage.module.css";
import Wrapper from "../../components/UI/Wrapper";
import CardLayout from "../../components/CardLayout/CardLayout";
import JobCard from "../../components/CardLayout/JobCard";

function HomePage(props) {
  return (
    <Wrapper>
      <div className={styles.bg}>
        <div>
          <div>HomePage</div>
          <button onClick={props.onLogout}>Logout</button>
        </div>
        <div> Search bAR cOMPONENET HERE</div>
        <CardLayout />
      </div>
    </Wrapper>
  );
}

export default HomePage;
