import React, { useEffect } from "react";
import BackToTopCom from "../components/common/back-to-top-com";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "../utils/utils";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    animationCreate();
  }, [pathname]);
  return (
    <>
      {children}
      <BackToTopCom />
      <ToastContainer />
    </>
  );
};

export default Wrapper;
