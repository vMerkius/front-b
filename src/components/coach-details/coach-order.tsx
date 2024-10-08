import React, { useEffect, useState } from "react";
import minus from "../../../public/assets/img/new-icons/minus.svg";
import plus from "../../../public/assets/img/new-icons/plus.svg";
import { ICoach } from "../../types/coach-type";
import ErrorMsg from "../common/err-message";
import regions_data from "../../data/regions-data";
import { ICoachOrder } from "../../types/coach-order-type";
import { calculateCoachAPI, checkLoginStatus } from "../../server/server";
import axios from "axios";
import { IPrice } from "../../types/price-type";
import knight from "../../../public/assets/img/others/breadcrumb_img01.png";
import rank_data_full from "../../data/rank-data full";
import exclamation from "../../../public/assets/img/new-icons/exclamation.svg";
import { toast } from "react-toastify";

const URL = "https://back-b-kzfc.onrender.com";

type CoachOrderProps = {
  coach: ICoach;
};

const CoachOrder: React.FC<CoachOrderProps> = ({ coach }) => {
  const [result, setResult] = useState<IPrice>({
    price: 0,
    totalPrice: 0,
    discountFinal: 0,
  });
  const [orderOptions, setOrderOptions] = useState<ICoachOrder>({
    _id: coach._id,
    hours: 1,
    server: "EU-West",
    priority: false,
    discord: "",
  });

  const [error, setError] = React.useState<string>("");
  const [showDiscordInfo, setShowDiscordInfo] = useState<boolean>(false);

  const checkLoggedIn = async () => {
    const res = await checkLoginStatus();
    if (!res) {
      toast.error("Please login to continue");
      return false;
    } else {
      return true;
    }
  };
  const handleClick = (add: boolean) => {
    if (!add && orderOptions.hours - 1 < 1) {
      setError("Hours can't be less than 1");
      return;
    }
    if (add && orderOptions.hours + 1 > 7) {
      setError("Hours can't be more than 7");
      return;
    }
    setError("");
    const hours = add ? orderOptions.hours + 1 : orderOptions.hours - 1;
    setOrderOptions({
      ...orderOptions,
      hours: hours,
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderOptions({
      ...orderOptions,
      server: e.target.value,
    });
  };

  const handleOrder = async () => {
    if (!orderOptions.discord) {
      toast.error("Please enter your discord name");
      return;
    }
    try {
      const res = await axios.post(
        `${URL}/api/v1/orders/create-checkout-session`,
        orderOptions,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      window.location.href = res.data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleGetPrice = async () => {
    try {
      const res = await calculateCoachAPI(orderOptions);
      console.log(res);
      setResult(res.data);
    } catch (error) {
      console.error("Error during getting price:", error);
    }
  };

  useEffect(() => {
    handleGetPrice();
  }, [orderOptions]);
  return (
    <section
      className="coach-order"
      style={{ backgroundImage: "url(/assets/img/bg/team_bg.jpg)" }}
    >
      <div className="coach-order__container">
        <div className="buy-wrapper">
          <div className="details-section">
            <span className="name">{coach.name}</span>

            {rank_data_full.map((rank) => {
              if (rank.name === coach.rank) {
                return (
                  <div key={rank.id} className="rank">
                    <img src={rank.img} alt="rank icon" width="70px" />
                  </div>
                );
              }
            })}

            <div className="price">${coach.price}/hour</div>
          </div>
          <div className="result-section">
            <div className="input-wrapper">
              <div className="input-grp region-select custom-select">
                <span className="input-title">Server</span>
                <select name="server" onChange={onChange}>
                  {regions_data.map((region, index) => (
                    <option key={index}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="priority">
              <div
                className="check-box"
                onClick={() =>
                  setOrderOptions({
                    ...orderOptions,
                    priority: !orderOptions.priority,
                  })
                }
                style={{ color: "#45f882" }}
              >
                {orderOptions.priority === true && <span>&#10003;</span>}
              </div>

              <span className="input-title">Priority</span>
            </div>
          </div>
        </div>

        <div className="hours-section">
          <h6 className="d-flex justify-content-center align-content-center gap-2 font-size-12 m-0">
            hours
          </h6>
          <div className="hours">
            <button onClick={() => handleClick(false)} className="hours-btn">
              <img src={minus} alt="minus icon" />
            </button>
            <div className="hours-points">{orderOptions.hours}</div>
            <button onClick={() => handleClick(true)} className="hours-btn">
              <img src={plus} alt="plus icon" />
            </button>
          </div>

          {error && <ErrorMsg msg={error} />}
        </div>

        <div className="line"></div>
        <div className="total">
          <span>Total</span>
          {/* <span>${orderOptions.hours * coach.price}</span> */}
          <span>
            €{result.price}{" "}
            <span className="discount">{result.totalPrice}</span>
          </span>
        </div>
        <div
          className="btn-section"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "center",
              justifySelf: "flex-start",
              width: "100%",
            }}
          >
            <div
              className="input-disc"
              style={{
                display: "flex",
                alignSelf: "center",
                justifySelf: "flex-start",
                width: "60%",
              }}
            >
              <input
                onChange={(e) =>
                  setOrderOptions({ ...orderOptions, discord: e.target.value })
                }
                type="text"
                placeholder="discord name"
              ></input>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              <img
                onMouseEnter={() => setShowDiscordInfo(true)}
                onMouseLeave={() => setShowDiscordInfo(false)}
                src={exclamation}
                alt="exclamation"
                width="30px"
                style={{ cursor: "pointer" }}
              />
              {showDiscordInfo && (
                <div className="discord-info">
                  <span>
                    Please enter your discord name so we can contact you.
                  </span>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={async () => {
              if (await checkLoggedIn()) {
                handleOrder();
              }
            }}
            className="btn"
          >
            Checkout
          </button>
        </div>
      </div>
      <img src={knight} alt="logo" className="logok" height={"400px"} />
    </section>
  );
};

export default CoachOrder;
