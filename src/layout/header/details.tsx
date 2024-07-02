import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

type DetailsProps = {
  id: string;
  nick: string;
};

const Details: React.FC<DetailsProps> = ({ id, nick }) => {
  const { logout } = useAuth();

  return (
    <div className="details">
      <div className="nick-section">
        <h2>Welcome</h2>
        <span className="nick">{nick}</span>
      </div>
      <div className="options-section">
        <NavLink to={`/dashboard/${id}`} className="option">
          <span>Profile</span>
        </NavLink>
        <NavLink to={`/dashboard/${id}`} className="option">
          <span>Dashboard</span>
        </NavLink>

        <NavLink to={`/dashboard/${id}`} className="option">
          <span>History</span>
        </NavLink>
        <NavLink to={`/dashboard/${id}`} className="option">
          <span>Contact</span>
        </NavLink>
        <NavLink to={`/faq`} className="option">
          <span>FaQ</span>
        </NavLink>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
};
export default Details;
