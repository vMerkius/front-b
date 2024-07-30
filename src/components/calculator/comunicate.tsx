import logo from "../../../public/assets/img/logo/logok.png";

const Comunicate = () => {
  return (
    <div
      className="rank-selection"
      style={{
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} width="70px" height="70px" />
          <h3
            style={{
              color: "#fff",
              fontSize: "24px",
              textAlign: "center",
            }}
          >
            We offer the most{" "}
            <span
              style={{
                color: "#45f882",
              }}
            >
              competitive prices
            </span>{" "}
            in the market.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Comunicate;
