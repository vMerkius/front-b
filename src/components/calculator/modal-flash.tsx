import { IBoostOptions } from "../../types/boost-options";

type ModalFlashProps = {
  boostOptions: IBoostOptions;
  setBoostOptions: React.Dispatch<React.SetStateAction<IBoostOptions>>;
  setShowModalFlash: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalFlash: React.FC<ModalFlashProps> = ({
  boostOptions,
  setBoostOptions,
  setShowModalFlash,
}) => {
  const handleClick = (btn: string) => {
    setBoostOptions({ ...boostOptions, flash: btn });
  };
  const handleCloseSearch = () => {
    setShowModalFlash(false);
  };
  return (
    <div className="modal-calc">
      <div className="modal-calc__container">
        <div className="search__close" onClick={() => handleCloseSearch()}>
          <span>
            <i className="flaticon-swords-in-cross-arrangement"></i>
          </span>
        </div>
        <h2 style={{ color: "white" }}>Choose flash</h2>
        <div className="flash-buttons">
          <button
            onClick={() => {
              handleClick("F");
              setShowModalFlash(false);
            }}
            className="flash-btn"
          >
            F
          </button>
          <button
            onClick={() => {
              handleClick("D");
              setShowModalFlash(false);
            }}
            className="flash-btn"
          >
            D
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalFlash;
