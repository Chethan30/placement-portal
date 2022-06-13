import React from "react";
import { Bar, PolarArea } from "react-chartjs-2";

function BarChart({ chartData }) {
  console.log(chartData);
  return (
    <div className="">
      <Bar data={chartData} />;
      <PolarArea data={chartData} />;
    </div>
  );
}

export default BarChart;
