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
// const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// console.log("clientId", clientId);

// if (!clientId) {
//   throw new Error("REACT_APP_GOOGLE_CLIENT_ID is not defined");
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="306475290852-pu7mlaplgf5gubucs223kpjjp3ddvegs.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
