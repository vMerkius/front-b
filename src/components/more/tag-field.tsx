import { NavLink } from "react-router-dom";

const Field = () => {
  return (
    <div className="field">
      <NavLink to="/boosting/lol" className="field__item">
        # Rise through the ranks with lol boosting
      </NavLink>
      <NavLink to="/coaching" className="field__item">
        # Master your skills with lol coaching
      </NavLink>
      <NavLink to="/boosting/tft" className="field__item">
        # Tft boosting for strategic champions
      </NavLink>
      <NavLink to="/about" className="field__item">
        # Learn more about boostersden team
      </NavLink>
    </div>
  );
};

export default Field;
