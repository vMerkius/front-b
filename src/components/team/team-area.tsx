import { useEffect, useState } from "react";
import TextAnimation from "../common/text-animation";
import { NavLink } from "react-router-dom";
import { getRecommendedAPI } from "../../server/server";
import { ICoach } from "../../types/coach-type";
import logoTmp from "/assets/img/team/team01.png";

const TeamArea = () => {
  const [team, setTeam] = useState<ICoach[]>([]);
  const fetchTeam = async () => {
    const response = await getRecommendedAPI();
    console.log(response);
    setTeam(response.data.responseCoaches);
  };
  useEffect(() => {
    fetchTeam();
  }, []);
  return (
    <section
      className="team__area team-bg section-pt-130 section-pb-100"
      style={{ backgroundImage: `url(/assets/img/bg/team_bg.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-60">
              <TextAnimation title="our team member" />
              <h3 className="title">RECOMMENDED COACHES</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {team.map((t, i) => (
            <div
              key={t._id}
              className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay={`.${i + 1}s`}
            >
              <div className="team__item">
                <div className="team__thumb">
                  <NavLink to={`/coaching/${t._id}`}>
                    {/* gdy bedzie w bazie img to do zmiany */}
                    {/* <img src={t.img} alt="img" /> */}

                    {t.imageUrl ? (
                      <img src={t.imageUrl} alt="img" />
                    ) : (
                      <img src={logoTmp} alt="img" />
                    )}
                  </NavLink>
                </div>
                <div className="team__content">
                  <h4 className="name">
                    <NavLink to={`/coaching/${t._id}`}>{t.name}</NavLink>
                  </h4>
                  <span className="designation">Coach</span>
                  {/* gdy bedziemy pboierac jeszcze Boosterow to zmienic */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamArea;
