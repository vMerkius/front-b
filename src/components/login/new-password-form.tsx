import { useForm, SubmitHandler} from "react-hook-form";
import ErrorMsg from "../common/err-message";
import { useState } from "react";
import { newPasswordAPI } from "../../server/server";
import ShowPassword from "./show-password";
import { IUserNewPassword } from "../../types/user-new-password";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const validPassword = new RegExp(
    "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$"
  );

interface IFormInput {
  password: string;
  passwordConfirm: string;
}

interface NewPasswordFormProps {
  resetToken: string;
}

const NewPasswordForm: React.FC<NewPasswordFormProps> = ({ resetToken }) => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showConfirmPasswordError, setShowConfirmPasswordError] = useState(false);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
      setShowPasswordError(!validPassword.test(data.password));
      setShowConfirmPasswordError(data.password !== data.passwordConfirm);

      const dataToSend: IUserNewPassword = {
        password: data.password,
        passwordConfirm: data.passwordConfirm
      };
  
      if (
        validPassword.test(data.password) &&
        data.password === data.passwordConfirm
      ) {
        const response = await toast.promise(
          newPasswordAPI(dataToSend, resetToken),
          {
            pending: "Changing your password..",
            success: "Password changed! You will be logged in soon 👌",
            error: "Whoops, something went wrong!",
          }, 
        ); 
        reset();
        if (response.status === "success") {
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 5000);
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

    const handleShowPasswordConfirm = () => {
      setShowPasswordConfirm(!showPasswordConfirm);
      const password = document.getElementById(
        "passwordConfirm"
      ) as HTMLInputElement;
      if (showPasswordConfirm) {
        password.type = "password";
      } else {
        password.type = "text";
      }
    };
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="password-form"
        className={`form form-enter`}
      >
        <h1 style={{ margin: "0px" }}>New Password</h1>
  
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
            {...register("passwordConfirm", {
              required: `You have to confirm the password!`,
            })}
            name="passwordConfirm"
            id="passwordConfirm"
            type="password"
            placeholder="confirm password *"
          />
          <ShowPassword
            show={showPasswordConfirm}
            handleShow={handleShowPasswordConfirm}
          />
        </div>
  
        <ErrorMsg msg={errors.passwordConfirm?.message as string} />
        {showConfirmPasswordError && <ErrorMsg msg="Passwords do not match!" />}
  
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    );
  };

export default NewPasswordForm;