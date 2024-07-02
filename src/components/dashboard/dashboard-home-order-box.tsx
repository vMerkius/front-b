type DashboardHomeOrderBoxProps = {
    title: string;
    subtitle: string;
};

const DashboardHomeOrderBox: React.FC<DashboardHomeOrderBoxProps> = ({title, subtitle}) => {
  return (
  <div className="dashboard-home__order">
    <p className="dashboard-home__order__title">{title}</p>
    <h6>{subtitle}</h6>
  </div>
  );
};

export default DashboardHomeOrderBox;