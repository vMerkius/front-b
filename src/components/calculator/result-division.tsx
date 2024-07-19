import { IUserRank } from "../../types/user-rank";
import RankImg from "./rank-img";

type ResultDivisionProps = {
  rank: IUserRank;
  desired?: boolean;
};

const values = ["0-20LP", "20-40LP", "40-60LP", "60-80LP", "80-100LP"];

const ResultDivision: React.FC<ResultDivisionProps> = ({
  rank,
  desired = false,
}) => {
  return (
    <div className="rank-section" style={{ margin: 0 }}>
      <RankImg rank={rank} width="80px" />
      <span className="rank-section__name">
        <span>
          {rank.rank} {rank.rank !== "Master" ? rank.division : ""}
        </span>
        {rank.rank !== "Master" && <span>{rank.lp}</span>}
        {rank.rank === "Master" &&
          !values.includes(rank.lp) &&
          parseInt(rank.lp) > 0 && <span>{rank.lp}</span>}
      </span>
    </div>
  );
};
export default ResultDivision;
