import React from "react";
import { Chart } from "react-google-charts";
import { ChartBox } from "./ChartStyles";
import { RootStateOrAny, useSelector } from "react-redux";

const DashboardChart: React.FC = () => {
  const graphValues = useSelector((state: RootStateOrAny) => state.graphValues);
  const data = [
    ["Problems", "stats"],
    ["Active", graphValues.active],
    ["Closed", graphValues.closed],
  ];

  const options = {
    title: "",
    colors: ["#caf1b2", "#ccc"],
  };
  return (
    <ChartBox>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        style={{width:'auto',height:'300px'}}
      />
    </ChartBox>
  );
};

export default DashboardChart;
