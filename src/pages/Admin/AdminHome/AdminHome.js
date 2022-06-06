import React from "react";
import styles from "./AdminHome.module.css";
import Wrapper from "../../../components/UI/Wrapper";

function AdminHome(props) {
  return (
    <Wrapper style={styles.bg}>
      <div>AdminJobsPage</div>
      <div>
        <button onClick={props.onLogout} className={styles.logout}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
}

export default AdminHome;
