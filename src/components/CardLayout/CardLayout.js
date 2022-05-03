import React from "react";
import styles from "./CardLayout.module.css";
import JobCard from "./JobCard";

function CardLayout(props) {
  console.log("props here", props);

  return (
    <div className={styles["outer-layout"]}>
      <div className={styles.layout}>
        {props.JobList.active_jobs
          ? props.JobList.active_jobs.map((jobID) => {
              // console.log(jobID);

              return (
                <JobCard
                  key={Math.random()}
                  jobID={jobID}
                  jobRole={jobID.comp_address}
                  jobType={jobID.job_type}
                  endDate={jobID.end_date}
                  companyName={jobID.company_name}
                />
              );
            })
          : ""}

        {/* <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
          <JobCard />*/}
      </div>
    </div>
  );
}

export default CardLayout;
