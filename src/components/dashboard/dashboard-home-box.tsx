type DashboardHomeBoxProps = {
    icon: string;
    title: string;
    subtitle: string;
    onClick?: () => void;
};

const DashboardHomeBox: React.FC<DashboardHomeBoxProps> = ({icon, title, subtitle, onClick}) => {
  return (
  <button className="dashboard-home__box" onClick={onClick}>
    <img className="dashboard-home__box__icon" src={icon}/>
    <h6>{title}</h6>
    <h6>{subtitle}</h6>
  </button>
  );
};

export default DashboardHomeBox;