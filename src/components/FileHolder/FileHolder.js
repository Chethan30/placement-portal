import React from "react";
import styles from "./FilerHolder.module.css";

function FileHolder(props) {
  const link = props.fileName;

  const jdHandler = () => {
    window.open(link);
  };

  return (
    <div className={styles["outer-container"]} onClick={jdHandler}>
      {" "}
      <span className={styles.filename}>JD</span>
    </div>
  );
}

export default FileHolder;
