import { IBoostOptions } from "../../types/boost-options";
import lanes_data from "../../data/lanes-data";
import ErrorMsg from "../common/err-message";
import { useState } from "react";

type ModalLanesProps = {
  boostOptions: IBoostOptions;
  setBoostOptions: React.Dispatch<React.SetStateAction<IBoostOptions>>;
  setShowModalLanes: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalLanes: React.FC<ModalLanesProps> = ({
  boostOptions,
  setBoostOptions,
  setShowModalLanes,
}) => {
  const [showError, setShowError] = useState<boolean>(false);
  const handleClickLane = (name: string, isPrimary: boolean = true) => {
    if (
      (boostOptions.lane.primary === name && isPrimary === false) ||
      (boostOptions.lane.secondary === name && isPrimary === true)
    ) {
      setShowError(true);
      return;
    }
    setShowError(false);

    const key = isPrimary ? "primary" : "secondary";

    const newLaneSelection = boostOptions.lane[key] === name ? "" : name;

    const newLanes = {
      ...boostOptions.lane,
      [key]: newLaneSelection,
    };
    setBoostOptions({
      ...boostOptions,
      lane: newLanes,
    });
  };
  const handleCloseSearch = () => {
    setShowModalLanes(false);
  };

  return (
    <div className="modal-calc">
      <div className="modal-calc__container">
        <div className="search__close" onClick={() => handleCloseSearch()}>
          <span>
            <i className="flaticon-swords-in-cross-arrangement"></i>
          </span>
        </div>
        <h2 style={{ color: "white" }}>Choose lanes</h2>
        <div className="section">
          <h3 style={{ color: "white", fontSize: "20px" }}>Primary</h3>
          <div className="lanes">
            {lanes_data.map((lane) => (
              <div
                key={lane.id}
                className={`lane ${
                  boostOptions.lane.primary === lane.name ? "lane--chosen" : ""
                } `}
                onClick={() => handleClickLane(lane.name)}
              >
                <img src={lane.img} alt={lane.name} width="35px" />
              </div>
            ))}
          </div>
        </div>
        <div className="section">
          <h3 style={{ color: "white", fontSize: "20px" }}>Secondary</h3>
          <div className="lanes">
            {lanes_data.map((lane) => (
              <div
                key={lane.id}
                className={`lane ${
                  boostOptions.lane.secondary === lane.name
                    ? "lane--chosen"
                    : ""
                } `}
                onClick={() => {
                  handleClickLane(lane.name, false);
                  setShowModalLanes(false);
                }}
              >
                <img src={lane.img} alt={lane.name} width="35px" />
              </div>
            ))}
          </div>
        </div>
        {showError && <ErrorMsg msg="Selected lanes has to be different" />}
      </div>
    </div>
  );
};
export default ModalLanes;
