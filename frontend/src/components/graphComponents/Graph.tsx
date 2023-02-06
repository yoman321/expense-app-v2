import { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Login from "../loginComponents/Login";
import Backdrop from "../loginComponents/Backdrop";
import BarChart from "./BarChart";

const Graph = () => {
  const expenseData = [
    { expenseType: "Food", expenseAmount: 100 },
    { expenseType: "Rent", expenseAmount: 100 },
  ];
  const [chartData, setChartData] = useState({
    labels: expenseData.map((data) => data.expenseType),
    datasets: [
      {
        data: expenseData.map((data) => data.expenseAmount),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? (
        <>
          <Login /> <Backdrop />
        </>
      ) : (
        <BarChart labels={chartData.labels} datasets={chartData.datasets} />
      )}
    </div>
  );
};
export default Graph;
