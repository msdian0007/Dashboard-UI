import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const BarChart = ({data, options}) => {
  return (
    <div>
      <Bar data={data} options={options} className=" lg:max-h-[200px] h-full"/>
    </div>
  );
};
