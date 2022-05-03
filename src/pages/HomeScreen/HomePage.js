import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Wrapper from "../../components/UI/Wrapper";
import LoadingScreen from "../../components/LoadingPage/LoadingPage";
import CardLayout from "../../components/CardLayout/CardLayout";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getJobList } from "../../components/CardLayout/apihandler";

function HomePage(props) {
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
  }, []);

  return (
    <Wrapper>
      <div className={styles.bg}>
        <div>
          {/* <div>HomePage</div> */}
          <button onClick={props.onLogout} className={styles.logout}>
            Logout
          </button>
        </div>
        {/* <div> Search Bar Component Here</div> */}
        <SearchBar />
        {jobCardLayout}
      </div>
    </Wrapper>
  );
}

export default HomePage;
