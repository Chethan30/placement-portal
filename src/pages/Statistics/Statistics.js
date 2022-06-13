import React, { useState } from "react";
import styles from "./Statistics.module.css";
import Wrapper from "../../components/UI/Wrapper";
import BarChart from "../../components/Charts/BarChart/BarChart";
import { Chart as ChartJS } from "chart.js/auto";

function Statistics() {
  //   const useData = [
  //     {
  //       id: 1,
  //       year: 2016,
  //       placedStudents: 1800,
  //     },
  //     { id: 2, year: 2017, placedStudents: 1900 },
  //     { id: 3, year: 2018, placedStudents: 2300 },
  //     { id: 4, year: 2019, placedStudents: 2300 },
  //     { id: 5, year: 2020, placedStudents: 3300 },
  //     { id: 6, year: 2021, placedStudents: 3500 },
  //   ];

  const labelsData = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

  const [userData, setUserData] = useState({
    labels: labelsData,
    datasets: [
      {
        label: "# of Placed Students",
        data: [12, 19, 3, 5, 2, 3],
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
  });

  return (
    <Wrapper style={styles.bg}>
      <div>Statistics</div>
      <BarChart chartData={userData} />
    </Wrapper>
  );
}

export default Statistics;

// Pie Chart Graph : Placed vs Unplaced
// Pie Chart Graph : Department Placed
// Pie Chart Graph : each slab placed
