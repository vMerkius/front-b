import { NavLink } from "react-router-dom";
// import around from "../../../public/assets/img/team/around.png";

// props type
type IProps = {
  bg?: string;
  brd_img?: string;
  title: string;
  subtitle: string;
  isCoach?: boolean;
};
const BreadcrumbArea = ({ bg, brd_img, title, subtitle, isCoach }: IProps) => {
  if (!bg) bg = "/assets/img/bg/breadcrumb_bg01.jpg";
  if (!brd_img) brd_img = "/assets/img/others/breadcrumb_img01.png";
  return (
    <section
      className="breadcrumb-area"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="breadcrumb__wrapper">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="breadcrumb__content">
                <h2 className="title">{title}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {subtitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 position-relative d-none d-lg-block">
              <div className="breadcrumb__img">
                {/* {isCoach && (
                  <img className="around-img" src={around} alt="img" />
                )} */}
                <img
                  src={brd_img}
                  alt="img"
                  style={{
                    borderRadius: isCoach ? "50%" : "",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbArea;
