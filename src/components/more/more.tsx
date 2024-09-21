import { useState } from "react";
import Tags from "../tags/tags";
import storytags_data from "../../data/story-tags.data";
import Field from "./tag-field";

const More = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <section className="more">
      <div className="more__left">
        <img
          src="/assets/img/logo/logok.png"
          alt="Knight logo"
          width={"200px"}
        />
      </div>
      <div className="more__right">
        <h4 className="more__header-sm">discover BoostersDEN</h4>
        <h3 className="more__header">
          More about boosting and coaching universum
        </h3>
        <h5 className="more__title">&diams; The Legend of BoostersDen</h5>
        <p
          className={`more__paragraph ${
            isShowMore ? "more__paragraph--blur-gone" : ""
          }`}
        >
          In the vast digital realms where the champions of online games clash
          for glory, there emerged a knight—Sir Booster, a champion not bound by
          armor or swords, but by his unparalleled knowledge of games and his
          desire to help others rise to victory. Sir Booster was no ordinary
          player. He was a master in the craft of boosting, a service revered by
          those who sought to climb the ranks in competitive games like League
          of Legends (lol) and Teamfight Tactics (tft). His home and fortress?
          None other than BoostersDen, the ultimate destination for players
          looking to ascend through the ranks with the aid of the most skilled
          boosters in the land.
        </p>

        {!isShowMore && (
          <button
            onClick={() => setIsShowMore(!isShowMore)}
            className="submit-btn"
          >
            Show more
          </button>
        )}

        <div className={`more__show ${isShowMore ? "more__show--active" : ""}`}>
          <p className="more__paragraph--rest" style={{ marginBottom: "0" }}>
            BoostersDen was not just a simple service—it was a sanctuary, a
            place where aspiring players came to seek guidance from the best
            boosters in the industry. From elo boosting to coaching, Sir Booster
            led his league of champions, providing players with the means to
            achieve the success they yearned for in games that demanded
            strategic thinking, mechanical skill, and unwavering determination.
          </p>
          <span className="line"></span>

          <h5 className="more__title">
            &diams; The Boosters of BoostersDen: Champions in Training
          </h5>
          <p className="more__paragraph--rest">
            Much like any legendary figure, Sir Booster did not walk this path
            alone. He was accompanied by four talented students, each gifted
            with unique skills and destined to become great boosters in their
            own right. Sir Booster saw immense potential in each of them and
            took it upon himself to train them, ensuring that BoostersDen would
            always have a new generation of boosters ready to meet the demands
            of players seeking to climb the ranked ladders.
          </p>
          <ul>
            <li>
              <p className="more__paragraph--rest">
                Sera was the first to arrive at BoostersDen. She was young but
                sharp, with a tactical mind that allowed her to dominate the Mid
                Lane in LoL. Sera specialized in elo boosting, and her keen
                understanding of the game's mechanics helped her guide countless
                players to victory. Her journey was not only about winning games
                but about imparting her knowledge to others. Through coaching,
                Sera taught players how to think critically and anticipate the
                moves of their opponents.
              </p>
            </li>
            <li>
              <p className="more__paragraph--rest">
                Leon, the next student to join the ranks of BoostersDen, was a
                calm and composed individual. His mastery of TFT was
                unparalleled, making him the perfect candidate for TFT boosting.
                Leon was meticulous in his approach, analyzing every move on the
                board with precision. He offered TFT coaching, showing players
                how to draft champions, balance their economy, and outwit their
                opponents in the auto-battler format. His goal was to not only
                boost ranks but to ensure that each player he worked with
                understood the intricate strategies behind TFT.
              </p>
            </li>
            <li>
              <p className="more__paragraph--rest">
                Mila was bold, fierce, and always ready for battle. Her loyalty
                to the Support role in LoL made her a natural in the realm of
                duo boosting. No player had to face their ranked battles alone
                when Mila was by their side. Her ability to provide consistent,
                high-level gameplay as a Support meant that her clients could
                rely on her to keep them safe while they climbed the ladder.
                Mila also excelled at placement matches boosting, ensuring that
                her clients started each new season on the right foot.
              </p>
            </li>
            <li>
              <p className="more__paragraph--rest">
                Thorn was the last to join the BoostersDen quartet, but his
                impact was immediate. His aggressive playstyle in the AD Carry
                role made him an invaluable asset to the team. Thorn specialized
                in win boosting, guaranteeing victory for those who sought to
                reach higher ranks quickly. His mechanical skill and ability to
                carry games to victory earned him the title of the "Fierce
                Sharpshooter" among his peers. Like his fellow students, Thorn
                understood that boosting wasn’t just about winning—it was about
                doing so with integrity and mastery.
              </p>
            </li>
          </ul>
          <Field />
          <span className="line"></span>

          <h5 className="more__title">
            &diams; The Paths to Greatness: Choosing a Role in Boosting
          </h5>
          <p className="more__paragraph--rest">
            Sir Booster gathered his four students in the great hall of
            BoostersDen, much like a wise teacher preparing his students for
            their final exam. He stood before them, his presence commanding
            respect and attention, and said, "You all have chosen to walk the
            path of a booster, but this is only the beginning. In order to truly
            understand the art of boosting, you must first choose your role. Are
            you ready to rise through the ranks and help others achieve their
            goals in LoL and TFT?"
          </p>
          <p className="more__paragraph--rest">
            Each of the students nodded, prepared to embark on their chosen
            paths.
          </p>
          <p className="more__paragraph--rest">
            Sera, with her sharp mind and mastery of the Mid Lane, chose to
            focus on elo boosting in LoL. She wanted to show her clients that
            rank wasn’t just about winning—it was about understanding the game
            on a deeper level.
          </p>
          <p className="more__paragraph--rest">
            Leon, ever the strategist, dedicated himself to becoming the top TFT
            booster. He knew that helping players navigate the complex world of
            TFT required patience, strategy, and a calm mind. His ultimate goal
            was to offer TFT coaching that would turn even the most casual
            players into serious contenders.
          </p>
          <p className="more__paragraph--rest">
            Mila, always loyal and dedicated to teamwork, remained committed to
            duo boosting. She knew that her clients needed someone they could
            rely on, not just to win games but to stand by their side as they
            climbed the ranked ladder. Her goal was to help players achieve
            their desired ranks in both placement matches boosting and regular
            ranked games.
          </p>
          <p className="more__paragraph--rest">
            Thorn, ever the competitive one, chose the path of win boosting. His
            mechanical skills and ability to turn the tide of battle in his
            favor made him a natural fit for clients who needed that extra push
            to secure victory.
          </p>
          <p className="more__paragraph--rest" style={{ marginBottom: "0" }}>
            With their paths chosen, Sir Booster looked upon his students with
            pride. "You have made your decisions," he said. "Now it’s time for
            you to prove yourselves. In this world, a booster is not just a
            player—they are a guide, a mentor, and a champion for those who need
            it most."
          </p>
          <span className="line"></span>
          <h5 className="more__title">
            &diams; The BoostersDen Marketplace: A Hub for Boosting Services
          </h5>
          <p className="more__paragraph--rest">
            As the students began their journey to becoming the best boosters in
            the land, Sir Booster led them to the BoostersDen marketplace, a
            place where players from all over the world came to request boosting
            services. The marketplace was alive with activity, filled with
            players eager to improve their ranks in LoL and TFT.
          </p>
          <p className="more__paragraph--rest">
            The world of boosting expanded, with more players than ever before
            turning to BoostersDen to help them climb the ranks and achieve
            their goals. Sir Booster’s students—Sera, Leon, Mila, and
            Thorn—became legends in their own right, each one a master of their
            craft and a shining example of what it meant to be a true booster.
          </p>
          <p className="more__paragraph--rest">
            And so, the legend of Sir Booster and the knights of BoostersDen
            lives on. The world of boosting and coaching continues to evolve,
            but one thing remains constant: BoostersDen is where champions are
            made, and where those who seek greatness come to find it.
          </p>
          <span className="line"></span>

          <h5 className="more__title">
            &diams; The Final Chapter of Sir Booster's Legacy
          </h5>
          <p className="more__paragraph--rest">
            And so, the journey of Sir Booster and his students at BoostersDen
            reached new heights. As they continued to offer unparalleled
            boosting services in games like League of Legends and TFT, their
            legend spread far and wide across the digital world. Players from
            all corners came to BoostersDen, not just for a higher rank but to
            learn from the best, guided by the wisdom and experience of Sir
            Booster and his dedicated students.
          </p>
          <p className="more__paragraph--rest">
            Through their commitment to boosting, coaching, and uplifting
            players from every walk of life, Sir Booster’s vision of creating a
            realm where everyone could reach their full potential became a
            reality. The halls of BoostersDen continued to resonate with the
            echoes of victory, the thrill of teamwork, and the bonds formed
            through the shared pursuit of greatness.
          </p>
          <p className="more__paragraph--rest">
            As the world of competitive gaming evolved, one thing remained
            constant—BoostersDen stood as a beacon of excellence, where players
            could trust that their path to victory would always be guided by the
            most skilled and honorable boosters. Under the ever-watchful eye of
            Sir Booster, the legacy of boosting greatness lived on, inspiring
            future generations of players to not only climb the ranks but to
            help others rise as well.
          </p>
          <p className="more__paragraph--rest">
            For in the end, boosting wasn’t just about reaching the top—it was
            about the journey, the teamwork, and the unwavering belief that,
            together, any player could achieve their dreams.
          </p>
          <p className="more__paragraph--rest">
            And so, the tale of BoostersDen continues, with Sir Booster and his
            team forever at the forefront of a world where success is shared,
            and champions are made.
          </p>
          <Tags tags={storytags_data} />
        </div>
      </div>
    </section>
  );
};

export default More;
