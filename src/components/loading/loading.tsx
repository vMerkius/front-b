import logo from "../../../public/assets/img/logo/logo.png";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__container">
        <img src={logo} alt="logo" />
        <h6>Loading...</h6>
      </div>
    </div>
  );
};

export default Loading;
