import React from "react";
import styles from "./JobCard.module.css";
import JobRole from "../../assets/JobRole2.svg";
import JobType from "../../assets/JobTime.png";

function JobCard(props) {
  const companyName = props.companyName;
  const jobRole = props.jobRole;
  const jobID = props.jobID;
  const jobType = props.jobType;
  const timeLeft = props.timeLeft;
  const endDate = props.endDate;

  return (
    <div className={styles.card}>
      <div className={styles.uppercard}>
        <span className={styles.companyname}> {companyName} </span>
        <div className={styles.timer}>{timeLeft} days left</div>
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
