import rank_data from "../../data/rank-data";
import regions_data from "../../data/regions-data";
import { IUserRank } from "../../types/user-rank";
import Ranks from "./ranks";

interface PlacementsProps {
  rank: IUserRank;
  setRank: React.Dispatch<React.SetStateAction<IUserRank>>;
}
const Placements: React.FC<PlacementsProps> = ({ rank, setRank }) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRank({ ...rank, [e.target.name]: e.target.value });
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
          <div>
            <div className="d-flex justify-content-center align-content-center gap-2">
              {rank_data.map(
                (r, index) =>
                  r.name === rank.rank && (
                    <img src={r.img} width="45px" key={index} />
                  )
              )}
              <h2 className="m-0">Previous Rank</h2>
            </div>
            <h6 className="d-flex justify-content-center align-content-center gap-2 font-size-12 m-0">
              Select your last ranked division
            </h6>
          </div>

          <Ranks rank={rank} setRank={setRank} />
          <div className="d-flex flex-row-reverse">
            <div className="input-grp region-select custom-select">
              <select onChange={onChange} name="region">
                {regions_data.map((region, index) => (
                  <option key={index}>{region}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Placements;
