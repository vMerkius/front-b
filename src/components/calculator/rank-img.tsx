import rank_data from "../../data/rank-data";
import { IUserRank } from "../../types/user-rank";

interface RankProps {
  rank: IUserRank;
  width: string;
}
const RankImg: React.FC<RankProps> = ({ rank, width }) => {
  return (
    <div className="single-rank">
      {rank_data.map(
        (r, index) =>
          r.name === rank.rank && (
            <img key={index} src={r.img} alt={r.name} width={width} />
          )
      )}
    </div>
  );
};

export default RankImg;
