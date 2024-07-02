import logo from "../../../public/assets/img/logo/logo.png";

const Loading = () => {
  return (
    <div className="loading">
      <div>
        <img src={logo} alt="logo" />
        <h6
          style={{
            color: "#fff",
            marginTop: "5px",
          }}
        >
          Loading...
        </h6>
      </div>
    </div>
  );
};

export default Loading;
