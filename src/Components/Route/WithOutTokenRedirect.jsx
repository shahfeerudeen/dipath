import { Navigate } from "react-router-dom";
import React from "react";

const WithOutTokenRedirect = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const localToken = localStorage.getItem("token");
  const token = localToken && localToken.trim() !== "" ? localToken : userData.userBearerToken;
  const userId = userData.userId || userData.id;

  console.log("Token:", token);

  if (!token || token.trim() === "") {
    // If token is empty, redirect to login
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default WithOutTokenRedirect;
