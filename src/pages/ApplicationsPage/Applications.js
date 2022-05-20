import React from "react";
import styles from "./Applications.module.css";
import Wrapper from "../../components/UI/Wrapper";
import ApplicationsCard from "../../components/ApplicationsCard/ApplicationsCard";

function Applications() {
  //Get the Data here.
  // If you can do rest, else :) GG

  return (
    <Wrapper style={styles.bg}>
      <div className={styles.heading}>Applications</div>
      <ApplicationsCard />
    </Wrapper>
  );
}

export default Applications;
