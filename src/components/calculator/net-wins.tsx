import React, { useState } from "react";
import minus from "../../../public/assets/img/new-icons/minus.svg";
import plus from "../../../public/assets/img/new-icons/plus.svg";
import ErrorMsg from "../common/err-message";
import Queue from "./queue";
import { IBoostOptions } from "../../types/boost-options";

type NetWinsProps = {
  netWins: number;
  setNetWins: (netWins: number) => void;
  boostOptions: IBoostOptions;
  setBoostOptions: React.Dispatch<React.SetStateAction<IBoostOptions>>;
};

const NetWins: React.FC<NetWinsProps> = ({
  netWins,
  setNetWins,
  boostOptions,
  setBoostOptions,
}) => {
  const [showErrorLess, setShowErrorLess] = useState<boolean>(false);
  const [showErrorMore, setShowErrorMore] = useState<boolean>(false);

  const handleClick = (add: boolean) => {
    if (!add && netWins - 1 < 1) {
      setShowErrorLess(true);
      return;
    }
    if (add && netWins + 1 > 7) {
      setShowErrorMore(true);
      return;
    }
    setShowErrorMore(false);
    setShowErrorLess(false);
    setNetWins(add ? netWins + 1 : netWins - 1);
  };

  return (
    <div className="rank-selection">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <div className="d-flex justify-content-center align-content-center gap-2">
            <h2 className="m-0">Wins</h2>
          </div>
          <h6 className="d-flex justify-content-center align-content-center gap-2 font-size-12 m-0">
            choose how many net winnings you want
          </h6>
        </div>
        <div className="net-section">
          <button onClick={() => handleClick(false)} className="net-btn">
            <img src={minus} alt="minus icon" />
          </button>
          <div className="net-points">{netWins}</div>
          <button onClick={() => handleClick(true)} className="net-btn">
            <img src={plus} alt="plus icon" />
          </button>
        </div>
        <Queue boostOptions={boostOptions} setBoostOptions={setBoostOptions} />
        {(showErrorLess || showErrorMore) && (
          <div
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {showErrorMore && <ErrorMsg msg="Maximum is 7" />}
            {showErrorLess && <ErrorMsg msg="Minimum is 1" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default NetWins;
