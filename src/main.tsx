import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import "react-modal-video/scss/modal-video.scss";
import "./index.scss";
import { GoogleOAuthProvider } from "@react-oauth/google";
// clientId="866051324371-gep0bi3kmtvn8tfgi3civlt2j37q1kut.apps.googleusercontent.com">
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="306475290852-pu7mlaplgf5gubucs223kpjjp3ddvegs.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
