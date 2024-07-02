import { IBoostOptions } from "../../types/boost-options";
import Queue from "./queue";

interface SliderProps {
  placements: number;
  setPlacements: React.Dispatch<React.SetStateAction<number>>;
  boostOptions: IBoostOptions;
  setBoostOptions: React.Dispatch<React.SetStateAction<IBoostOptions>>;
}

const SliderPlacements: React.FC<SliderProps> = ({
  placements,
  setPlacements,
  boostOptions,
  setBoostOptions,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlacements(Number(event.target.value));
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
            choose how many placements you want
          </h6>
        </div>
        <div>
          <input
            type="range"
            min="1"
            max="5"
            value={placements}
            onChange={handleChange}
            className="slider"
            id="gameSlider"
          />
          <div
            style={{ marginBottom: "10px" }}
            className="d-flex justify-content-center align-content-center "
          >
            <label
              style={{ fontSize: "18px" }}
              htmlFor="gameSlider"
              className="font-size-14 m-0"
            >
              {placements} {placements === 1 ? "Game" : "Games"}
            </label>
          </div>
          <Queue
            boostOptions={boostOptions}
            setBoostOptions={setBoostOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderPlacements;
