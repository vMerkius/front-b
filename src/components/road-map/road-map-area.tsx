import { useState } from "react";
import { InView } from "react-intersection-observer";
import useTextAnimation from "../../hooks/use-text-animation";
import { NavLink } from "react-router-dom";

// road map lists
type IRoadMap = {
  id: number;
  active: boolean;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};
const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    active: true,
    title: "step 1 - account creation",
    lists: [
      { active: true, text: "Register using your email" },
      { active: false, text: "Verify your email" },
      { active: false, text: "Sign in to your account" },
    ],
  },
  {
    id: 2,
    active: false,
    title: "step 2 - service selection",
    lists: [
      { active: false, text: "Check an offer that suits you" },
      { active: false, text: "Choose service from the list" },
      { active: false, text: "Select options for customization" },
    ],
  },
  {
    id: 3,
    active: false,
    title: "step 3 - payment & delivery",
    lists: [
      { active: false, text: "Calculate total cost" },
      { active: false, text: "Complete payment" },
      { active: false, text: "Wait and enjoy!" },
    ],
  },
];

const RoadMapArea = () => {
  const [isView, setIsView] = useState<boolean>(false);
  useTextAnimation(isView);

  const handleInViewChange = (inView: boolean) => {
    if (inView) {
      setIsView(true);
    }
  };

  return (
    <section
      className="roadMap__area roadMap-bg
       section-pt-150 section-pb-150
       "
      style={
        {
          // backgroundImage: `url(/assets/img/bg/roadmap_bg.jpg)`,
          // scale: "0.5",
        }
      }
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="roadMap__inner">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="roadMap__content">
                    <h2 className="title">a look into our service</h2>
                    <p>
                      As a new player in the market, we are transforming the LoL
                      boosting and coaching experience. With professional
                      coaches, top-notch boosting services, and 24/7 support, we
                      ensure your success and satisfaction.
                    </p>
                    <NavLink to="/faq" className="tg-btn-1 -btn-yellow">
                      <span>FaQ</span>
                    </NavLink>
                  </div>
                  <div className="roadMap__img">
                    <img
                      src="/assets/img/others/roadmap.jpg"
                      className="tg-parallax"
                      data-scale="1.5"
                      data-orientation="down"
                      alt="roadMap__img"
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="roadMap__steps-wrap">
                    {road_map_lists.map((item) => (
                      <div
                        key={item.id}
                        className={`roadMap__steps-item ${
                          item.active ? "active" : ""
                        }`}
                      >
                        <h3 className="title">{item.title}</h3>
                        <InView
                          as="ul"
                          onChange={handleInViewChange}
                          className="roadMap__list list-wrap"
                        >
                          {item.lists.map((l, i) => (
                            <li
                              key={i}
                              className={`${
                                l.active ? "active" : ""
                              } tg__animate-text style2`}
                            >
                              {l.text}
                            </li>
                          ))}
                        </InView>
                        <img
                          src="/assets/img/others/roadmap_img.png"
                          alt="img"
                          className="roadMap__steps-img"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapArea;
