import React from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="">
      <Doughnut data={chartData} />
    </div>
  );
}

export default PieChart;
