import React from "react";
import styles from "./FilerHolder.module.css";

function FileHolder(props) {
  return (
    <div className={styles["outer-container"]}>
      {" "}
      <span className={styles.filename}> {props.fileName}</span>
    </div>
  );
}

export default FileHolder;
