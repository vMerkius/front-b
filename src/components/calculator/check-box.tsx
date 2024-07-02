type CheckBoxProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ checked, setChecked }) => {
  return (
    <div className="check-box" onClick={() => setChecked(!checked)}>
      {checked && <span>&#10003;</span>}
    </div>
  );
};
export default CheckBox;
