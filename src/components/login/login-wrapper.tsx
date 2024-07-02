import { useEffect, useState } from "react";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import PasswordRemindForm from "./password-remind-form";
import { checkLoginStatus } from "../../server/server";
import { useNavigate } from "react-router-dom";

const LoginWrapper = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const checkLoggedIn = async () => {
    const res = await checkLoginStatus();
    if (res)
      if (res.status === "success") {
        navigate("/");
        return false;
      } else {
        return true;
      }
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <MouseParallaxContainer>
      <section
        style={{ backgroundImage: `url(/assets/img/slider/slider_bg.jpg)` }}
        className="login-wrapper"
      >
        <div className="login-wrapper__form-wrap">
          {showForgotPassword ? (
            <PasswordRemindForm setShowForgotPassword={setShowForgotPassword} />
          ) : showLogin ? (
            <LoginForm
              setShowLogin={setShowLogin}
              setShowForgotPassword={setShowForgotPassword}
            />
          ) : (
            <RegisterForm setShowLogin={setShowLogin} />
          )}

          {/* <p className="ajax-response"></p> */}
        </div>
        <div className="slider__shapes">
          <img src="/assets/img/slider/slider_shape01.png" alt="shape" />
          <img src="/assets/img/slider/slider_shape02.png" alt="shape" />
          <img src="/assets/img/slider/slider_shape03.png" alt="shape" />
          <img src="/assets/img/slider/slider_shape04.png" alt="shape" />
        </div>
        <MouseParallaxChild
          factorX={0.03}
          factorY={0.03}
          className="slider__img text-center right-img"
        >
          <img src="/assets/img/slider/slider_img01.png" alt="img" />
        </MouseParallaxChild>

        {/* <RoadMapArea /> */}
      </section>
    </MouseParallaxContainer>
  );
};

export default LoginWrapper;
