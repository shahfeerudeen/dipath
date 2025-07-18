import React from "react";
import { Box, Typography } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom"; // ✅ Add Navigate
import Footer from "../Views/Footer/Footer";
import Image from "../Components/Buttons/Image";
import logo from "../Assets/logo.png";
import { useColor } from "../Context/ColorContext";

const AuthLayout = () => {
  const { color } = useColor();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Left Side */}
      <Box
        sx={{
          width: { xs: "0%", md: "40%", lg: "60%", xl: "60%" },
          display: { xs: "none", sm: "none", md: "block" },
          backgroundColor: color || "var(--brand-200)",
        }}
        className="my-container"
      >
        <Box sx={{ maxWidth: 800, textAlign: "left", mt: 10 }}>
          <Typography variant="titlePage" mb={3} className="gradient-text">
            Track and Trace
          </Typography>
          <Box sx={{ width: 450 }}>
            <Typography variant="title">
              Tracking your shipment has never been so easy
            </Typography>
          </Box>
          <Box sx={{ mt: 60 }}>
            <Typography variant="subheading" color="var(--dark-yellow)">
              Our Global Footprints
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Box>
                <Typography variant="titlePage" fontWeight={400}>
                  5000+
                </Typography>
                <Typography color="var(--gray-500)" fontSize={20} mt={0}>
                  Customers
                </Typography>
              </Box>
              <Box>
                <Typography variant="titlePage" fontWeight={400}>
                  50+
                </Typography>
                <Typography color="var(--gray-500)" fontSize={20}>
                  Countries
                </Typography>
              </Box>
              <Box>
                <Typography variant="titlePage" fontWeight={400}>
                  1 Million+
                </Typography>
                <Typography color="var(--gray-500)" fontSize={20}>
                  Active users
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Right Side */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            maxWidth: { xs: 300, sm: 350, md: 400, lg: 410 },
            backgroundColor: "#fff",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              py: 7,
            }}
          >
            <Image image={logo} />
          </Box>

          {/* Main Content */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              px: 2,
            }}
          >
            <Outlet />
          </Box>

          {/* Footer */}
          <Box sx={{ textAlign: "center", py: 5 }}>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AuthLayout;
