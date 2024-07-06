import {
    MouseParallaxChild,
    MouseParallaxContainer,
} from "react-parallax-mouse";
import NewPasswordForm from "./new-password-form";

interface NewPasswordWrapperProps {
    resetToken: string;
}

const NewPasswordWrapper: React.FC<NewPasswordWrapperProps> = ({resetToken}) => {
    return (
        <MouseParallaxContainer>
            <section style={{ backgroundImage: `url(/assets/img/slider/slider_bg.jpg)` }} className="login-wrapper">
                <div className="login-wrapper__form-wrap">
                <NewPasswordForm resetToken={resetToken} />
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
            </section>
        </MouseParallaxContainer>
    );
};

export default NewPasswordWrapper;
