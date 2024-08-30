import AboutDots from "../svg/about-dots";
import TextAnimation from "../common/text-animation";

const AboutAreaThree = () => {
  return (
    <section className="about__area-three section-pt-130 section-pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="about__title-wrap">
              <h2 className="title">
                <i>WE ARE</i>
                <span>boosters</span>
                <i>
                  ern <b>den</b>
                </i>
                <i>team</i>
              </h2>
              <div className="about__content-circle">
                <img src="/assets/img/icons/rocket.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="about__three-images">
              <img
                src="/assets/img/others/gracz1.jpg"
                alt="img"
                className="left"
              />
              <img
                src="/assets/img/others/gracz2.jpg"
                alt="img"
                className="right"
              />
              <div className="about__dots">
                <AboutDots />
              </div>
            </div>
            <div className="about__three-paragraph">
              <TextAnimation
                style_2={true}
                title="Welcome to our premier boosting and coaching service, where your gaming success is our top priority. We are a team of close friends with over 10 years of playing league of legends together reaching the highest rankings. We specialize in LoL Elo boosting and TFT Elo boosting, offering comprehensive rank boosting solutions for both League of Legends and Teamfight Tactics.

Our expert team delivers high-quality League of Legends Elo boosting and personalized coaching to elevate your gameplay. Whether you’re looking to climb the ranks or improve your skills, we provide tailored support to help you achieve your goals.

Join us today to experience top-notch boosting and coaching, and take your game to the next level with our professional assistance."
              />
            </div>
          </div>
        </div>
      </div>
      <h2 className="big-title">boosting</h2>
    </section>
  );
};

export default AboutAreaThree;
