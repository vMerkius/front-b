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
                title="Welcome to our boosting and coaching service, where your gaming success is our priority. Our expert team ensures top-notch performance and personalized coaching. Join us and elevate your game to the next level with our professional support."
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
