import rank_data from "../../data/rank-data";
import { IUserRank } from "../../types/user-rank";

interface RanksProps {
  rank: IUserRank;
  setRank: React.Dispatch<React.SetStateAction<IUserRank>>;
  userRank?: IUserRank;
}

const divisions = [
  { id: 1, name: "IV" },
  {
    id: 2,
    name: "III",
  },
  {
    id: 3,
    name: "II",
  },
  {
    id: 4,
    name: "I",
  },
];
const Ranks: React.FC<RanksProps> = ({ rank, setRank, userRank }) => {
  const handleClickRank = (name: string, id: number) => {
    if (id < userRankId) return;
    setRank({ ...rank, rank: name });
    if (name === "Master") {
      setRank({ ...rank, rank: name, division: "I", lp: "0" });
    }
  };
  const handleClickDivison = (name: string, id: number) => {
    if (desiredId === userRankId && userRankDivId >= id) return;
    setRank({ ...rank, division: name });
  };
  const userRankId = rank_data.findIndex((r) => r.name === userRank?.rank) + 1;
  const userRankDivId =
    divisions.findIndex((d) => d.name === userRank?.division) + 1;
  const desiredId = rank_data.findIndex((r) => r.name === rank.rank) + 1;
  return (
    <div className="ranks-wrap">
      <div className="ranks-imgs">
        {rank_data.map((r) => (
          <div
            key={r.id}
            className="rank-box"
            onClick={() => handleClickRank(r.name, r.id)}
          >
            <img
              src={r.img}
              alt={r.name}
              className={`rank-box__division ${
                rank.rank === r.name ? "rank-box__division--chosen" : ""
              } 
              ${r.id < userRankId ? "rank-box__division--disabled" : ""}
              
              `}
            />
          </div>
        ))}
      </div>
      <div className="ranks-imgs">
        {rank.rank !== "Master" && (
          <>
            {divisions.map((d) => (
              <div
                key={d.id}
                className={`rank-box rank-box__division ${
                  rank.division === d.name ? "rank-box__division--chosen" : ""
                }
                ${
                  desiredId === userRankId
                    ? userRankDivId >= d.id
                      ? "rank-box__division--disabled"
                      : ""
                    : ""
                }
                `}
                onClick={() => handleClickDivison(d.name, d.id)}
              >
                {d.name}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Ranks;
