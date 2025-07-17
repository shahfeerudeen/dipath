import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import { useColor } from "../../Context/ColorContext";
import "../../App.css";
import FormGenerator from "../../Views/FormGenerator";
import schema from "../../Config/Login/LoginJson";
import axiosInstance from "../../Api/AxiosInstance";
import Footer from "../../Views/Footer/Footer";
import { apiurl } from "../../Config/ApiConfig/ApiUrl";

function LoginPage() {
  const navigate = useNavigate();
  const { setUsername } = useUser();
  const { color } = useColor();

  const [loginLoading, setLoginLoading] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formValues, setFormValues] = useState({
    Organization: "",
    username: "",
    password: "",
  });

  const handleLoginSubmit = async (data) => {
    setLoginLoading(true);
    try {
      setErrorMessage("");
  
      const response = await axiosInstance.post(apiurl.Login, {
        userName: data.username?.trim(),
        userPassword: data.password?.trim(),
        OrganizationId: data.Organization?.trim(),
      });
  
      const userData = response.data;
      const token = userData?.userBearerToken;
  
      localStorage.setItem("userData", JSON.stringify(userData));
      
      setUsername(data.username);
      navigate(apiurl.Dashboard);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoginLoading(false);
    }
  };
  
  
  const handleForgotSubmit = async (data) => {
    setForgotLoading(true);
    try {
      const response = await axiosInstance.post(apiurl.ForgotPassword, {
        userName: data.username.trim(),
      });
      const userData = response.data;
      const token = userData?.userBearerToken;
    
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("username", data.userid);
      setUsername(data.userid);  
      navigate("/forgotpassword", {
        state: {
          userId: response.data.userId,
          phone: response.data.phone,
          email: response.data.email,
        },
      });
    } catch (error) {
      console.error("Forgot Password Error", error);
      setErrorMessage(
        error.response?.data?.message || "Could not process password reset."
      );
    } finally {
      setForgotLoading(false);
    
    }
    console.log("Navigating with state:", {
      userId: response.data.userId,
      phone: response.data.phone,
      email: response.data.email,
    });
  };
  

  return (
    <Box sx={{ mb: 4, mt: 3, display: "flex", flexDirection: "column" }}>
      <Box sx={{ mb: 3, display: "flex", flexDirection: "column" }}>
        <Typography variant="heading">hi hello YJ here Welcome Back!</Typography>
        <Typography variant="bodySmall" color="text.secondary">
          Version 6.8H
        </Typography>
      </Box>

      <FormGenerator
        schema={schema}
        data={formValues}
        actionLoading={{
          login: loginLoading,
          ForgotPassword: forgotLoading,
        }}       
         onSubmit={async (submission) => {
          setErrorMessage(""); 
          if (
            submission.type === "action" &&
            submission.action === "ForgotPassword"
          ) {
            
            await handleForgotSubmit(submission.data);
          } else if (submission.type === "submit") {
            await handleLoginSubmit(submission.data);
          }
        }}
      />

      {errorMessage && (
        <Typography color="error" sx={{ mt: 2, textAlign: "center" }}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
}

export default LoginPage;
