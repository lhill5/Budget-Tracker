import styles from "../styles/Chart.module.css";

import {
  Chart as chartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

chartJS.register(
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const dateToString = (date) => {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var date = date.getDate();
  var time =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (date < 10 ? "0" : "") +
    date;
  return time;
};

const getDatesBetween = (start_date, end_date) => {
  const date_arr = [];
  for (let i = start_date; i <= end_date; i.setDate(i.getDate() + 1)) {
    date_arr.push(dateToString(i));
  }
  return date_arr;
};

const getRandomData = (arr_len) => {
  let data_arr = [];

  data_arr.push(500);
  for (let i = 1; i < arr_len; i++) {
    let sign = Math.round(Math.random()) === 0 ? -1 : 1;
    let val = Math.abs(data_arr[i - 1] + Math.random() * 100 * sign);
    data_arr.push(val);
    // data_arr.push(1);
  }
  return data_arr;
};

const label_arr = getDatesBetween(new Date(2023, 8, 1), new Date(2023, 11, 4));
const data_arr = getRandomData(label_arr.length);

const data = {
  labels: label_arr,
  datasets: [
    {
      fill: true,
      backgroundColor: "rgba(104, 43, 215, 0.3)",
      data: data_arr,
      borderColor: "#682bd7",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index",
  },
  layout: {
    padding: {
      bottom: 5,
      left: 5,
    },
  },
  scales: {
    x: {
      type: "time",
      time: {
        unit: "day",
      },
      ticks: {
        color: "#D3D3D3",
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "#D3D3D3",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 1,
    },
  },
};

const LineChart = () => {
  return (
    <div className={styles["nw-chart"]}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
