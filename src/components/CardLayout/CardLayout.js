import React from "react";
import styles from "./CardLayout.module.css";
import JobCard from "./JobCard";

function CardLayout() {
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
