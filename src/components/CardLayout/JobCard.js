import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./JobCard.module.css";
import JobRole from "../../assets/JobRole2.svg";
import JobType from "../../assets/JobTime.png";

function JobCard(props) {
  const companyName = props.companyName;
  const jobRole = props.jobRole;
  const jobType = props.jobType;

  let todayDate = new Date();
  let endDate = new Date(props.endDate);
  let difference = endDate.getTime() - todayDate.getTime();
  let days = difference / (1000 * 3600 * 24);
  const timeLeft = Math.round(days);

  let navigate = useNavigate();

  const onMoreHandler = () => {
    console.log(props.jobID.job_id);
    sessionStorage.setItem("current_jobID", props.jobID.job_id);
    navigate("/jobdescrption");
  };

  return (
    <div className={styles.card}>
      <div className={styles.uppercard}>
        <span className={styles.companyname}> {companyName} </span>
        <div className={styles.timer}>{timeLeft} days left</div>
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
