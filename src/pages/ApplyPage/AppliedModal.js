import React from "react";
import styles from "./AppliedModal.module.css";
import JobApplied from "../../assets/JobAppliedSuccess.png";
import { useNavigate } from "react-router-dom";

function AppliedModal() {
  let navigate = useNavigate();

  const goHomeHandler = () => {
    navigate("/home");
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={JobApplied} alt="Success" />
        </div>
        <p className={styles.message}>Jop Application Successful</p>
        <button className={styles.home} onClick={goHomeHandler}>
          Home
        </button>
      </div>
    </div>
  );
}

export default AppliedModal;
