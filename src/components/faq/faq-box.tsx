import { useState } from "react";
import arrowDown from "../../../public/assets/img/new-icons/arrow-down.svg";
import arrowUp from "../../../public/assets/img/new-icons/arrow-up.svg";

type FaqBoxProps = {
  question: string;
  answer: string;
};

const FaqBox: React.FC<FaqBoxProps> = ({ question, answer }) => {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="faq">
      <div
        onClick={() => {
          setShowDescription(!showDescription);
        }}
        className="faq__upper"
      >
        <h2>{question}</h2>

        <img src={!showDescription ? arrowDown : arrowUp} width="20px" />
      </div>
      <div
        className={`faq__lower ${showDescription ? "faq__lower__open" : ""}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};
export default FaqBox;
