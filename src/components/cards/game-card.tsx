import React from "react";
import { IGameCard } from "../../types/game-card";
import { NavLink, useNavigate } from "react-router-dom";

type GameCardProps = {
  cardData: IGameCard;
  index: number;
};

const GameCard: React.FC<GameCardProps> = ({ cardData, index }) => {
  const navigate = useNavigate();
  const boxClass = `game-card__box ${
    index % 3 === 1 ? "game-card__box__middle" : ""
  } 
  ${!cardData.done ? "game-card__coming-soon" : ""}
  ${cardData.done ? "game-card__box__done" : ""}
  `;
  const nameClass =
    index % 3 === 1
      ? "game-card__box__name game-card__box__name__middle"
      : "game-card__box__name";

  return (
    <div className={boxClass}>
      <div className="game-card__box__thumb">
        <img
          src={cardData.imageUrl}
          alt="img"
          onClick={() => navigate(`${cardData.url}`)}
        />
        <h3 className={nameClass}>
          {/* <NavLink to={`/calculator/${cardData.gameName}`}>{cardData.gameName}</NavLink> */}
          <NavLink to={`${cardData.url}`}>{cardData.gameName}</NavLink>
        </h3>
      </div>
    </div>
  );
};

export default GameCard;
