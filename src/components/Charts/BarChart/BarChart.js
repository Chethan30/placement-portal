import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
  console.log(chartData);
  return (
    <div className="">
      <Bar data={chartData} />
    </div>
  );
}

export default BarChart;
