import DashboardAppBar from "./dashboard-appbar";
import DashboardHomeBox from "./dashboard-home-box";
import boostingIcon from "/assets/img/new-icons/rocket_white_small.svg";
import coachingIcon from "/assets/img/new-icons/coach.png";
import profileIcon from "/assets/img/new-icons/profile.png";
import DashboardHomeOrderBox from "./dashboard-home-order-box";
import LatestOrders from "./dashboard-latestorders";

type DashboardHomeProps = {
  setOption: (option: number) => void;
};

const DashboardHome: React.FC<DashboardHomeProps> = ({ setOption }) => {
  const title = "Welcome to Boosters Den";

  function handleClick(option: number) {
    setOption(option);
  }

  return (
    <section className="dashboard__content">
      <DashboardAppBar title={title} />

      <div className="dashboard-home">
        <div className="dashboard-home__boxes">
          <DashboardHomeBox icon={boostingIcon} title="Boosting" subtitle="Orders" onClick={() => handleClick(3)}/>
          <DashboardHomeBox icon={coachingIcon} title="Coaching" subtitle="Sessions" onClick={() => handleClick(4)}/>
          <DashboardHomeBox icon={profileIcon} title="Profile" subtitle="Settings" onClick={() => handleClick(2)}/>
          <DashboardHomeOrderBox title="Your next order" subtitle="will show up here" />
        </div>

        <div className="dashboard-home__latest">
          <LatestOrders />
        </div>
      </div>
    </section>
  );
};

export default DashboardHome; 