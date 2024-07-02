import { NavLink } from "react-router-dom";
import ContactForm from "../forms/contact-form";

const ContactArea = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="contact__content">
              <h2 className="overlay-title">
                <span>join us</span>
              </h2>
              <h2 className="title">CONTACT US</h2>
              <p>
                Feel free to contact us for any query or information. We are
                here to help you.
              </p>
              <div className="footer-el-widget">
                <h4 className="title">BoostersDEN</h4>
                <ul className="list-wrap">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Discord</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="contact__form-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
