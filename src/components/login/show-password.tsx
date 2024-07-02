import showIcon from "../../../public/assets/img/new-icons/show.svg";
import hideIcon from "../../../public/assets/img/new-icons/hide.svg";

type ShowPasswordProps = {
  show: boolean;
  handleShow: () => void;
};
const ShowPassword: React.FC<ShowPasswordProps> = ({ show, handleShow }) => {
  return !show ? (
    <img
      src={showIcon}
      alt="show"
      className="show-hide"
      width="20px"
      onClick={handleShow}
    />
  ) : (
    <img
      src={hideIcon}
      alt="hide"
      className="show-hide"
      width="20px"
      onClick={handleShow}
    />
  );
};
export default ShowPassword;
