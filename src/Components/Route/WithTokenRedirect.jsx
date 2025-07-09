import { Navigate } from "react-router-dom";
import React from "react";

const WithTokenRedirect = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const localToken = localStorage.getItem("token");
  const token =
    localToken && localToken.trim() !== "" ? localToken : userData.userBearerToken;

  console.log("Token:", token);

  // If token exists, redirect to /dashboard
  if (token && token.trim() !== "") {
    return <Navigate to="/dashboard" replace />;
  }

  // If no token, allow access to the public page (e.g., login)
  return <>{children}</>;
};

export default WithTokenRedirect;
