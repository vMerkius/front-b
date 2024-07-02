import faq_data from "../../data/faq-data";
import FaqBox from "./faq-box";

const Faq = () => {
  return (
    <section className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="items">
        {faq_data.map((faq) => (
          <FaqBox key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
