import React, { useEffect, useState } from "react";
import styles from "./Applications.module.css";
import Wrapper from "../../components/UI/Wrapper";
import ApplicationsCard from "../../components/ApplicationsCard/ApplicationsCard";
import LoadingScreen from "../../components/LoadingPage/LoadingPage";
import { getSubmittedApplications } from "../apihandler";

function Applications() {
  //Get the Data here.
  // If you can do rest, else :) GG
  const [JobList, setJobList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getApplications = async () => {
    try {
      setIsLoading(true);
      const response = await getSubmittedApplications();
      console.log(response);
      if (response.status === 200) {
        setJobList(response.data.applications);
        setIsLoading(false);
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
      {isLoading ? (
        <LoadingScreen loadMessage="Loading..." />
      ) : (
        <div className={styles.content}>
          {JobList.map((job) => {
            return (
              <ApplicationsCard
                key={job.company_name}
                jobRole={job.job_role}
                jobType={job.job_type}
                companyName={job.company_name}
                status={job.status}
                ctc={job.ctc}
                date={job.date}
              />
            );
          })}
        </div>
      )}
    </Wrapper>
  );
}

export default Applications;
