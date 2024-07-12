import faq_data from "../../data/faq-data";
import faq_data_2 from "../../data/faq-data2";

import FaqBox from "./faq-box";

type FaqProps = {
  secondOption?: boolean;
};

const Faq: React.FC<FaqProps> = ({ secondOption }) => {
  return (
    <section
      className="faq-section"
      style={{ backgroundImage: "url(/assets/img/bg/tournament_bg.jpg" }}
    >
      <h1>Frequently Asked Questions</h1>
      <div className="items">
        {secondOption
          ? faq_data_2.map((faq) => (
              <FaqBox
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          : faq_data.map((faq) => (
              <FaqBox
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
      </div>
    </section>
  );
};

export default Faq;
