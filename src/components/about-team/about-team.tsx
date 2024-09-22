const AboutTeam = () => {
  return (
    <section className="about-team">
      <div className="about-team__image">
        <img src="/assets/img/new-icons/friends.png" alt="team" width="150px" />
      </div>
      <div className="about-team__content">
        <h2 className="about-team__title">More about us</h2>
        <p className="about-team__text">
          At Boosters DEN, we’re a close-knit group of friends with over 10 years
          of gaming experience. We offer expert Boosting and Coaching Services
          for League of Legends, Teamfight Tactics. Every service
          is personally handled by a trusted member of our team, ensuring
          everything stays within our circle. For reliable, professional
          boosting or coaching{" "}
          <span className="about-team__text--trust">
            trust Boosters Den – trust a team of friends.
          </span>
        </p>
      </div>
    </section>
  );
};

export default AboutTeam;
