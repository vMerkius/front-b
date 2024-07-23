import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../common/err-message";
import { notifyError, notifySuccess } from "../../utils/toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { loginAPI, loginGoogleAPI } from "../../server/server";
import google from "../../../public/assets/img/new-icons/google.svg";
import axios from "axios";
import ShowPassword from "./show-password";
import { useTime } from "react-timer-hook";

interface IFormInput {
  email: string;
  password: string;
}

interface LoginFormProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setShowForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm: React.FC<LoginFormProps> = ({
  setShowLogin,
  setShowForgotPassword,
}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [animationClass, setAnimationClass] = useState("form-enter");
  const [googleLogin, setGoogleLogin] = useState(false);

  const handleGoogleLogin = async (userInfo: any) => {
    try {
      console.log(userInfo);
      const response = await loginGoogleAPI(userInfo);
      if (response.status === "success") {
        notifySuccess("Logged successfully!");
        window.location.reload();
      }
    } catch (error) {
      notifyError("Login failed!");
      console.log("Login error", error);
    }
  };
  const loginWithGoogleAPI = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        handleGoogleLogin(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
    scope: "openid profile email",
  });

  const handleNewAccount = () => {
    setAnimationClass("form-exit");
    setTimeout(() => setShowLogin(false), 700);
  };
  const handleForgotPassword = () => {
    setAnimationClass("form-exit");
    setTimeout(() => setShowForgotPassword(true), 700);
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await loginAPI(data);

    reset();
    if (response && response.status === "success") {
      notifySuccess("Logged successfully!");
      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1500);
    } else {
      notifyError("Login failed!");
    }

    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="login-form"
      className={`form ${animationClass}`}
    >
      <h1 style={{ margin: "0px" }}>Login with</h1>

      <button
        className="google-btn"
        onClick={() => {
          setGoogleLogin(true);
          console.log("loginWithGoogleAPI");
          loginWithGoogleAPI();
        }}
      >
        <img src={google} alt="google" width="30px" />
      </button>

      <div className="or-container">
        <div className="line"></div>
        <div className="or">or</div>
        <div className="line"></div>
      </div>
      <h1 style={{ margin: "0px" }}>Sign in</h1>
      <div className="input-grp">
        <input
          {...register("email", { required: `Email is required!` })}
          name="email"
          id="email"
          type="email"
          placeholder="email *"
        />
      </div>
      {!googleLogin && <ErrorMsg msg={errors.email?.message as string} />}
      <div className="password-part">
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

        <span onClick={handleForgotPassword} className="password">
          Forgot password?
        </span>
      </div>
      {!googleLogin && <ErrorMsg msg={errors.password?.message as string} />}
      <button type="submit" className="submit-btn">
        Sign in
      </button>
      <span>
        New user?{" "}
        <span onClick={handleNewAccount} className="create-acc">
          Create an account.
        </span>
      </span>
    </form>
  );
};

export default LoginForm;
