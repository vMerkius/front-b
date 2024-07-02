import newOrderIcon from "/assets/img/new-icons/new-order.png";

type DashboardAppBarProps = {
    title: string;
};

const DashboardAppBar: React.FC<DashboardAppBarProps> = ({title}) => {
  return (
  <div className="dashboard-appbar">
    <h5>{title}</h5>
    
    <div className="dashboard-appbar__order">
      <h5>New Order</h5>

      <button className="dashboard-appbar__order__btn ">
        <img src={newOrderIcon}/>
      </button>
    </div>
  </div>
  );
};
export default DashboardAppBar;