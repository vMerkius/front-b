const boostOptions: {
  id: number;
  title: string;
}[] = [
  {
    id: 1,
    title: "Divisions",
  },
  {
    id: 2,
    title: "Net Wins",
  },
  {
    id: 3,
    title: "Placements",
  },
];

type CalcBarProps = {
  option: number;
  setOption: (option: number) => void;
};

const CalcBar: React.FC<CalcBarProps> = ({ option, setOption }) => {
  return (
    <div className="calc-bar">
      <div className="calc-bar__options">
        {boostOptions.map((boostOption) => (
          <div
            key={boostOption.id}
            className={`calc-bar__option ${
              option === boostOption.id ? "calc-bar__option--clicked" : ""
            }`}
            onClick={() => setOption(boostOption.id)}
          >
            <span>{boostOption.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CalcBar;
