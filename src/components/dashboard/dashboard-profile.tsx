import DashboardAppBar from "./dashboard-appbar";

const DashboardProfile = () => {
  const title = "Profile";

  return (
    <section className="dashboard__content">
      <DashboardAppBar title={title} />
    </section>
  );
};

export default DashboardProfile; 