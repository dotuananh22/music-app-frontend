import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Admin from "..";

const DashboardAdmin = () => {
  return (
    <div className="flex flex-col gap-6">
      <Admin active="Dashboard" />
    </div>
  );
};

export default DashboardAdmin;
