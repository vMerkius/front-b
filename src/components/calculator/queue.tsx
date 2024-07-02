import { IBoostOptions } from "../../types/boost-options";

interface QueueProps {
  boostOptions: IBoostOptions | undefined;
  setBoostOptions:
    | React.Dispatch<React.SetStateAction<IBoostOptions>>
    | undefined;
}

const Queue: React.FC<QueueProps> = ({ boostOptions, setBoostOptions }) => {
  const handleChange = (value: string) => {
    if (!boostOptions) return;
    if (!setBoostOptions) return;
    setBoostOptions({ ...boostOptions, queue: value });
  };
  return (
    <div className="queue-wrapper">
      <span className=" queue-wrapper__title">Queue</span>

      <div className="queue">
        <div
          onClick={() => handleChange("solo/duo")}
          className={`queue__choice ${
            boostOptions?.queue === "solo/duo" ? "queue__choice--clicked" : ""
          }`}
        >
          <div className="check-box">
            {boostOptions?.queue === "solo/duo" && (
              <span className="sign">&#10003;</span>
            )}
          </div>
          <span>Solo/Duo</span>
        </div>
        <div
          onClick={() => handleChange("flex")}
          className={`queue__choice ${
            boostOptions?.queue === "flex" ? "queue__choice--clicked" : ""
          }`}
        >
          <div className="check-box">
            {boostOptions?.queue === "flex" && (
              <span className="sign">&#10003;</span>
            )}
          </div>
          <span>Flex</span>
        </div>
      </div>
    </div>
  );
};

export default Queue;
