import React from "react";
import styles from "./JobCard.module.css";
import JobRole from "../../assets/JobRole2.svg";
import JobType from "../../assets/JobTime.png";

function JobCard() {
  const companyName = "Name of the Company";
  const jobRole = "Associate Software Developer";
  const jobType = "Job Type";
  const timeLeft = "X";

  return (
    <div className={styles.card}>
      <div className={styles.uppercard}>
        <span className={styles.companyname}> {companyName} </span>
        <div className={styles.timer}>{timeLeft} day left</div>
        {/* Insert Timer Component here */}
      </div>
      <div className={styles.lowercard}>
        <div>
          <div className={styles.jobrole}>
            <img className={styles["jobrole-img"]} src={JobRole} alt="" />
            {"\t"}
            <span>{jobRole}</span>
          </div>
          <div>
            <img className={styles["jobtype-img"]} src={JobType} alt="" />
            {"\t"}
            <span>{jobType}</span>
          </div>
        </div>
        <button className={styles["more-button"]}>{"More >"}</button>
      </div>
    </div>
  );
}

export default JobCard;
