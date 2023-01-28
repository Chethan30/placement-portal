import React from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart({ chartData }) {
  return (
    <div style={{ width: 400 }}>
      <Doughnut data={chartData} />
    </div>
  );
}

export default PieChart;
