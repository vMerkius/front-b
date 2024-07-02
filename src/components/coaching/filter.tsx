import champions_data from "../../data/champions-data";
import game_data from "../../data/game-data";
import lanes_data from "../../data/lanes-data";
import language_data from "../../data/language-data";
import rank_filter_data from "../../data/rank-filter-data";
import { IFilter } from "../../types/filter-type";
import trash from "../../../public/assets/img/new-icons/trash2.svg";

type FilterProps = {
  filterOptions: IFilter;
  setFilterOptions: React.Dispatch<React.SetStateAction<IFilter>>;
};

const Filter: React.FC<FilterProps> = ({ filterOptions, setFilterOptions }) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.name, e.target.value);
    setFilterOptions({
      ...filterOptions,
      [e.target.name]: e.target.value,
    });
  };
  const changeLane = (lane: string) => {
    setFilterOptions({
      ...filterOptions,
      lane: lane,
    });
  };

  const changeGame = (game: string) => {
    setFilterOptions({
      ...filterOptions,
      game: game,
    });
  };

  const clearFilter = () => {
    setFilterOptions({
      name: "",
      game: "",
      rank: "",
      price: "",
      rating: "",
      lane: "",
      champion: "",
      language: "",
    });
  };
  return (
    <div className="filter">
      <div className="input-wrapper" style={{ width: "75%" }}>
        <div className="input-grp">
          <span className="input-title">Name</span>
          <input
            value={filterOptions.name}
            onChange={(e) =>
              setFilterOptions({ ...filterOptions, name: e.target.value })
            }
            name="search"
            id="search"
            type="search"
            placeholder="Coach name"
          />
        </div>
      </div>
      <div className="input-wrapper" style={{ width: "75%" }}>
        <span className="input-title">Game</span>
        <div className="filter-lanes">
          {game_data.map((game) => {
            return (
              <img
                src={game.img}
                alt={game.name}
                key={game.id}
                width="40px"
                onClick={() => changeGame(game.name)}
              />
            );
          })}
        </div>
      </div>
      <div className="input-wrapper">
        <span className="input-title">Lane</span>
        <div className="filter-lanes">
          {lanes_data.map((lane) => {
            return (
              <img
                src={lane.img}
                alt={lane.name}
                key={lane.id}
                width="24px"
                onClick={() => changeLane(lane.name)}
              />
            );
          })}
        </div>
      </div>

      <div className="input-wrapper">
        <span className="input-title">Price</span>
        <div className="price">
          <span>Lowest</span>

          <div
            className="check-box"
            onClick={() =>
              setFilterOptions({
                ...filterOptions,
                price: filterOptions.price === "lowest" ? "" : "lowest",
              })
            }
          >
            {filterOptions.price === "lowest" && <span>&#10003;</span>}
          </div>
        </div>
        <div className="price">
          <span>Highest</span>

          <div
            className="check-box"
            onClick={() =>
              setFilterOptions({
                ...filterOptions,
                price: filterOptions.price === "highest" ? "" : "highest",
              })
            }
          >
            {filterOptions.price === "highest" && <span>&#10003;</span>}
          </div>
        </div>
      </div>
      <div className="input-wrapper">
        <span className="input-title">Rating</span>
        <div className="price">
          <span>Lowest</span>

          <div
            className="check-box"
            onClick={() =>
              setFilterOptions({
                ...filterOptions,
                rating: filterOptions.rating === "lowest" ? "" : "lowest",
              })
            }
          >
            {filterOptions.rating === "lowest" && <span>&#10003;</span>}
          </div>
        </div>
        <div className="price">
          <span>Highest</span>

          <div
            className="check-box"
            onClick={() =>
              setFilterOptions({
                ...filterOptions,
                rating: filterOptions.rating === "highest" ? "" : "highest",
              })
            }
          >
            {filterOptions.rating === "highest" && <span>&#10003;</span>}
          </div>
        </div>
      </div>

      <div className="input-wrapper">
        <div className="input-grp region-select custom-select">
          <span className="input-title">Rank</span>
          <select name="rank" onChange={onChange}>
            {rank_filter_data.map((rank, index) => (
              <option key={index}>{rank.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="input-wrapper">
        <div className="input-grp region-select custom-select">
          <span className="input-title">Champion</span>
          <select name="champion" onChange={onChange}>
            {champions_data.map((champ, index) => (
              <option key={index}>{champ}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="input-wrapper">
        <div className="input-grp region-select custom-select">
          <span className="input-title">Language</span>
          <select name="language" onChange={onChange}>
            {language_data.map((lang, index) => (
              <option key={index}>{lang.name}</option>
            ))}
          </select>
        </div>
      </div>

      <button className="clear-btn" onClick={clearFilter}>
        <img src={trash} width="24px" />
      </button>
    </div>
  );
};

export default Filter;
