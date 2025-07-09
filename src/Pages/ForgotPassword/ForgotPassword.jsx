// File: src/pages/OtpVerification.jsx

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/AxiosInstance";
import { addPageLog } from "../../Logs/pageLogs";
import { useColor } from "../../Context/ColorContext";
import FormGenerator from "../../Views/FormGenerator";
import EmailOtpJson from "../../Config/ForgotPassword/EmailOtpJson";
import MobileOtpJson from "../../Config/ForgotPassword/MobileOtpJson";
import EmailPhoneTabs from "../../Components/Generals/EmailPhoneTabs";
import { apiurl } from "../../Config/ApiConfig/ApiUrl";
import { useLocation } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const { color } = useColor();
  const [selected, setSelected] = useState("email");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const { phone,userId } = location.state || {};

  const maskedPhone = phone ? `+91 **** ${phone.slice(-4)}` : "+91 **** ****";

  useEffect(() => {
    addPageLog("OtpVerification mounted");
  }, []);

  const handleOtpRequestSubmit = async (data) => {
    console.log("Form data:", data);

    setLoading(true);
    try {
      setErrorMessage("");

      const response = await axiosInstance.post(apiurl.VerifyOTP, {
        userId: userId,
        otpType: selected,
        otp: data.otp?.trim(),
      });

      console.log("OTP verification response:", response.data);

      if (response.data?.data?.success) {
        navigate("/setpassword");
      } else {
        throw new Error("OTP verification failed. Please try again.");
      }
    } catch (error) {
      console.error(
        "OTP verification error:",
        error.response?.data || error.message
      );
      setErrorMessage(
        error.response?.data?.message ||
          error.message ||
          "Verification failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    const storedUsername = localStorage.getItem("username");

    if (!storedUsername) {
      setErrorMessage(
        "Username not found. Please go back and enter your username."
      );
      return;
    }

    setLoading(true);
    try {
      setErrorMessage("");

      const res = await axiosInstance.post(apiurl.ResendOTP, {
        userName: storedUsername,
        channel: selected,
      });

      setErrorMessage("OTP sent successfully.");
    } catch (error) {
      console.error("Resend OTP error:", error.response?.data || error.message);
      setErrorMessage(
        error.response?.data?.message || "Resend OTP failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mb: 4, mt: 3, display: "flex", flexDirection: "column" }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="heading">Forgot Password?</Typography>
      </Box>

      <Typography variant="bodyMedium" mb={3}>
        Two-factor authentication
      </Typography>

      <EmailPhoneTabs selected={selected} onChange={setSelected} />

      {selected === "email" ? (
        <Typography mb={2} mt={3} variant="bodySmall" color="var(--gray-800)">
          OTP has been sent to your registered email address. Please contact
          Sys-Admin if you do not receive it.
        </Typography>
      ) : (
        <Box mb={2} mt={3} display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant="bodySmall" color="var(--gray-800)">
            We will send a verification code to
          </Typography>
          <Typography variant="bodySmall" sx={{ fontWeight: "bold" }}>
            {maskedPhone}
          </Typography>
        </Box>
      )}

      <FormGenerator
        schema={selected === "email" ? EmailOtpJson : MobileOtpJson}
        data={formData}
        loading={loading}
        onSubmit={async (submission) => {
          console.log("Form submission:", submission);

          if (submission?.type === "action") {
            if (submission.action === "EmailOtp") {
              await handleResendOtp();
            }
            return;
          }

          await handleOtpRequestSubmit(submission);
        }}
      />

      {errorMessage && (
        <Typography color="error" mb={2} textAlign={"center"}>
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
}

export default ForgotPassword;
