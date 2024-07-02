import { useState } from "react";
import DashboardBar from "./dashboard-bar";
import DashboardHome from "./dashboard-home";
import DashboardProfile from "./dashboard-profile";
import DashboardBoosting from "./dashboard-boosting";
import DashboardCoaching from "./dashboard-coaching";

const Dashboard = () => {
  const [options, setOptions] = useState<number>(1);
  return (
    <section className="dashboard">   
      <DashboardBar option={options} setOption={setOptions} />
      {options === 1 && <DashboardHome setOption={setOptions}/>}
      {options === 2 && <DashboardProfile />}
      {options === 3 && <DashboardBoosting />}
      {options === 4 && <DashboardCoaching />}
    </section>
  );
};

export default Dashboard;
