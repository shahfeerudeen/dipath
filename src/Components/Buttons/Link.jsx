import React from "react";
import { Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export  function BackLink({ label, navigateTo, icon: Icon }) {

    const navigate = useNavigate();
  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
    console.log("navigateTo:", label,navigateTo);
  };
  return (
    <Box sx={{ textAlign: "center", mt: 3, mb:3}}>
      <Link
        underline="hover"
        onClick={handleClick}
        variant="bodyMedium"
        sx={{
          color: "var(--link-blue)",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 1,

        }}
      >
        {Icon && <Icon />}
        {label}
      </Link>
    </Box>
  )
}
