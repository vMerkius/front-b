import DashboardAppBar from "./dashboard-appbar";
import BoostingOrders from "./tables/dashboard-boostingorders";

const DashboardBoosting = () => {
  const title = "Boosting Orders";

  return (
    <section className="dashboard__content">
      <DashboardAppBar title={title} />

      <div className="dashboard-boosting__boosting">
        <BoostingOrders />
      </div>
    </section>
  );
};

export default DashboardBoosting;