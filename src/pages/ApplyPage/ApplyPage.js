import React, { useState } from "react";
import Wrapper from "../../components/UI/Wrapper";
import styles from "./ApplyPage.module.css";
import LoadingPage from "../../components/LoadingPage/LoadingPage";
import AppliedModal from "./AppliedModal";
import { storage } from "../../firebase.js";
import { applyForJob } from "../apihandler.js";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function ApplyPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onFileUploadHandler = (event) => {
    event.preventDefault();
    const file = event.target[0].files[0];
    uploadFile(file, "resume/usn/jobid/${file.name}");
  };

  const uploadFile = (file) => {
    if (!file) return "";
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
    setIsLoading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log("Bytes transferred: ", prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setIsLoading(false);
          setSuccess(true);
          applyForJob(downloadURL, sessionStorage.getItem("current_jobID"));
        });
      }
    );
  };

  const uploadContent = (
    <div>
      <div>Please Attach your Resume *</div>
      <br></br>
      <form className={styles.form} onSubmit={onFileUploadHandler}>
        <input className={styles.inputfield} type="file" name="resumefile" />{" "}
        <br />
        <button className={styles.apply}>Submit Application</button>
      </form>
    </div>
  );

  return (
    <Wrapper style={styles.box}>
      {isLoading ? (
        <LoadingPage loadMessage="Uploading..." />
      ) : success ? (
        <AppliedModal />
      ) : (
        uploadContent
      )}
    </Wrapper>
  );
}

export default ApplyPage;
