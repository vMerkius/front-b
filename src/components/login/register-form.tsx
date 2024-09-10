import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "../../utils/toast";
import { useState } from "react";
import { IUserSignUp } from "../../types/user-signup";
import { signUpAPI } from "../../server/server";
import ShowPassword from "./show-password";

const validPassword = new RegExp(
  "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
);

const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
);

interface IFormInput {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

interface LoginFormProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({ setShowLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [animationClass, setAnimationClass] = useState("form-enter");

  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);
  const handleLogin = () => {
    setAnimationClass("form-exit");
    setTimeout(() => setShowLogin(true), 700);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setShowEmailError(!validEmail.test(data.email));
    setShowPasswordError(!validPassword.test(data.password));
    setShowConfirmPasswordError(data.password !== data.confirmPassword);
    const dataToSend: IUserSignUp = {
      name: data.nickname,
      email: data.email,
      password: data.password,
    };

    if (
      validEmail.test(data.email) &&
      validPassword.test(data.password) &&
      data.password === data.confirmPassword
    ) {
      const response = await signUpAPI(dataToSend);
      console.log(response);

      reset();

      if (response.status === "success") {
        console.log("here");
        notifySuccess("Account has been created successfully");
        handleLogin();
      }
    }
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    const password = document.getElementById("password") as HTMLInputElement;
    if (showPassword) {
      password.type = "password";
    } else {
      password.type = "text";
    }
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    const password = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
    if (showConfirmPassword) {
      password.type = "password";
    } else {
      password.type = "text";
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="password-form"
      className={`form ${animationClass}`}
    >
      <h2 style={{ margin: "0px", fontSize: "34px" }}>Sign up</h2>

      <div className="input-grp">
        <input
          {...register("email", { required: `Email is required!` })}
          name="email"
          id="email"
          type="text"
          placeholder="email *"
        />
      </div>
      <ErrorMsg msg={errors.email?.message as string} />
      {showEmailError && <ErrorMsg msg="Please enter a valid email address!" />}
      <div className="input-grp">
        <input
          {...register("nickname", { required: `Nickname is required!` })}
          name="nickname"
          id="nickname"
          type="text"
          placeholder="nickname *"
        />
      </div>
      <ErrorMsg msg={errors.email?.message as string} />

      <div className="input-grp input-grp--password">
        <input
          {...register("password", { required: `Password is required!` })}
          name="password"
          id="password"
          type="password"
          placeholder="password *"
        />
        <ShowPassword show={showPassword} handleShow={handleShowPassword} />
      </div>

      <ErrorMsg msg={errors.password?.message as string} />
      {showPasswordError && (
        <ErrorMsg msg="Password must contain 8 characters, one letter, one number and one special character!" />
      )}

      <div className="input-grp input-grp--password">
        <input
          {...register("confirmPassword", {
            required: `You have to confirm the password!`,
          })}
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="confirm password *"
        />
        <ShowPassword
          show={showConfirmPassword}
          handleShow={handleShowConfirmPassword}
        />
      </div>

      <ErrorMsg msg={errors.confirmPassword?.message as string} />
      {showConfirmPasswordError && <ErrorMsg msg="Password does not match!" />}

      <button type="submit" className="submit-btn">
        Sign up
      </button>
      {/* <button type="submit" className=" tg-btn-3 tg-svg mx-auto">
        <SvgIconCom icon={"/assets/img/icons/shape.svg"} id="svg-1" />
        <span>Sign in</span>
      </button> */}
      <span>
        Already have account?{" "}
        <span onClick={handleLogin} className="create-acc">
          Sign in.
        </span>
      </span>
    </form>
  );
};

export default LoginForm;
