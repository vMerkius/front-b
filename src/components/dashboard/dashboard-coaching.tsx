import DashboardAppBar from "./dashboard-appbar";

const DashboardCoaching = () => {
  const title = "Coaching Orders";

  return (
    <section className="dashboard__content">
      <DashboardAppBar title={title} />
    </section>
  );
};

export default DashboardCoaching;