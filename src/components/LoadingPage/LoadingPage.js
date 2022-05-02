import React from "react";
import LoginLoader from "../../components/LoadingPage/LogInLoader";
import styles from "./LoadingPage.module.css";
function LoadingPage(props) {
  const content = props.loadMessage;

  return (
    <div className={styles.main}>
      <div className={styles.loader}>
        <h2 className={styles.text}>{content}</h2>
        <LoginLoader />
      </div>
    </div>
  );
}

export default LoadingPage;
