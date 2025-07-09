import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        color: "3D444F",
        width: "100%",
      }}
    >
      <Typography
        variant="bodySmall"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "center", sm: "center" },
          alignItems: "center",
          gap: 3,
          mb: 2,
        }}
      >
        <span></span>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Features</Typography>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mx: 2,
              height: 13, 
              borderRightWidth: "2px", 
              borderColor: "#3D444F",
              mt: 0.7,
            }}
          />

          <Typography>Contact Us</Typography>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              mt: 0.7,
              mx: 2,
              height: 13,
              borderRightWidth: "2px",
              borderColor: "#3D444F",
            }}
          />

          <Typography>Terms of Use</Typography>
        </Box>
      </Typography>
      <Typography variant="bodySmall" sx={{ textAlign: "center" }}>
        © Tripath Pvt. Ltd.
      </Typography>
    </Box>
  );
}
