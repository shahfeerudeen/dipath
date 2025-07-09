// File: src/pages/SetNewPassword.jsx

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import { useColor } from "../../Context/ColorContext";
import "../../App.css";
import FormGenerator from "../../Views/FormGenerator";
import schema from "../../Config/ForgotPassword/SetPasswordJson";
import axiosInstance from "../../Api/AxiosInstance";
import Footer from "../../Views/Footer/Footer";
import { apiurl } from "../../Config/ApiConfig/ApiUrl";

function SetNewPassword() {
  const navigate = useNavigate();
  const { setUsername } = useUser();
  const { color } = useColor();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [SuccessMessag, setSuccessMessage] = useState("");

  const [formValues, setFormValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleNewPassword = async (formData) => {
    const newPassword = formData["Create New Password"]?.trim() || "";
    const confirmPassword = formData["Confirm New Password"]?.trim() || "";

    setErrorMessage("");
    setSuccessMessage("");

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    const userId = localStorage.getItem("userId") || "6853c3ac33a8ea581b567a2e";
    if (!userId) {
      setErrorMessage("User ID not found. Please restart the reset process.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        userId,
        newPassword,
      };

      const result = await axiosInstance.post(apiurl.ResetPassword, payload);
      setSuccessMessage("Password has been successfully reset!");

      setTimeout(() => {
        navigate("/NewpasswordSucc");
      }, 1000);
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message ||
          "Error setting new password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{ mb: 1, mt: 3, display: "flex", flexDirection: "column", gap: 1 }}
    >
      <Typography variant="heading" textAlign="left">
        Set New Password
      </Typography>
      <Typography
        variant="bodySmall"
        color="text.secondary"
        textAlign="left"
        mb={2}
      >
        Password must be at least 8 characters
      </Typography>
      <FormGenerator
        schema={schema}
        data={formValues}
        onSubmit={handleNewPassword}
        loading={loading}
      />
      {errorMessage && (
        <Typography color="error" mb={2} textAlign={"center"}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
}

export default SetNewPassword;
