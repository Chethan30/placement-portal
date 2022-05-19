import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JobDescription.module.css";
import Wrapper from "../../components/UI/Wrapper";
import FileHolder from "../../components/FileHolder/FileHolder";
import { getJobDesc } from "../apihandler";
import LoadingScreen from "../../components/LoadingPage/LoadingPage";

function JobDescription(props) {
  let navigate = useNavigate();
  const [jobDescLoading, setJobDescLoading] = useState(false);
  const [JobDesc, setJobDesc] = useState([]);
  const getJobDescription = async () => {
    try {
      const jobID = sessionStorage.getItem("current_jobID");
      console.log(jobID);
      const response = await getJobDesc(jobID);
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

  console.log(JobDesc);
  const companyName = JobDesc.company_name;
  const companyDescription = JobDesc.job_desc;
  const jobRole = "Job Role";
  const jobType = JobDesc.job_type;
  const jd = JobDesc.jd_link;
  const ctc = props.ctc ? props.ctc : ` ₹ ${JobDesc.ctc}`;
  const location = JobDesc.location;
  const startDate = JobDesc.start_date;
  const lastDaytoApply = JobDesc.end_date;
  const miscAttachemnts = JobDesc.extras;
  const deptsAllowed = JobDesc.dept_allowed;

  const onApplyHandler = () => {
    navigate("/apply");
  };

  return (
    <Wrapper style={styles.jd}>
      {jobDescLoading ? (
        <LoadingScreen loadMessage={"Getting Job...   "} />
      ) : (
        <div>
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
            <span> Departments Allowed: </span> {deptsAllowed}
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
            <button className={styles.apply} onClick={onApplyHandler}>
              Apply
            </button>
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default JobDescription;
