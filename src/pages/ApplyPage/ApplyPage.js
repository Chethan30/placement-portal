import React from "react";
import Wrapper from "../../components/UI/Wrapper";
import styles from "./ApplyPage.module.css";

function ApplyPage() {
  const onFileUploadHandler = (event) => {
    event.preventDefault();

    console.log(event.target[0].value);
  };

  return (
    <Wrapper style={styles.box}>
      <div>User Details Here</div>
      <form onSubmit={onFileUploadHandler}>
        <input type="file" name="resumefile" />
        <button className={styles.apply}>Submit Application</button>
      </form>
    </Wrapper>
  );
}

export default ApplyPage;
