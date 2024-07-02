type PercentTileProps = {
  name: string;
};

const PercentTile: React.FC<PercentTileProps> = ({ name }) => {
  return (
    <div
      className={`${name === "FREE" ? "percent-tile--free" : ""} percent-tile`}
    >
      <span>{name}</span>
    </div>
  );
};

export default PercentTile;
