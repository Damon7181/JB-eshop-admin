import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register components for Line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// For Charts (Start)
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May*"],
  datasets: [
    {
      label: "Sales",
      data: [4000, 3000, 5000, 2000, 2700],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.4, // smooth curves
      pointBackgroundColor: [
        "rgba(75, 102, 122, 0.9)",
        "rgba(65, 152, 162, 0.9)",
        "rgba(55, 222, 222, 0.9)",
        "rgba(45, 202, 102, 0.9)",
        "rgba(35, 92, 32, 0.9)",
      ],
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

export default function Linechart() {
  return (
    <div>
      <Line data={data} options={options} width={600} height={400} />
    </div>
  );
}
