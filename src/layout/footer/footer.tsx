import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-style-one">
      <div className="footer__top-wrap">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <div className="footer-logo logo">
                  <NavLink to="/">
                    <img src="/assets/img/logo/logo.png" alt="Logo" />
                  </NavLink>
                </div>
                <div className="footer-text">
                  <p className="desc">League of Legends and Teamfight Tactics are registered trademarks of Riot Games, Inc. We are not affiliated with or endorsed by Riot Games, Inc. in any way.</p>
                  {/* <p className="social-title">Active <span>With Us <i className="fas fa-angle-double-right"></i></span></p>
                  <div className="footer-social">
                    <NavLink to="#"><img src="/assets/img/icons/social_icon01.png" alt="iocn"/></NavLink>
                    <NavLink to="#"><img src="/assets/img/icons/social_icon02.png" alt="iocn"/></NavLink>
                    <NavLink to="#"><img src="/assets/img/icons/social_icon03.png" alt="iocn"/></NavLink>
                    <NavLink to="#"><img src="/assets/img/icons/social_icon04.png" alt="iocn"/></NavLink>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">Services</h4>
                <ul className="list-wrap menu">
                  <li><NavLink to="/calculator/lol">LoL boosting</NavLink></li>
                  <li><NavLink to="/calculator/TFT">TFT boosting</NavLink></li>
                  <li><NavLink to="/coaching">Coaching</NavLink></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">Quick Links</h4>
                <ul className="list-wrap menu">
                  <li><NavLink to="/about">About us</NavLink></li>
                  <li><NavLink to="/faq">Faq</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                  <li><NavLink to="https://discord.gg/Z3NHg66deV" target="_blank">Discord</NavLink></li>
                  <li><NavLink to="https://www.trustpilot.com/review/boosters-den.com" target="_blank">Reviews</NavLink></li>
                </ul>
              </div>
            </div>

            {/* <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">Supports</h4>
                <ul className="list-wrap menu">
                  <li><NavLink to="#">Setting & Privacy</NavLink></li>
                  <li><NavLink to="#">Help & Support</NavLink></li>
                  <li><NavLink to="#">Live Auctions</NavLink></li>
                  <li><NavLink to="#">Item Details</NavLink></li>
                  <li><NavLink to="#">24/7 Supports</NavLink></li>
                  <li><NavLink to="#">Our News</NavLink></li>
                </ul>
              </div>
            </div> */}

            {/* <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <h4 className="fw-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>
                  <form action="#" className="footer-newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit"><i className="flaticon-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="copyright__text">
                <p>
                  Copyright © {new Date().getFullYear()} - All Rights Reserved
                  By <span>Boosters DEN</span>
                </p>
              </div>
            </div>
            <div className="col-md-5"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
