import React, { useEffect, useState } from "react";
import styles from "./Statistics.module.css";
import Wrapper from "../../components/UI/Wrapper";
import BarChart from "../../components/Charts/BarChart/BarChart";
import PieChart from "../../components/Charts/PieChart/PieChart";
import { Chart as ChartJS } from "chart.js/auto";
import { getStats } from "../apihandler";
import LoadingPage from "../../components/LoadingPage/LoadingPage";

function Statistics() {
  const bgcolor = [
    "rgba(255, 99, 132, 0.5)",
    "rgba(54, 162, 235, 0.5)",
    "rgba(255, 206, 86, 0.5)",
    "rgba(75, 192, 192, 0.5)",
    "rgba(153, 102, 255, 0.5)",
    "rgba(255, 159, 64, 0.5)",
  ];

  const bgcolor2 = ["rgba(54, 162, 235, 0.4)", "rgba(255, 206, 86, 0.7)"];

  const bordercolor2 = ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"];

  const bordercolor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];

  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const getStatistics = async () => {
    try {
      const response = await getStats();
      if (response.status === 200) {
        const temp = response.data.stats;
        console.log("empqewrfdwerfwe", temp);
        console.log("first chart", temp[0].label);
        setData([
          {
            labels: temp[0].label,
            datasets: [
              {
                label: temp[0].chart_type,
                data: temp[0].data,
                backgroundColor: bgcolor2,
                borderColor: bordercolor2,
                borderWidth: 1,
              },
            ],
          },
          {
            labels: temp[1].label,
            datasets: [
              {
                label: temp[1].chart_type,
                data: temp[1].data,
                backgroundColor: bgcolor,
                borderColor: bordercolor,
                borderWidth: 1,
              },
            ],
          },
          {
            labels: temp[2].label,
            datasets: [
              {
                label: temp[2].chart_type,
                data: temp[2].data,
                backgroundColor: bgcolor,
                borderColor: bordercolor,
                borderWidth: 1,
              },
            ],
          },
        ]);
        setIsDataLoaded(true);
        return response;
      } else throw new Error("Cant load stats");
    } catch (error) {
      console.log("", error);
    }
  };

  useEffect(() => {
    getStatistics();
  }, []);

  console.log("Data Here", data);
  console.log("Data Where");

  return (
    <Wrapper style={styles.bg}>
      <div className={styles.heading}>Statistics</div>
      {!isDataLoaded && <LoadingPage loadMessage="Loading..." />}
      {isDataLoaded && (
        <div className={styles.container}>
          <div className={styles.subheading}>Placed vs Unplaced</div>
          {isDataLoaded ? <PieChart chartData={data[0]} /> : ""}
          <hr className={styles.dividers} />
          <div className={styles.subheading}>Slabs</div>
          {isDataLoaded ? <BarChart chartData={data[1]} /> : ""}
          <hr className={styles.dividers} />
          <div className={styles.subheading}>Departments</div>
          {isDataLoaded ? <BarChart chartData={data[2]} /> : ""}
        </div>
      )}
    </Wrapper>
  );
}

export default Statistics;

// Pie Chart Graph : Placed vs Unplaced
// Pie Chart Graph : Department Placed
// Pie Chart Graph : each slab placed
