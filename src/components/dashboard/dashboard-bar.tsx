import { useNavigate } from "react-router-dom";
import logo from "/assets/img/logo/logo.png";
import btn from "/assets/img/icons/btn_shape01.png";
import homeIcon from "/assets/img/new-icons/home.svg";
import profileIcon from "/assets/img/new-icons/profile.png";
import boostingIcon from "/assets/img/new-icons/rocket_white_small.svg";
import coachingIcon from "/assets/img/new-icons/coach.png";
import logoutIcon from "/assets/img/new-icons/logout.png";

const dashboardOptions: {
  id: number;
  title: string;
}[] = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Profile",
  },
  {
    id: 3,
    title: "Boosting",
  },
  {
    id: 4,
    title: "Coaching",
  },
];

type DashboardBarProps = {
  option: number;
  setOption: (option: number) => void;
};

const DashboardBar: React.FC<DashboardBarProps> = ({ option, setOption }) => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-bar">
      <img
        onClick={() => navigate("/")}
        className="logo"
        src={logo}
        alt="Logo"
        width="80px"
      />

      <button className="logout">
        <img src={logoutIcon} /> 
      </button>
      <div className="dashboard-bar__options">
        {dashboardOptions.map((dashboardOption) => (
          <div
            key={dashboardOption.id}
            className={`dashboard-bar__option ${
              option === dashboardOption.id
                ? "dashboard-bar__option--clicked"
                : ""
            }`}
            onClick={() => setOption(dashboardOption.id)}
          >
            <img
                className="dashboard-bar__option__btn" 
                src={btn}
                alt="Decoration Icon"
            />
            {dashboardOption.id === 1 && (
              <img
                className="dashboard-bar__option__icon"
                src={homeIcon}
                alt="Home Icon"
              />
            )}
            {dashboardOption.id === 2 && (
              <img
                className="dashboard-bar__option__icon"
                src={profileIcon}
                alt="Profile Icon"
              />
            )}
            {dashboardOption.id === 3 && (
              <img
                className="dashboard-bar__option__icon"
                src={boostingIcon}
                alt="Boosting Icon"
              />
            )}
            {dashboardOption.id === 4 && (
              <img
                className="dashboard-bar__option__icon"
                src={coachingIcon}
                alt="Coaching Icon"
              />
            )}
            <span>{dashboardOption.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardBar;
