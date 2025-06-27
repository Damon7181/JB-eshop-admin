import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//For Charts (Start)
// const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May*"],
//   datasets: [
//     {
//       label: "Sales",
//       data: [4000, 3000, 5000, 2000, 2700],
//       backgroundColor: [
//         "rgba(75, 102, 122, 0.9)",
//         "rgba(65, 152, 162, 0.9)",
//         "rgba(55, 222, 222, 0.9)",
//         "rgba(45, 202, 102, 0.9)",
//         "rgba(35, 92, 32, 0.9)",
//       ],
//     },
//   ],
// };
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May*"],
  datasets: [
    {
      label: "Jan",
      data: [4000, null, null, null, null],
      backgroundColor: "rgba(75, 102, 122, 0.9)",
    },
    {
      label: "Feb",
      data: [null, 3000, null, null, null],
      backgroundColor: "rgba(65, 152, 162, 0.9)",
    },
    {
      label: "Mar",
      data: [null, null, 5000, null, null],
      backgroundColor: "rgba(55, 222, 222, 0.9)",
    },
    {
      label: "Apr",
      data: [null, null, null, 2000, null],
      backgroundColor: "rgba(45, 202, 102, 0.9)",
    },
    {
      label: "May*",
      data: [null, null, null, null, 2700],
      backgroundColor: "rgba(35, 92, 32, 0.9)",
    },
  ],
};

const options = {
  responsive: false,

  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Monthly Sales Data of JinnByte",
    },
  },
};

export default function Barchart() {
  return (
    <>
      <div>
        <Bar data={data} options={options} width={520} height={400} />
      </div>
    </>
  );
}
