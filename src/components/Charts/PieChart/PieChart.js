import React from "react";
import { PolarArea } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div className="">
      <PolarArea data={chartData} />
    </div>
  );
}

export default PieChart;
