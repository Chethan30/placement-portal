import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import styles from "./JobDescription.module.css";
import Wrapper from "../../components/UI/Wrapper";
import FileHolder from "../../components/FileHolder/FileHolder";
import { getJobDesc } from "../apihandler";
import LoadingScreen from "../../components/LoadingPage/LoadingPage";

function JobDescription(props) {
  const { role } = useContext(AuthContext);
  let navigate = useNavigate();
  const [jobDescLoading, setJobDescLoading] = useState(false);
  const [JobDesc, setJobDesc] = useState([]);
  const [adminPrivilage, setAdminPrivilage] = useState(false);

  const getJobDescription = async () => {
    try {
      const jobID = sessionStorage.getItem("current_jobID");
      console.log(jobID);
      const response = await getJobDesc(jobID);
      if (response.status === 200) {
        setJobDescLoading(false);
        setJobDesc(response.data);
        console.log(response.data);
        return response;
      } else throw new Error("Error!");
    } catch (error) {
      console.log("", error);
    }
  };

  const shortlistUploadHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setJobDescLoading(true);
    getJobDescription();
    if (role === "admin") {
      setAdminPrivilage(true);
    }
  }, []);

  // console.log(JobDesc);
  const companyName = JobDesc.company_name;
  const companyDescription = JobDesc.job_desc;
  const jobRole = JobDesc.job_role;
  const jobType = JobDesc.job_type;
  const jd = JobDesc.jd_link;
  const ctc = JobDesc.ctc ? ` ₹ ${JobDesc.ctc}` : "";
  const location = JobDesc.location;
  const startDate = JobDesc.start_date;
  const lastDaytoApply = JobDesc.end_date;
  const oldJob = JobDesc.old_job;
  // const miscAttachemnts = JobDesc.extras;
  const deptsAllowed = JobDesc.dept_allowed;
  const canApply = JobDesc.can_apply;

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
          <div className={styles.subheading}>
            <span> Job Role: </span> {jobRole}
          </div>
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
            <span> Starting Date: </span> {startDate}
          </div>

          <hr className={styles["separator-bottom"]} />
          <FileHolder fileName={jd} />
          <div className={styles.lastHeading}>
            <span className={styles.lastDay}> Apply By: </span> {lastDaytoApply}
          </div>

          <div className={styles["container-center"]}>
            {canApply && !oldJob ? (
              <button className={styles.apply} onClick={onApplyHandler}>
                Apply
              </button>
            ) : (
              <button className={styles.cantapply}>Already Applied!</button>
            )}
            {/* <button className={styles.apply} onClick={onApplyHandler}>
              Apply
            </button> */}
            {adminPrivilage && (
              <button
                type="button"
                className={`${styles.delete} ${styles.apply} `}
              >
                Delete
              </button>
            )}
            {adminPrivilage && (
              <div>
                <form
                  onSubmit={shortlistUploadHandler}
                  className={styles.shortUpload}
                >
                  <input className={styles.inputfield} type="file" required />
                  <button type="submit" className={styles.apply}>
                    Upload Shortlist
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </Wrapper>
  );
}

export default JobDescription;
