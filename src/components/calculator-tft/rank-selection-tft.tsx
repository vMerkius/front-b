import React from "react";
import Ranks from "../calculator/ranks";
import { IUserRank } from "../../types/user-rank";
import rank_data from "../../data/rank-data";
import ErrorMsg from "../common/err-message";
import regions_data from "../../data/regions-data";
import mmrs_data from "../../data/mmrs-data";
import lp_data from "../../data/lp-data";
import { IBoostTftOptions } from "../../types/boost-option-tft";

interface RankSelectionProps {
  rank: IUserRank;
  setRank: React.Dispatch<React.SetStateAction<IUserRank>>;
  userRank?: IUserRank;
  desired?: boolean;
  boostOptions: IBoostTftOptions;
  setBoostOptions: React.Dispatch<React.SetStateAction<IBoostTftOptions>>;
}

const RankSelectionTft: React.FC<RankSelectionProps> = ({
  rank,
  setRank,
  userRank,
  desired = false,
  boostOptions,
  setBoostOptions,
}) => {
  const [error, setError] = React.useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRank({ ...rank, [e.target.name]: e.target.value });
    console.log([e.target.name], e.target.value);
  };
  const onChangeMmrs = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBoostOptions({ ...boostOptions, [e.target.name]: e.target.value });
  };

  const onChangeLps = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) > 500) {
      setError("Max 500 LP");
      return;
    } else {
      setError("");
    }
    setRank({ ...rank, lp: e.target.value });
  };

  return (
    <div className="rank-selection">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {desired ? (
            <div>
              <div className="d-flex justify-content-center align-content-center gap-2">
                {rank_data.map(
                  (r, index) =>
                    r.name === rank.rank && (
                      <img src={r.img} width="45px" key={index} />
                    )
                )}
                <h2 className="m-0">Desired Rank</h2>
              </div>
              <h6 className="d-flex justify-content-center align-content-center gap-2 font-size-12 m-0">
                Select your desired rank and division
              </h6>
            </div>
          ) : (
            <div>
              <div className="d-flex justify-content-center align-content-center gap-2">
                {rank_data.map(
                  (r, index) =>
                    r.name === rank.rank && (
                      <img src={r.img} width="45px" key={index} />
                    )
                )}
                <h2 className="m-0">Current Rank</h2>
              </div>
              <h6 className="d-flex justify-content-center align-content-center gap-2 font-size-12 m-0">
                Select your current rank and division
              </h6>
            </div>
          )}
          <Ranks rank={rank} setRank={setRank} userRank={userRank} />
          <div className="d-flex flex-row justify-content-between">
            <div
              className="input-grp custom-select"
              style={{ alignSelf: "center", justifySelf: "center" }}
            >
              <div className="d-flex flex-column justify-content-center align-items-center">
                {rank.rank !== "Master" && (
                  <>
                    <span className="input-title">Current LP</span>

                    <select
                      className="custom-select"
                      onChange={onChange}
                      name="lp"
                    >
                      {lp_data.map((lp) => (
                        <option key={lp.id}>{lp.value}</option>
                      ))}
                    </select>
                  </>
                )}
                {rank.rank === "Master" && desired && (
                  <>
                    <span className="input-title">Desired LP</span>

                    <input
                      placeholder="LP's (max 500)"
                      onChange={onChangeLps}
                    />
                  </>
                )}
              </div>
            </div>

            {desired ? (
              <div
                className="input-grp region-select custom-select"
                style={{ alignSelf: "center", justifySelf: "center" }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <span className="input-title">Region</span>
                  <select onChange={onChange} name="region">
                    {regions_data.map((region, index) => (
                      <option key={index}>{region}</option>
                    ))}
                  </select>
                </div>
              </div>
            ) : (
              <div
                className="input-grp region-select custom-select"
                style={{ alignSelf: "center", justifySelf: "center" }}
              >
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <span className="input-title">LP gain</span>
                  <select onChange={onChangeMmrs} name="mmrs">
                    {mmrs_data.map((mmr) => (
                      <option key={mmr.id}>{mmr.value}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {error && <ErrorMsg msg="You can choose a maximum of 500 LP" />}
        </div>
      </div>
    </div>
  );
};

export default RankSelectionTft;
