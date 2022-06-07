import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import styles from "./ApplyPage.module.css";
import { storage } from "../../firebase.js";
import { applyForJob } from "../apihandler.js";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function ApplyPage() {
  const onFileUploadHandler = (event) => {
    event.preventDefault();
    const file = event.target[0].files[0];
    uploadFile(file, "resume/usn/jobid/${file.name}");
  };

  const uploadFile = (file) => {
    if (!file) return "";
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);
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
          applyForJob(downloadURL, sessionStorage.getItem("current_jobID"));
        });
      }
    );
  };

  return (
    <Wrapper style={styles.box}>
      <div>Please Attach your Resume *</div>
      <br></br>
      <form className={styles.form} onSubmit={onFileUploadHandler}>
        <input className={styles.inputfield} type="file" name="resumefile" />{" "}
        <br />
        <button className={styles.apply}>Submit Application</button>
      </form>
    </Wrapper>
  );
}

export default ApplyPage;
