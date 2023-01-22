import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
export interface ChartDataProps {
  labels: (string | undefined)[];
  datasets: {
    data: (string | number)[];
    backgroundColor: string[];
    borderColor: string;
    borderWidth: number;
  }[];
}

const BarChart = (chartData: ChartDataProps) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Expense Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Expense Report Chart",
            },
            legend: {
              display: false,
            },
          },
        }}
      ></Bar>
    </div>
  );
};
export default BarChart;
