import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import menu_data from "../../data/menu-data";
import useSticky from "../../hooks/use-sticky";
import SvgIconCom from "../../components/common/svg-icon-anim";
import usericon from "../../../public/assets/img/new-icons/user-common.svg";
import arrowDown from "../../../public/assets/img/new-icons/arrow-down.svg";
import Details from "./details";
import { useAuth } from "../../context/auth-context";
import MobileOffCanvas from "../../components/common/mobile-offcanvas";

const Header = ({ style_2 = false }: { style_2?: boolean }) => {
  const { user } = useAuth();

  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [persistDetails, setPersistDetails] = useState(false);
  const { sticky, isStickyVisible } = useSticky();
  const [openMobileOffCanvas, setOpenMobileOffCanvas] =
    useState<boolean>(false);

  const location = useLocation();

  useState<boolean>(false);

  const handleMouseEnter = () => {
    if (!persistDetails) {
      setShowDetails(true);
    }
  };
  const handleMouseLeave = () => {
    if (!persistDetails) {
      setShowDetails(false);
    }
  };
  const handleClick = () => {
    setPersistDetails(!persistDetails);
    setShowDetails(!persistDetails);
  };

  const handleOpenMobileOffCanvas = () => {
    setOpenMobileOffCanvas(true);
  };
  return (
    <header>
      <div
        id="sticky-header"
        className={`tg-header__area transparent-header ${
          sticky ? "tg-sticky-menu" : ""
        } ${isStickyVisible ? "sticky-menu__show" : ""}`}
      >
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div
                className="mobile-nav-toggler"
                onClick={() => handleOpenMobileOffCanvas()}
              >
                <i className="fas fa-bars"></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <NavLink to="/">
                      <img src="/assets/img/logo/logo.png" alt="Logo" />
                    </NavLink>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                    <ul className="navigation">
                      {menu_data.map((menu) =>
                        menu.sub_menu ? (
                          <li
                            key={menu.id}
                            className={`menu-item ${
                              menu.sub_menu &&
                              menu.sub_menu.some(
                                (sub) => location.pathname === sub.link
                              )
                                ? "menu-item-has-children active"
                                : ""
                            }`}
                          >
                            <NavLink to="#">{menu.title}</NavLink>
                            <ul className="sub-menu">
                              {menu.sub_menu.map((sub, i) => (
                                <li
                                  key={i}
                                  className={
                                    location.pathname === sub.link
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <NavLink to={sub.link}>{sub.title}</NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li
                            key={menu.id}
                            className={
                              location.pathname === menu.link ? "active" : ""
                            }
                          >
                            <NavLink to={menu.link}>{menu.title}</NavLink>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="tgmenu__action d-none d-md-block">
                    <ul className="list-wrap">
                      <li className="header-btn">
                        <NavLink
                          to="https://www.trustpilot.com/review/boosters-den.com"
                          className="tg-btn-3 tg-svg"
                          target="_blank"
                        >
                          <SvgIconCom
                            icon={"/assets/img/icons/shape02.svg"}
                            id="svg-2"
                          />
                          <img src="/assets/img/new-icons/stars.svg" />
                        </NavLink>
                      </li>
                      <li className="header-btn">
                        {user ? (
                          <>
                            <button
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              onClick={handleClick}
                              className={`${"tg-btn-3 tg-svg"}`}
                            >
                              <SvgIconCom
                                icon={"/assets/img/icons/shape02.svg"}
                                id="svg-2"
                              />
                              <div
                                className="d-flex"
                                style={{ height: "100%" }}
                              >
                                <img src={usericon} alt="user" width="20px" />

                                <div className="d-flex gap-2">
                                  <span>{user.name}</span>

                                  <img
                                    src={arrowDown}
                                    alt="arrow"
                                    width="12px"
                                  />
                                </div>
                              </div>
                            </button>
                            {showDetails && (
                              <Details nick={user.name} id={user._id} />
                            )}
                          </>
                        ) : (
                          <NavLink
                            to="/login"
                            className={`${
                              style_2 ? "tg-btn-3 tg-svg" : "tg-border-btn"
                            }`}
                          >
                            {style_2 && (
                              <SvgIconCom
                                icon={"/assets/img/icons/shape02.svg"}
                                id="svg-2"
                              />
                            )}
                            <i className="flaticon-edit"></i> sign in
                          </NavLink>
                        )}
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileOffCanvas
        openMobileOffCanvas={openMobileOffCanvas}
        setOpenMobileOffCanvas={setOpenMobileOffCanvas}
      />
    </header>
  );
};

export default Header;
