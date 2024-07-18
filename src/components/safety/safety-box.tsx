import { ISafety } from "../../types/safety-type";
import vpn from "../../../public/assets/img/secure/vpn.png";
import protection from "../../../public/assets/img/secure/protection.png";
import verified from "../../../public/assets/img/secure/verified.png";

type SafetyBoxProps = {
  data: ISafety;
};

const SafetyBox: React.FC<SafetyBoxProps> = ({ data }) => {
  return (
    <div className="safety-box">
      <div className="safety-box__upper">
        {data.option === "vpn" && (
          <img
            src={vpn}
            alt="vpn"
            className="safety-box__upper__vpn"
            height="50px"
          />
        )}
        {data.option === "protection" && (
          <img
            src={protection}
            alt="protection"
            className="safety-box__upper__protection"
            height="50px"
          />
        )}
        {data.option === "verified" && (
          <img
            src={verified}
            alt="verified"
            className="safety-box__upper__verified"
            height="50px"
          />
        )}

        <h3 className="safety-box__upper__header">{data.name}</h3>
      </div>
      <div className="safety-box__lower">
        <p>{data.description}</p>
      </div>
    </div>
  );
};
export default SafetyBox;
