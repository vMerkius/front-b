import safety_data from "../../data/safety-data";
import SafetyBox from "./safety-box";

const Safety = () => {
  return (
    <section
      className="safety-section"
      style={{ backgroundImage: "url(/assets/img/bg/tournament_bg.jpg" }}
    >
      <div className="desc">
        <h2>Our security features</h2>
        <p>
          We ensure top-level security to keep your account safe and protected
          at all times.
        </p>
      </div>

      <div className="items">
        {safety_data.map((safety) => (
          <SafetyBox key={safety.id} data={safety} />
        ))}
      </div>
    </section>
  );
};

export default Safety;
