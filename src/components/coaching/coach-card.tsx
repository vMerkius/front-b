import { ICoach } from "../../types/coach-type";
import Top from "./top";
import rank_data from "../../data/rank-data";
import game_data from "../../data/game-data";
import lanes_data from "../../data/lanes-data";
import star from "../../../public/assets/img/new-icons/star.svg";
import { useNavigate } from "react-router-dom";

type CoachCardProps = {
  coach: ICoach;
};

const CoachCard: React.FC<CoachCardProps> = ({ coach }) => {
  console.log("coach", coach);
  const navigate = useNavigate();
  return (
    <div className="coach-card">
      {coach.recommended && <Top />}
      <div className="img">
        {coach.imageUrl !== null && (
          <img src={coach.imageUrl} alt={coach.name} />
        )}
      </div>
      <div className="name">
        <h2 id="name">{coach.name}</h2>

        <span className="rating">
          <img src={star} width="17px" />
          <span className="rating-number">{coach.rating}</span>
        </span>
      </div>
      <div className="rank">
        {rank_data.map((rank) => {
          if (rank.name === coach.rank) {
            return (
              <img src={rank.img} alt={rank.name} key={rank.id} width="70px" />
            );
          }
        })}
      </div>

      <div className="game">
        {game_data.map((game) => {
          if (game.name === coach.game) {
            return (
              <img src={game.img} alt={game.name} key={game.id} width="50px" />
            );
          }
        })}
      </div>

      <div className="lanes">
        {lanes_data.map((lane) => {
          return coach.lanes.map((coachLane) => {
            if (lane.name.toLowerCase() === coachLane.toLowerCase()) {
              return (
                <img
                  src={lane.img}
                  alt={lane.name}
                  key={lane.id}
                  width="24px"
                />
              );
            }
          });
        })}
      </div>
      <div className="champions">
        {coach.champions.map((champion, i) => {
          return <span key={i}>{champion} </span>;
        })}
      </div>

      <span>{coach.recommended}</span>
      <button
        onClick={() => navigate(`/coaching/${coach._id}`)}
        className="order-btn"
      >
        Order
      </button>
    </div>
  );
};

export default CoachCard;
