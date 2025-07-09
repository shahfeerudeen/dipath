import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import { useColor } from "../../Context/ColorContext";
import "../../App.css";
import FormGenerator from "../../Views/FormGenerator";
import schema from "../../Config/ForgotPassword/SetPasswordSuccJson";
import  axiosInstance  from "../../Api/AxiosInstance";
import Footer from "../../Views/Footer/Footer";

function SetNewPasswordSucc() {
  const navigate = useNavigate();
  const { setUsername } = useUser();
  const { color } = useColor();
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = () => {
    navigate("/login");
  };
  
  
  return (
    <Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: 280, sm: 400, md: 400, lg: 400 },
          }}
        >
          <FormGenerator
            schema={schema}
            onSubmit={handleLoginSubmit}
            loading={loading}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SetNewPasswordSucc;
