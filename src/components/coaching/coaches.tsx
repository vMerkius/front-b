import { ICoach } from "../../types/coach-type";
import CoachCard from "./coach-card";

type CoachesProps = {
  coaches: ICoach[];
};

const Coaches: React.FC<CoachesProps> = ({ coaches }) => {
  return (
    <div className="card-container">
      {coaches.map((coach, i) => (
        <div key={i}>
          <CoachCard coach={coach} />
        </div>
      ))}
    </div>
  );
};

export default Coaches;
