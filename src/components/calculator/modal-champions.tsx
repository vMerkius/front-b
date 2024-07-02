import { IBoostOptions } from "../../types/boost-options";
import champions_data from "../../data/champions-data";
import ChampionTile from "./champion-tile";
import trash from "../../../public/assets/img/new-icons/trash.svg";

type ModalChampionsProps = {
  boostOptions: IBoostOptions;
  setBoostOptions: React.Dispatch<React.SetStateAction<IBoostOptions>>;
  setShowModalLanes: React.Dispatch<React.SetStateAction<boolean>>;
  champions: string[];
  setChampions: React.Dispatch<React.SetStateAction<string[]>>;
};

const ModalChampions: React.FC<ModalChampionsProps> = ({
  boostOptions,
  setBoostOptions,
  setShowModalLanes,
  champions,
  setChampions,
}) => {
  const handleCloseSearch = () => {
    setShowModalLanes(false);
  };
  const onChange = () => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const champion = e.target.value;
    if (champions.includes(champion)) {
      return;
    }
    setChampions([...champions, champion]);
    const champs = champions;
    champs.push(champion);
    setBoostOptions({
      ...boostOptions,
      champions: champs,
    });
  };
  const handleReset = () => {
    setChampions([]);
    setBoostOptions({
      ...boostOptions,
      champions: [],
    });
  };

  const handleChampionDelete = (champion: string) => {
    const newChampions = champions.filter((c) => c !== champion);
    setChampions(newChampions);
  };
  return (
    <div className="modal-calc">
      <div className="modal-calc__container">
        <div className="search__close" onClick={() => handleCloseSearch()}>
          <span>
            <i className="flaticon-swords-in-cross-arrangement"></i>
          </span>
        </div>
        <h2 style={{ color: "white" }}>Choose Champions</h2>
        <div className="select-wrapper">
          <select onChange={onChange()} name="champion">
            {champions_data.map((champion, index) => (
              <option key={index} value={champion}>
                {champion}
              </option>
            ))}
          </select>
          <button className="reset-btn" onClick={() => handleReset()}>
            <img src={trash} alt="reset all" width="20px" />
          </button>
        </div>
        {champions.length > 0 && (
          <div className="selected-champions">
            {champions.map((champion, index) => (
              <ChampionTile
                key={index}
                champion={champion}
                handleChampionDelete={handleChampionDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default ModalChampions;
