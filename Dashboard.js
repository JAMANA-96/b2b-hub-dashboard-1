import { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function Dashboard() {
  const [data, setData] = useState({
    totalPhases: 12,
    completed: 1,
    inProgress: 1,
    notStarted: 10,
  });

  const pieData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [{
      data: [data.completed, data.inProgress, data.notStarted],
      backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
    }],
  };

  const barData = {
    labels: ["Define Vision", "Research Market", "Develop Platform", "Define Services", "Marketing Strategy", "Partnerships", "Networking Event", "Marketing Campaign", "Trade Mission", "Scaling", "Review KPIs", "Year 2 Plan"],
    datasets: [{
      label: "Phase Progress",
      data: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#4CAF50",
    }],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">B2B Hub Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold">Total Phases</h2>
          <p className="text-2xl">{data.totalPhases}</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold">Completed</h2>
          <p className="text-2xl text-green-600">{data.completed}</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold">In Progress</h2>
          <p className="text-2xl text-yellow-600">{data.inProgress}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold">Project Status</h2>
          <Pie data={pieData} />
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-bold">Phase Progress</h2>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}