import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function TruthScoreChart() {
  const data = {
    labels: ["Reliability"],
    datasets: [
  {
    label: "TruthScore™",
    data: [82],
  },
],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
  stepSize: 20,
},
      },
    },
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl mt-8">
      <h3 className="text-xl font-semibold mb-4">
        TruthScore™ Reliability Analysis
      </h3>

      <Bar data={data} options={options} />
    </div>
  );
}

export default TruthScoreChart;