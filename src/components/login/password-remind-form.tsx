import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "../../utils/toast";
import { useState } from "react";

interface IFormInput {
  email: string;
}

interface LoginFormProps {
  setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswordRemindForm: React.FC<LoginFormProps> = ({
  setShowForgotPassword,
}) => {
  const [animationClass, setAnimationClass] = useState("form-enter");

  const handleNewAccount = () => {
    setAnimationClass("form-exit");
    setTimeout(() => setShowForgotPassword(false), 700);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    if (data) {
      notifySuccess("Message sent successfully!");
    }
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="login-form"
      className={`form ${animationClass} form--password`}
    >
      <h1 style={{ margin: "0px" }}>Password reset</h1>

      <div className="input-grp">
        <input
          {...register("email", { required: `Email is required!` })}
          name="email"
          id="email"
          type="email"
          placeholder="email *"
        />
      </div>
      <ErrorMsg msg={errors.email?.message as string} />

      <button type="submit" className="submit-btn">
        Send
      </button>
      <span>
        Password changed?{" "}
        <span onClick={handleNewAccount} className="create-acc">
          Sign in.
        </span>
      </span>
    </form>
  );
};

export default PasswordRemindForm;
