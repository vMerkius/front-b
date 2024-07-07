import { useEffect, useState } from "react";
import { IUserRank } from "../../types/user-rank";
import rank_data from "../../data/rank-data";
import { IBoostTftOptions } from "../../types/boost-option-tft";
import ResultTft from "./result-tft";
import RankSelectionTft from "./rank-selection-tft";

const CalcTftWrapper = () => {
  const [boostOptions, setBoostOptions] = useState<IBoostTftOptions>({
    mmrs: "",
    additionalWin: false,
    streamed: false,
    chat: false,
    priority: false,
    discount: "",
  });

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
      style={{
        backgroundImage: "url(/assets/img/bg/match_bg.jpg",
        marginTop: "50px",
      }}
    >
      <div className="container">
        <div className="container__left">
          <div className="all-inputs container__left__selections">
            <>
              <RankSelectionTft
                rank={rankCurrent}
                setRank={setRankCurrent}
                boostOptions={boostOptions}
                setBoostOptions={setBoostOptions}
              />

              <RankSelectionTft
                rank={rankDesired}
                setRank={setRankDesired}
                userRank={rankCurrent}
                desired={true}
                boostOptions={boostOptions}
                setBoostOptions={setBoostOptions}
              />
            </>
          </div>
        </div>
        <div className="container__right">
          <ResultTft
            rankCurrent={rankCurrent}
            rankDesired={rankDesired}
            boostOptions={boostOptions}
            setBoostOptions={setBoostOptions}
            isPlacements={false}
            isNetWins={false}
          />
        </div>
      </div>
    </section>
  );
};
export default CalcTftWrapper;
