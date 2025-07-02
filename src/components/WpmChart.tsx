import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Filler);

type WpmChartProps = {
  data: number[]; // array of WPM values per second
};

const WpmChart = ({ data }: WpmChartProps) => {
  const labels = data.map((_, i) => `${i}s`);

  const chartData = {
    labels,
    datasets: [
      {
        label: "WPM",
        data,
        fill: true,
        backgroundColor: "rgba(162, 195, 152, 0.2)",
        borderColor: "#a2c398",
        pointRadius: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false as const,
    scales: {
      x: {
        grid: { color: "#1f2e1b" },
        ticks: { color: "#a2c398" },
      },
      y: {
        beginAtZero: true,
        grid: { color: "#1f2e1b" },
        ticks: { color: "#a2c398" },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#2e4328",
        titleColor: "#fff",
        bodyColor: "#a2c398",
      },
    },
  };

  return (
    <div className="h-48 w-full">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default WpmChart;
