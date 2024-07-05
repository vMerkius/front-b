import lolImage from "../assets/img/thumb/lol.jpg";
import coachingImage from "../assets/img/thumb/coaching.png";
import tftImage from "../assets/img/thumb/tft.png";
import dotaImage from "../assets/img/thumb/dota.png";
import valorantImage from "../assets/img/thumb/valorant.png";
import cs2Image from "../assets/img/thumb/cs2.png";

const cardData = [
  {
    imageUrl: lolImage,
    gameName: "League of legends",
    url: "/calculator/lol",
    done: true,
  },
  {
    imageUrl: coachingImage,
    gameName: "Coaching",
    url: "/coaching",
    done: true,
  },
  {
    imageUrl: tftImage,
    gameName: "Teamfight Tactics",
    url: "/",
    done: false,
  },
  {
    imageUrl: dotaImage,
    gameName: "Dota 2",
    url: "/",
    done: false,
  },
  {
    imageUrl: valorantImage,
    gameName: "Valorant",
    url: "/",
    done: false,
  },
  {
    imageUrl: cs2Image,
    gameName: "CS2",
    url: "/",
    done: false,
  },
];

export default cardData;
