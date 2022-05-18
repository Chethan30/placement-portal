import React, {useEffect, useState} from "react";
import styles from "./JobDescription.module.css";
import Wrapper from "../../components/UI/Wrapper";
import FileHolder from "../../components/FileHolder/FileHolder";
import {getJobDesc, getJobList} from "../apihandler";
import LoadingScreen from "../../components/LoadingPage/LoadingPage";
import CardLayout from "../../components/CardLayout/CardLayout";

function JobDescription(props) {

  const [jobDescLoading, setJobDescLoading] = useState(false);
  const [JobDesc, setJobDesc] = useState([]);
  const getJobDescription = async () => {
    try {
      const response = await getJobDesc();
      if (response.status === 200) {
        setJobDescLoading(false);
        setJobDesc(response.data);
        return response;
      } else throw new Error("Error!");
    } catch (error) {
      console.log("", error);
    }
  };

  useEffect(() => {
    setJobDescLoading(true);
    getJobDescription();
    // setJobListArray(JobList.active_jobs);
  }, []);
  const companyName = JobDesc.company_name;
  const companyDescription = JobDesc.job_desc;
  const jobRole = "Job Role";
  const jobType = JobDesc.job_type;
  const jd = JobDesc.jd_link;
  const ctc = props.ctc ? props.ctc : "CTC in INR";
  const location = "Location";
  const startDate = JobDesc.start_date;
  const lastDaytoApply = JobDesc.end_date;
  const miscAttachemnts = JobDesc.extras;
  const deptsAllowed = ["ECE","CSE", "ISE"]

  return (
    <Wrapper style={styles.jd}>
      <div className={styles.companyname}> {companyName} </div>
      <hr className={styles["separator-top"]} />
      <div className={styles.companydesc}> {companyDescription} </div>
      {props.jobRole ? (
        <div className={styles.jobrole}>
          <span> Job Role :</span> {jobRole}
        </div>
      ) : (
        ""
      )}
      <div className={styles.subheading}>
        <span> Job Type: </span> {jobType}
      </div>
      <div className={styles.subheading}>
        <span> Location: </span> {location}
      </div>
      <div className={styles.subheading}>
        <span> Cost to Company: </span> {ctc}
      </div>
      <div className={styles.subheading}>
        <span> Published Date: </span> {startDate}
      </div>

      <hr className={styles["separator-bottom"]} />
      <FileHolder fileName={jd} />
      <FileHolder fileName={miscAttachemnts} />
      <div> {lastDaytoApply} </div>
      <div className={styles["container-center"]}>
        {" "}
        <button className={styles.apply}>Apply</button>{" "}
      </div>
    </Wrapper>
  );
}

export default JobDescription;
