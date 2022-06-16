import React, {useEffect, useState} from "react";
import styles from "./Statistics.module.css";
import Wrapper from "../../components/UI/Wrapper";
import BarChart from "../../components/Charts/BarChart/BarChart";
import { Chart as ChartJS } from "chart.js/auto";
import {getStats} from "../apihandler";

function Statistics() {
  const [stats, setStats] = useState([]);

  const getStatistics = async () => {
    try {
      const response = await getStats();
      if (response.status === 200) {
        setStats(response.data.stats);
        return response;
      } else throw new Error("Cant load stats");
    } catch (error) {
      console.log("", error);
    }
  };
  useEffect(() => {
    getStatistics();
  }, []);


  console.log(stats)

  // const labelsData = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  const userData1={
    labels: stats[0].label,
    datasets: [
      {
        label: stats[0].chart_type,
        data: stats[0].data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const userData2={
    labels: stats[1].label,
    datasets: [
      {
        label: stats[1].chart_type,
        data: stats[1].data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const userData3={
    labels: stats[2].label,
    datasets: [
      {
        label: stats[2].chart_type,
        data: stats[2].data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <Wrapper style={styles.bg}>
      <div>Statistics</div>
      <BarChart chartData={userData1} />
      <BarChart chartData={userData2} />
      <BarChart chartData={userData3} />

    </Wrapper>
  );
}

export default Statistics;

// Pie Chart Graph : Placed vs Unplaced
// Pie Chart Graph : Department Placed
// Pie Chart Graph : each slab placed
