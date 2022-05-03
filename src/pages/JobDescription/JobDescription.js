import React from "react";
import styles from "./JobDescription.module.css";
import Wrapper from "../../components/UI/Wrapper";
import FileHolder from "../../components/FileHolder/FileHolder";

function JobDescription(props) {
  const companyName = "Company Name";
  const companyDescription =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio suscipit iste officiis deserunt ad possimus tempore optio laboriosam beatae debitis? Incidunt possimus commodi expedita dolores quas atque nihil veniam, dicta numquam laudantium, sint obcaecati odio delectus ut dolorem ea. Quaerat repellendus accusamus voluptates provident dolores! Ipsa perspiciatis quod obcaecati impedit.Description";
  const jobRole = "Job Role";
  const jobType = "Job Type";
  const jd = "JD file";
  const ctc = props.ctc ? props.ctc : "CTC in INR";
  const location = "Location";
  const startDate = "Published Date";
  const lastDaytoApply = "Last Day to Apply";
  const miscAttachemnts = "Misc Attachments";

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
