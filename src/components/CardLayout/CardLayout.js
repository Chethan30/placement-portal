import React from "react";
import Wrapper from "../UI/Wrapper";
import styles from "./CardLayout.module.css";
import JobCard from "./JobCard";

function CardLayout(props) {
  console.log("props here", props);

  const controlClasses =
    props.JobList.length > 0 ? styles["outer-layout"] : styles["outer-layout2"];

  return (
    <Wrapper>
      <div className={controlClasses}>
        <div className={styles.layout}>
          {props.JobList.length > 0 ? (
            props.JobList.map((jobID) => {
              return (
                <JobCard
                  key={jobID.job_id}
                  jobID={jobID.job_id}
                  jobRole={jobID.job_role}
                  jobType={jobID.job_type}
                  remainingDays={jobID.remaining_days}
                  companyName={jobID.company_name}
                />
              );
            })
          ) : (
            <h2 className={styles.error}>Sorry 🫤</h2>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default CardLayout;
