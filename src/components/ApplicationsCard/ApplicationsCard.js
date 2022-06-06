import React from "react";
import styles from "./ApplicationsCard.module.css";
import JobRole from "../../assets/JobRole.png";
import JobTime from "../../assets/JobTime.png";
import JobApplied from "../../assets/JobApplied.png";
import JobCtc from "../../assets/JobCtc.png";

function ApplicationsCard(props) {
  const companyName = props.companyName;
  const jobRole = props.jobRole;
  //const jobTime = props.date;
  const jobCtc = props.ctc;
  const jobType = props.jobType;
  const jobAppl = props.date;
  const jobStatus = props.status;

  return (
    <div className={styles.container}>
      <div className={styles.title}> {companyName} </div>
      <div className={styles.sub1}>
        <div className={styles.jobrole}>
          <img className={styles.icon} src={JobRole} alt="" />
          <span className={styles.data}> {jobRole}</span>
        </div>
        <div className={styles.ctc}>
          <img className={styles.icon} src={JobCtc} alt="" />
          <span className={styles.data}> {jobCtc}</span>
        </div>
      </div>

      <div className={styles.sub2}>
        <div className={styles.jobtime}>
          <img className={styles.icon} src={JobTime} alt="" />
          <span className={styles.data}> {jobType}</span>
        </div>
        <div className={styles.applied}>
          <img className={styles.icon} src={JobApplied} alt="" />
          <span className={styles.data}> {jobAppl}</span>
        </div>
      </div>
      <div className={styles.status}> {jobStatus} </div>
    </div>
  );
}

export default ApplicationsCard;
