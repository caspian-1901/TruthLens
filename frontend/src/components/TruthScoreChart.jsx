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

function TruthScoreChart({ truthScore }) {
  const displayScore = truthScore === 0 ? 2 : truthScore;

  const data = {
    labels: ["Reliability"],
    datasets: [
      {
        label: "TruthScore™",
        data: [displayScore],
        backgroundColor:
          truthScore >= 75
            ? "rgba(34,197,94,0.8)"
            : truthScore >= 50
            ? "rgba(250,204,21,0.8)"
            : "rgba(239,68,68,0.8)",
        borderRadius: 12,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 1500,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: () => `TruthScore: ${truthScore}/100`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          color: "#94a3b8",
        },
        grid: {
          color: "rgba(148,163,184,0.1)",
        },
      },
      x: {
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl mt-8 border border-cyan-500/20">
      <h3 className="text-xl font-semibold mb-4 text-cyan-300">
        TruthScore™ Reliability Analysis
      </h3>

      <Bar data={data} options={options} />
    </div>
  );
}

export default TruthScoreChart;