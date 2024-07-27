import { IUserRank } from "../../types/user-rank";
import ResultDivision from "./result-division";
import { IBoostOptions } from "../../types/boost-options";
import ModalLanes from "./modal-lanes";
import { useEffect, useState } from "react";
import ModalChampions from "./modal-champions";
import PercentTile from "./percent-tile";
import edit from "../../../public/assets/img/new-icons/edit.svg";
import time from "../../../public/assets/img/new-icons/time.svg";
import lanes_data from "../../data/lanes-data";
import ModalFlash from "./modal-flash";
import CheckBox from "./check-box";
import { IBoostChoices } from "../../types/boost-choices";
import ChampionTile from "./champion-tile";
import RankImg from "./rank-img";
import settingsIcon from "../../../public/assets/img/new-icons/settings.svg";
import { IOrder } from "../../types/order-type";
import {
  calculateAPI,
  checkDiscountAPI,
  checkLoginStatus,
} from "../../server/server";
import { useNavigate } from "react-router-dom";
import { IResult } from "../../types/result-type";
import axios from "axios";
import { toast } from "react-toastify";
import exclamation from "../../../public/assets/img/new-icons/exclamation.svg";
const URL = "https://back-b-kzfc.onrender.com";

type ResultProps = {
  rankCurrent: IUserRank;
  rankDesired: IUserRank;
  boostOptions: IBoostOptions;
  setBoostOptions: React.Dispatch<React.SetStateAction<IBoostOptions>>;
  isPlacements: boolean;
  placements?: number;
  isNetWins: boolean;
  netWins?: number;
};

const Result: React.FC<ResultProps> = ({
  rankCurrent,
  rankDesired,
  boostOptions,
  setBoostOptions,
  isPlacements,
  placements,
  isNetWins,
  netWins,
}) => {
  const navigate = useNavigate();
  const [result, setResult] = useState<IResult>({
    price: 0,
    totalPrice: 0,
    discount: 0,
    estimated: "",
  });
  const [showModalLanes, setShowModalLanes] = useState<boolean>(false);
  const [showDiscordInfo, setShowDiscordInfo] = useState<boolean>(false);
  const [showModalChampion, setShowModalChampion] = useState<boolean>(false);
  const [showModalFlash, setShowModalFlash] = useState<boolean>(false);
  const [champions, setChampions] = useState<string[]>([]);
  const [boostChoices, setBoostChoices] = useState<IBoostChoices>({
    solo: false,
    lane: false,
    champions: false,
    additionalWin: false,
    streamed: false,
    chat: false,
    flash: true,
    priority: false,
  });
  const [calculate, setCalculate] = useState<boolean>(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  useEffect(() => {
    setCalculate(false);
    setResult({ price: 0, totalPrice: 0, discount: 0, estimated: "" });
  }, [
    boostOptions,
    boostChoices,
    rankCurrent,
    rankDesired,
    placements,
    netWins,
  ]);

  const handleSoloOrDuo = (isSolo: boolean) => {
    setBoostOptions({ ...boostOptions, solo: isSolo });
  };

  const checkLoggedIn = async () => {
    const res = await checkLoginStatus();
    console.log(res);
    if (res.status === "success") {
      return true;
    } else {
      navigate("/login");
      return false;
    }
  };

  const handleCalculate = async () => {
    setShowModalChampion(false);
    setShowModalFlash(false);
    setShowModalLanes(false);
    const dataToSend: IOrder = {
      boostType: isNetWins
        ? "netWins"
        : isPlacements
        ? "placements"
        : "divisions",
      netWins: isNetWins ? netWins : 0,
      placements: isPlacements ? placements : 0,
      rankCurrent: rankCurrent,
      rankDesired: rankDesired,
      mmrs: boostOptions.mmrs,
      solo: boostOptions.solo,
      lane: boostChoices.lane
        ? {
            primary: boostOptions.lane.primary,
            secondary: boostOptions.lane.secondary,
          }
        : {
            primary: "",
            secondary: "",
          },
      champions: boostChoices.champions ? boostOptions.champions : [],
      additionalWin: boostChoices.additionalWin
        ? boostOptions.additionalWin
        : false,
      streamed: boostChoices.streamed ? boostOptions.streamed : false,
      chat: boostChoices.chat ? boostOptions.chat : false,
      flash: boostChoices.flash ? boostOptions.flash : "",
      priority: boostChoices.priority ? boostOptions.priority : false,
      queue: boostOptions.queue,
      discount: boostOptions.discount,
      discord: boostOptions.discord,
    };

    const response = await calculateAPI(dataToSend);
    if (response && response.status === 200) {
      setResult(response.data);
    }
    setCalculate(true);
  };

  const handleOrder = async () => {
    if (!boostOptions.discord) {
      toast.error("Please enter your discord name");
      return;
    }
    const orderData = {
      boostType: isNetWins
        ? "netWins"
        : isPlacements
        ? "placements"
        : "divisions",
      netWins: isNetWins ? netWins : 0,
      placements: isPlacements ? placements : 0,
      rankCurrent: rankCurrent,
      rankDesired: rankDesired,
      mmrs: boostOptions.mmrs,
      solo: boostOptions.solo,
      lane: boostChoices.lane
        ? {
            primary: boostOptions.lane.primary,
            secondary: boostOptions.lane.secondary,
          }
        : { primary: "", secondary: "" },
      champions: boostChoices.champions ? boostOptions.champions : [],
      additionalWin: boostChoices.additionalWin
        ? boostOptions.additionalWin
        : false,
      streamed: boostChoices.streamed ? boostOptions.streamed : false,
      chat: boostChoices.chat ? boostOptions.chat : false,
      flash: boostChoices.flash ? boostOptions.flash : "",
      priority: boostChoices.priority ? boostOptions.priority : false,
      queue: boostOptions.queue,
      discount: boostOptions.discount,
      discord: boostOptions.discord,
    };

    try {
      const res = await axios.post(
        `${URL}/api/v1/orders/create-checkout-session`,
        orderData,
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

  const handleCheckDiscount = async () => {
    const res = await checkDiscountAPI(boostOptions.discount);
    if (res && res.status === "success") {
      toast.success(`Discout code exists, ${res.percent}%`);
    } else {
      toast.error("Discount code not found");
    }
  };

  return message ? (
    <section>
      <p>{message}</p>
    </section>
  ) : (
    <section className="result">
      {showModalLanes && (
        <ModalLanes
          boostOptions={boostOptions}
          setBoostOptions={setBoostOptions}
          setShowModalLanes={setShowModalLanes}
        />
      )}
      {showModalChampion && (
        <ModalChampions
          boostOptions={boostOptions}
          setBoostOptions={setBoostOptions}
          setShowModalLanes={setShowModalChampion}
          champions={champions}
          setChampions={setChampions}
        />
      )}
      {showModalFlash && (
        <ModalFlash
          boostOptions={boostOptions}
          setBoostOptions={setBoostOptions}
          setShowModalFlash={setShowModalFlash}
        />
      )}
      {isNetWins ? (
        <div className="result__other-display">
          <div className="net-wins">
            <span className="net-desc">
              Net wins in <RankImg rank={rankCurrent} width={"50px"}></RankImg>
              {rankCurrent.rank} {rankCurrent.division} :
            </span>

            <span className="net-count">{netWins}</span>
          </div>
        </div>
      ) : isPlacements ? (
        <div className="result__other-display">
          <div className="placements-wins">
            <span className="placements-desc">Placements wins :</span>

            <span className="placements-count">{placements}</span>
          </div>
        </div>
      ) : (
        <div className="result__rank-display">
          <ResultDivision rank={rankCurrent} />
          <div className="arrows">
            <span style={{ fontSize: "40px" }}>&#8594;</span>
          </div>
          <ResultDivision rank={rankDesired} desired={true} />
        </div>
      )}
      <span className="result__header">
        <img src={settingsIcon} alt="settings icon" width="30px" />
        <h3>Boost options</h3>
        <img src={settingsIcon} alt="settings icon" width="30px" />
      </span>

      <div className="result__solo-duo">
        <button
          onClick={() => handleSoloOrDuo(true)}
          className={`solo-duo-btn solo ${
            boostOptions.solo ? "solo-duo-btn--chosen" : ""
          }`}
        >
          Solo
        </button>
        <button
          onClick={() => handleSoloOrDuo(false)}
          className={`solo-duo-btn duo ${
            !boostOptions.solo ? "solo-duo-btn--chosen" : ""
          } `}
        >
          Duo
        </button>
      </div>
      <div className="result__extra">
        <div className="row-choice">
          <div className="option-name">
            <span className="option-caption">Flash</span>
            <img
              src={edit}
              alt="edit icon"
              width="20px"
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => setShowModalFlash(!showModalFlash)}
            />
            <span className="option-caption">
              {boostOptions.flash !== "" && <span> {boostOptions.flash}</span>}
            </span>
          </div>

          <div className="percent-checkbox">
            <PercentTile name="FREE" />
            <CheckBox
              checked={boostChoices.flash}
              setChecked={(newFlash) =>
                setBoostChoices((prev) => ({
                  ...prev,
                  flash: newFlash,
                }))
              }
            />
          </div>
        </div>
        <div className="row-choice">
          <div className="option-name">
            <span className="option-caption">Lane</span>
            <img
              src={edit}
              alt="edit icon"
              width="20px"
              style={{ color: "white", cursor: "pointer" }}
              onClick={() => setShowModalLanes(!showModalLanes)}
            />
            <span className="option-caption">
              {boostOptions.lane.primary !== "" && (
                <img
                  src={
                    lanes_data.find(
                      (lane) => lane.name === boostOptions.lane.primary
                    )?.img
                  }
                  alt="lane"
                  width="24px"
                />
              )}
              {boostOptions.lane.secondary !== "" && (
                <img
                  src={
                    lanes_data.find(
                      (lane) => lane.name === boostOptions.lane.secondary
                    )?.img
                  }
                  alt="lane"
                  width="24px"
                />
              )}
            </span>
          </div>

          <div className="percent-checkbox">
            <PercentTile name="FREE" />
            <CheckBox
              checked={boostChoices.lane}
              setChecked={(newLanes) =>
                setBoostChoices((prev) => ({
                  ...prev,
                  lane: newLanes,
                }))
              }
            />
          </div>
        </div>
        <div className="row-choice">
          <div className="option-name">
            <span className="option-caption">Offline chat</span>
          </div>

          <div className="percent-checkbox">
            <PercentTile name="FREE" />
            <CheckBox
              checked={boostChoices.chat}
              setChecked={(newChat) => {
                setBoostChoices((prev) => ({ ...prev, chat: newChat }));
                setBoostOptions((prev) => ({ ...prev, chat: newChat }));
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="row-choice">
            <div className="option-name">
              <span className="option-caption">Champion</span>
              <img
                src={edit}
                alt="edit icon"
                width="20px"
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => setShowModalChampion(!showModalChampion)}
              />
            </div>

            <div className="percent-checkbox">
              <PercentTile name="+10%" />
              <CheckBox
                checked={boostChoices.champions}
                setChecked={(newChampions) =>
                  setBoostChoices((prev) => ({
                    ...prev,
                    champions: newChampions,
                  }))
                }
              />
            </div>
          </div>
          {champions.length > 0 && (
            <div className="selected-champions selected-champions--inResult">
              {champions.map((champion, index) => (
                <ChampionTile
                  key={index}
                  champion={champion}
                  handleChampionDelete={(champion) =>
                    setChampions(champions.filter((c) => c !== champion))
                  }
                  isInResult={true}
                />
              ))}
            </div>
          )}
        </div>
        <div className="row-choice">
          <div className="option-name">
            <span className="option-caption">Streamed games</span>
          </div>

          <div className="percent-checkbox">
            <PercentTile name="+20%" />
            <CheckBox
              checked={boostChoices.streamed}
              setChecked={(newStreamed) => {
                setBoostChoices((prev) => ({ ...prev, streamed: newStreamed }));
                setBoostOptions((prev) => ({ ...prev, streamed: newStreamed }));
              }}
            />
          </div>
        </div>

        <div className="row-choice">
          <div className="option-name">
            <span className="option-caption">Additional win</span>
          </div>

          <div className="percent-checkbox">
            <PercentTile name="+7€" />
            <CheckBox
              checked={boostChoices.additionalWin}
              setChecked={(newAdditionalWin) => {
                setBoostChoices((prev) => ({
                  ...prev,
                  additionalWin: newAdditionalWin,
                }));
                setBoostOptions((prev) => ({
                  ...prev,
                  additionalWin: newAdditionalWin,
                }));
              }}
            />
          </div>
        </div>
        <div className="row-choice ">
          <div className="option-name">
            <span className="option-caption">Priority</span>
          </div>

          <div className="percent-checkbox">
            <PercentTile name="+25%" />
            <CheckBox
              checked={boostChoices.priority}
              setChecked={(newPriority) => {
                setBoostChoices((prev) => ({ ...prev, priority: newPriority }));
                setBoostOptions((prev) => ({ ...prev, priority: newPriority }));
              }}
            />
          </div>
        </div>
      </div>

      <div className="result__discount">
        <div
          className="input-disc"
          style={{ alignSelf: "center", justifySelf: "center", width: "100%" }}
        >
          <input
            onChange={(e) =>
              setBoostOptions({ ...boostOptions, discount: e.target.value })
            }
            type="text"
            placeholder="discount code"
          ></input>
        </div>
        <button
          onClick={() => {
            handleCheckDiscount();
          }}
        >
          Check
        </button>
      </div>

      <div className="app-time">
        <div className="app-time__paragraph">
          <img src={time} alt="time" width="13px" />
          <span>Approximate completion time:</span>
        </div>
        <span className="days">{result.estimated}</span>
      </div>
      <span className="saved">
        You saved{" "}
        <span style={{ textDecoration: "underline" }}>€{result.discount}</span>{" "}
        on your order!
      </span>

      <div className="price">
        <span>Total amount</span>
        {!calculate ? (
          <button
            onClick={() => {
              handleCalculate();
            }}
            className="calculate-btn"
          >
            Calculate
          </button>
        ) : (
          <span>
            €{result.price}{" "}
            <span className="discount">{result.totalPrice}</span>
          </span>
        )}
      </div>

      <div className="pay">
        <div className="checkout-cont">
          <div
            className="input-disc"
            style={{
              display: "flex",
              alignSelf: "center",
              justifySelf: "flex-start",
              width: "40%",
            }}
          >
            <input
              onChange={(e) =>
                setBoostOptions({ ...boostOptions, discord: e.target.value })
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
          className="pay-btn"
        >
          Checkout
        </button>
      </div>
    </section>
  );
};

export default Result;
