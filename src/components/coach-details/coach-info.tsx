import { ICoach } from "../../types/coach-type";
import lanes_data from "../../data/lanes-data";
import game_data from "../../data/game-data";
import star from "../../../public/assets/img/new-icons/star.svg";
import lanes from "../../../public/assets/img/lanes/lanes.png";
import rank_data_full from "../../data/rank-data full";

type CoachInfoProps = {
  coach: ICoach;
};

const CoachInfo: React.FC<CoachInfoProps> = ({ coach }) => (
  <section className="coaching-details__info-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="coaching-details__info-wrap">
            <div className="coaching-details__info-discord">
              <div
                className="about__content-circle"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <img src={info} alt="img" width="70px" /> */}
              </div>
              <div
                className="coaching-details__info-discord-info"
                style={{ maxWidth: "400px" }}
              >
                {coach.recommended && (
                  <div className="recommended">
                    <span className="top">TOP COACH</span>
                  </div>
                )}
                <span className="sub">About coach</span>
                <span className="description">{coach.description}</span>
                <span className="sub">Champions</span>
                <div className="champions">
                  {coach.champions.map((champion, index) => (
                    <span key={index} className="champion">
                      {champion}
                    </span>
                  ))}
                </div>

                <span className="rating">
                  <img src={star} width="17px" />
                  <span className="rating-number">{coach.rating}</span>
                </span>
              </div>
            </div>
            <div className="coaching-details__info-list">
              <ul className="list-wrap">
                <li>
                  <div className="coaching-details__info-item">
                    {rank_data_full.map((rank) => {
                      if (rank.name === coach.rank) {
                        return (
                          <img
                            src={rank.img}
                            alt={rank.name}
                            key={rank.id}
                            width="70px"
                          />
                        );
                      }
                    })}

                    <div className="coaching-details__info-content">
                      <span className="sub">Rank</span>
                      <h5 className="title">{coach.rank}</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="coaching-details__info-item">
                    {game_data.map((game) => {
                      if (game.name === coach.game) {
                        return (
                          <img
                            src={game.img}
                            alt={game.name}
                            key={game.id}
                            width="40px"
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                    <div className="coaching-details__info-content">
                      <span className="sub">Game</span>

                      <h5 className="title">{coach.game}</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="coaching-details__info-item">
                    <div className="coaching-details__info-icon">
                      <img src={lanes} alt="lanes" width="40px" />
                    </div>
                    <div className="coaching-details__info-content">
                      <span className="sub">Lanes</span>
                      {lanes_data.map((lane) => {
                        return coach.lanes.map((coachLane) => {
                          if (lane.name === coachLane.toLowerCase()) {
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
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CoachInfo;
