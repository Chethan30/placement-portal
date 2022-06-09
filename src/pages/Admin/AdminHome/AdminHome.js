import React, { useEffect, useState } from "react";
import styles from "./AdminHome.module.css";
import Wrapper from "../../../components/UI/Wrapper";
import CardLayout from "../../../components/CardLayout/CardLayout";
import { getJobList } from "../../../pages/apihandler";
import LoadingScreen from "../../../components/LoadingPage/LoadingPage";

function AdminHome(props) {
  const [jobCardLoading, setJobCardLoading] = useState(false);
  const [JobList, setJobList] = useState([]);

  const getJobHandler = async () => {
    try {
      const response = await getJobList();
      if (response.status === 200) {
        setJobCardLoading(false);
        setJobList(response.data);

        return response;
      } else throw new Error("Error in loading Jobs!");
    } catch (error) {
      console.log("", error);
    }
  };

  const jobCardLayout = jobCardLoading ? (
    <LoadingScreen loadMessage="Fetching Jobs..." />
  ) : (
    <CardLayout JobList={JobList} />
  );

  useEffect(() => {
    setJobCardLoading(true);
    getJobHandler();
    // setJobListArray(JobList.active_jobs);
  }, []);

  return (
    <Wrapper style={styles.bg}>
      <div>AdminJobsPage</div>
      <div>
        <button onClick={props.onLogout} className={styles.logout}>
          Logout
        </button>
        {jobCardLayout}
      </div>
    </Wrapper>
  );
}

export default AdminHome;
