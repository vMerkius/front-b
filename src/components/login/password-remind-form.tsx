import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "../../utils/toast";
import { useState } from "react";
import { forgotPasswordAPI } from "../../server/server";
import { IUserForgotPassword } from "../../types/user-forgot-password";

interface IFormInput {
  email: string;
}

interface LoginFormProps {
  setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
);

const PasswordRemindForm: React.FC<LoginFormProps> = ({
  setShowForgotPassword,
}) => {
  const [animationClass, setAnimationClass] = useState("form-enter");

  const [showEmailError, setShowEmailError] = useState(false);

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

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setShowEmailError(!validEmail.test(data.email));
    const dataToSend: IUserForgotPassword = {
      email: data.email,
    };

    if (validEmail.test(data.email)) {
      const response = await forgotPasswordAPI(dataToSend);
      reset();
      if (response.status === "success") {
        notifySuccess(
          "We have sent you an email with instructions to reset your password."
        );
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="login-form"
      className={`form ${animationClass} form--password`}
    >
      <h2 style={{ margin: "0px", fontSize: "34px" }}>Password reset</h2>

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
      {showEmailError && <ErrorMsg msg="Please enter a valid email address!" />}

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
