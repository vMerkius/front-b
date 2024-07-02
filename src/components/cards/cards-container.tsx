import React from "react";
import GameCard from "./game-card";
import card_data from "../../data/card_data";

const CardsContainer: React.FC = () => {
  // const gameCards = [
  //   {
  //     imageUrl: "../../../public/assets/img/gallery/gallery01.jpg",
  //     gameName: "League of legends",
  //     url: "/calculator/lol",
  //     done: true,
  //   },
  //   {
  //     imageUrl: "../../../public/assets/img/gallery/gallery01.jpg",
  //     gameName: "Coaching",
  //     url: "/coaching",
  //     done: true,
  //   },
  //   {
  //     imageUrl: "../../../public/assets/img/gallery/gallery01.jpg",
  //     gameName: "Teamfight Tactics",
  //     url: "/",
  //     done: false,
  //   },
  //   {
  //     imageUrl: "../../../public/assets/img/gallery/gallery01.jpg",
  //     gameName: "Dota 2",
  //     url: "/",
  //     done: false,
  //   },
  //   {
  //     imageUrl: "../../../public/assets/img/gallery/gallery01.jpg",
  //     gameName: "Valorant",
  //     url: "/",
  //     done: false,
  //   },
  //   {
  //     imageUrl: "../../../public/assets/img/gallery/gallery01.jpg",
  //     gameName: "CS2",
  //     url: "/",
  //     done: false,
  //   },
  // ];

  return (
    <section className="game-card__area">
      <div
        className="game-card__bg"
        style={{ backgroundImage: `url(/assets/img/bg/result_bg.png)` }}
      ></div>
      <div
        className="container custom-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "48px",
            color: "#fff",
          }}
        >
          Services
        </h2>

        <div className="row justify-content-center">
          {card_data.map((card, index) => (
            <GameCard key={index} cardData={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsContainer;
