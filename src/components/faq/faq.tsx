import { IFaq } from "../../types/faq-type";

import FaqBox from "./faq-box";

type FaqProps = {
  faq_data: IFaq[];
};

const Faq: React.FC<FaqProps> = ({ faq_data }) => {
  return (
    <section
      className="faq-section"
      style={{ backgroundImage: "url(/assets/img/bg/team_bg.jpg" }}
    >
      <h2>Frequently Asked Questions</h2>
      <div className="items">
        {faq_data.map((faq: IFaq) => (
          <FaqBox key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
