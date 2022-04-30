import React, {useEffect, useState} from "react";
import styles from "./CardLayout.module.css";
import JobCard from "./JobCard";
import {getJobList} from "./apihandler";

function CardLayout() {

    const [JobList, setJobList] = useState([]);

  useEffect(() => {
    getJobList() .then(function(response )
    {
        if (response.status === 200) {
          setJobList(response.data);
          return response;
        } else alert("Error!");
      })
      .catch((error) => {
        console.log("", error);
      })
    },[]);

    console.log("Jobsss", JobList);

  return (
    <div className={styles["outer-layout"]}>
      <div className={styles.layout}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

export default CardLayout;
