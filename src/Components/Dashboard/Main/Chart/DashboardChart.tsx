import React from "react";
import { Chart } from "react-google-charts";
import { ChartBox } from "./ChartStyles";
import { RootStateOrAny, useSelector } from "react-redux";

const DashboardChart: React.FC = () => {
  const graphValues = useSelector((state: RootStateOrAny) => state.graphValues);
  const global = useSelector((state: RootStateOrAny) => state.issues);

  let data;
  if (global === "user") {
    data = [
      ["Problems", "stats"],
      ["Active", graphValues.user.active],
      ["Closed", graphValues.user.closed],
    ];
  } else {
    data = [
      ["Problems", "stats"],
      ["Active", graphValues.global.active],
      ["Closed", graphValues.global.closed],
    ];
  }

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
        style={{ width: "auto", height: "270px" }}
      />
    </ChartBox>
  );
};

export default DashboardChart;
