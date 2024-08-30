import { useState } from "react";
import { NavLink } from "react-router-dom";

// service images
const service_images = [
  "/assets/img/others/service01.jpg",
  "/assets/img/others/service02.jpg",
  "/assets/img/others/service01.jpg",
  "/assets/img/others/service02.jpg",
];
const service_items: {
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id: 1,
    icon: "flaticon-diamond",
    title: "New to the Market",
    desc: "We are boosters den - a startup entering the market, ready to revolutionize lol and tft rank boosting and coaching services with our fresh approach and dedication.",
  },
  {
    id: 2,
    icon: "flaticon-user-profile",
    title: "Expert Coaches",
    desc: "Our professional boosters den coaches are the best players who provide personalized coaching sessions which will make your ranking elo skyrocket. All sessions are tailored to your needs.",
  },
  {
    id: 3,
    icon: "flaticon-ethereum",
    title: "Top Boosting Service",
    desc: "We offer the best lol and tft rank boosting services with unmatched efficiency and security. ",
  },
  {
    id: 4,
    icon: "flaticon-settings-1",
    title: "Customer Support",
    desc: "Our 24/7 boosters den customer support ensures you have a seamless and enjoyable experience with our services.",
  },
];

const ServicesArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="services-area services__bg-color section-pt-120 section-pb-120">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="section__title text-start mb-65">
              <span className="sub-title tg__animate-text">
                Boosters Den services
              </span>
              <h3 className="title">
                UNMATCHED ELO/RANK BOOSTING AND COACHING
              </h3>
            </div>
            <div className="services__wrapper">
              {service_items.map((item, i) => (
                <div
                  key={item.id}
                  className="services__item"
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseOut={() => handleMouseOut(i)}
                >
                  <div className="services__icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="services__content">
                    <h4 className="title">{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services__images">
              {service_images.map((s, i) => (
                <div
                  key={i}
                  className={`services__images-item ${
                    activeIndex === i ? "active" : ""
                  }`}
                >
                  <img src={s} alt="img" />
                  <NavLink to="/calculator/lol" className="services__link">
                    <i className="flaticon-next"></i>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
