import { useEffect, useState } from "react";
import CalcBar from "./calc-bar";
import Result from "./result";
import { IUserRank } from "../../types/user-rank";
import { IBoostOptions } from "../../types/boost-options";
import rank_data from "../../data/rank-data";
import RankSelection from "./rank-selection";
import NetWins from "./net-wins";
import Placements from "./placements";
import SliderPlacements from "./slider";
import FaqBox from "../faq/faq-box";
import Comunicate from "./comunicate";

const CalcWrapper = () => {
  const [boostType, setBoostType] = useState<number>(1);
  const [boostOptions, setBoostOptions] = useState<IBoostOptions>({
    mmrs: "15-19 LP",
    solo: true,
    lane: {
      primary: "",
      secondary: "",
    },
    champions: [],
    additionalWin: false,
    streamed: false,
    chat: false,
    flash: "",
    priority: false,
    queue: "solo/duo",
    discount: "",
    discord: "",
  });

  const [netWins, setNetWins] = useState<number>(1);
  const [placements, setPlacements] = useState<number>(1);

  const [rankCurrent, setRankCurrent] = useState<IUserRank>({
    rank: "Platinum",
    division: "I",
    lp: "0-20LP",
  });
  const [rankDesired, setRankDesired] = useState<IUserRank>({
    rank: "Diamond",
    division: "I",
    lp: "0-20LP",
  });
  const userRankId =
    rank_data.findIndex((r) => r.name === rankCurrent.rank) + 1;
  const desiredId = rank_data.findIndex((r) => r.name === rankDesired.rank) + 1;

  useEffect(() => {
    if (
      desiredId < userRankId ||
      (desiredId === userRankId && rankDesired.division > rankCurrent.division)
    ) {
      setRankDesired({
        rank: rankCurrent.rank,
        division: rankCurrent.division,
        lp: rankCurrent.lp,
      });
    }
  }, [rankCurrent, rankDesired]);

  return (
    <section
      className="calculator-area"
      style={{ backgroundImage: "url(/assets/img/bg/match_bg.jpg" }}
    >
      <CalcBar option={boostType} setOption={setBoostType} />
      <div className="container">
        <div className="container__left">
          <div className="all-inputs container__left__selections">
            {boostType === 1 && (
              <>
                <RankSelection
                  rank={rankCurrent}
                  setRank={setRankCurrent}
                  boostOptions={boostOptions}
                  setBoostOptions={setBoostOptions}
                />

                <RankSelection
                  rank={rankDesired}
                  setRank={setRankDesired}
                  userRank={rankCurrent}
                  desired={true}
                  boostOptions={boostOptions}
                  setBoostOptions={setBoostOptions}
                />
              </>
            )}
            {boostType === 2 && (
              <>
                <RankSelection
                  rank={rankCurrent}
                  setRank={setRankCurrent}
                  boostOptions={boostOptions}
                  setBoostOptions={setBoostOptions}
                />
                <NetWins
                  netWins={netWins}
                  setNetWins={setNetWins}
                  boostOptions={boostOptions}
                  setBoostOptions={setBoostOptions}
                />
                <FaqBox question={"What are net wins"} answer="It is " />
              </>
            )}
            {boostType === 3 && (
              <>
                <Placements rank={rankCurrent} setRank={setRankCurrent} />

                <SliderPlacements
                  placements={placements}
                  setPlacements={setPlacements}
                  boostOptions={boostOptions}
                  setBoostOptions={setBoostOptions}
                />
              </>
            )}
          </div>
        </div>
        <div className="container__right">
          {boostType === 1 && (
            <Result
              rankCurrent={rankCurrent}
              rankDesired={rankDesired}
              boostOptions={boostOptions}
              setBoostOptions={setBoostOptions}
              isPlacements={false}
              isNetWins={false}
            />
          )}
          {boostType === 2 && (
            <Result
              rankCurrent={rankCurrent}
              rankDesired={rankDesired}
              boostOptions={boostOptions}
              setBoostOptions={setBoostOptions}
              isPlacements={false}
              isNetWins={true}
              netWins={netWins}
            />
          )}
          {boostType === 3 && (
            <Result
              rankCurrent={rankCurrent}
              rankDesired={rankDesired}
              boostOptions={boostOptions}
              setBoostOptions={setBoostOptions}
              isPlacements={true}
              isNetWins={false}
              placements={placements}
            />
          )}
          <Comunicate />
        </div>
      </div>
    </section>
  );
};
export default CalcWrapper;
