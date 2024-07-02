import icon from "../../../public/assets/img/new-icons/x-icon.svg";

type ChampionTileProps = {
  champion: string;
  handleChampionDelete: (champion: string) => void;
  isInResult?: boolean;
};

const ChampionTile: React.FC<ChampionTileProps> = ({
  champion,
  handleChampionDelete,
  isInResult = false,
}) => {
  return (
    <div
      className={`champion-tile ${isInResult ? "champion-tile--inResult" : ""}`}
    >
      <span>{champion}</span>
      {!isInResult && (
        <img
          src={icon}
          alt="x-icon"
          width="20px"
          onClick={() => handleChampionDelete(champion)}
        />
      )}
    </div>
  );
};

export default ChampionTile;
