import React from "react";
import styles from "./CardLayout.module.css";
import JobCard from "./JobCard";

function CardLayout(props) {
  console.log("props here", props.JobList.active_jobs);

  return (
    <div className={styles["outer-layout"]}>
      <div className={styles.layout}>
        {props.JobList.active_jobs
          ? props.JobList.active_jobs.map((jobID) => {
              return (
                <JobCard
                  key={jobID.job_id}
                  jobID={jobID.job_id}
                  jobRole={jobID.comp_address}
                  jobType={jobID.job_type}
                  remainingDays={jobID.remaining_days}
                  companyName={jobID.company_name}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default CardLayout;
