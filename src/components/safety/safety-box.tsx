import { ISafety } from "../../types/safety-type";

type SafetyBoxProps = {
  data: ISafety;
};

const SafetyBox: React.FC<SafetyBoxProps> = ({ data }) => {
  return (
    <div className="safety-box">
      <div className="safety-box__upper">
        <h3 className="safety-box__upper__header">{data.name}</h3>
      </div>
      <div className="safety-box__lower">
        <p>{data.description}</p>
      </div>
    </div>
  );
};
export default SafetyBox;
