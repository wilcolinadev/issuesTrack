import React from "react";
import { Chart } from "react-google-charts";
import {ChartBox} from "./ChartStyles";

const DashboardChart: React.FC = () => {
  const data = [
    ["Problems", "stats"],
    ["Pending", 11],
    ["Solved", 2],
    ["Unsolved", 2],
  ];

  const options = {
    title: "",
  };
  return (
    <ChartBox>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        height={'250px'}
      />
    </ChartBox>
  );
};

export default DashboardChart;
