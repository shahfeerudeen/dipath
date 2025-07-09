import { Navigate } from "react-router-dom";
import React from "react";

const ForgotRedirect = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const token = localStorage.getItem("token") || userData.userBearerToken;
  const userId = userData.userId || userData.id; // adjust based on your actual key

  console.log("Token:", userData);
  console.log("User ID:", userId);

  if (!userId && !token) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ForgotRedirect;
