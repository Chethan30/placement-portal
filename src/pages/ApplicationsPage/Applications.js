import React, { useEffect, useState } from "react";
import styles from "./Applications.module.css";
import Wrapper from "../../components/UI/Wrapper";
import ApplicationsCard from "../../components/ApplicationsCard/ApplicationsCard";
import { getSubmittedApplications } from "../apihandler";
// import LoadingScreen from "../../components/LoadingPage/LoadingPage";
// import CardLayout from "../../components/CardLayout/CardLayout";

function Applications() {
  //Get the Data here.
  // If you can do rest, else :) GG
  const [JobList, setJobList] = useState([]);

  const getApplications = async () => {
    try {
      const response = await getSubmittedApplications();
      console.log(response);
      if (response.status === 200) {
        setJobList(response.data.applications);
        console.log(JobList);
        return response;
      } else throw new Error("Error in loading Applications!");
    } catch (error) {
      console.log("", error);
    }
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <Wrapper style={styles.bg}>
      <div className={styles.heading}>Applications</div>
      {JobList.map((job) => {
        return (
          <ApplicationsCard
            jobRole={job.job_role}
            jobType={job.job_type}
            companyName={job.company_name}
            status={job.status}
            ctc={job.ctc}
            date={job.date}
          />
        );
      })}
    </Wrapper>
  );
}

export default Applications;
