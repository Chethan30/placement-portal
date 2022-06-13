import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JobCard.module.css";
import JobRole from "../../assets/JobRole2.svg";
import JobType from "../../assets/JobTime.png";

function JobCard(props) {
  const companyName = props.companyName;
  const jobRole = props.jobRole;
  const jobType = props.jobType;
  let remainingDays = props.remainingDays;
  let oldJob = false;
  // let cardColors = [
  //   "linear-gradient(to right, #eefeff, #e0feff, #d1ffff, #c1fffe, #b1fffc)",
  //   "linear-gradient(to right, #faffee, #f4ffdb, #eeffc7, #e8ffb3, #e1ff9f)",
  //   "linear-gradient(to right, #ffffee, #feffdf, #fdffd0, #fbffc0, #f8ffb1)",
  //   "linear-gradient(to right, #fff8ee, #fff1de, #ffe9cf, #ffe2c0, #ffdab1)",
  //   "linear-gradient(to right, #fdeeff, #fae2ff, #f6d6fe, #f1caff, #ebbeff)",
  // ];

  if (remainingDays < 0) {
    oldJob = true;
    remainingDays = "--";
  }

  let controlClasses = oldJob
    ? `${styles.timer} ${styles.oldJob}`
    : `${styles.timer}`;

  let navigate = useNavigate();

  const onMoreHandler = () => {
    console.log(props.jobID);
    sessionStorage.setItem("current_jobID", props.jobID);
    navigate("/jobdescrption");
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.uppercard}
        // style={{
        //   background: cardColors[Math.floor(Math.random() * 5)],
        // }}
      >
        <span className={styles.companyname}> {companyName} </span>
        <div className={controlClasses}>
          {remainingDays} {!oldJob && "days left"}
        </div>
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
        <button className={styles["more-button"]} onClick={onMoreHandler}>
          {"More >"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
