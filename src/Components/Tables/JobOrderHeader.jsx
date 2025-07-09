import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function JobOrderHeader({ onBack, title, backLabel }) {
  return (
    <Box>
      <Typography variant="h5" fontWeight={700}>{title} </Typography>
      <Button
        variant="text"
        color="inherit"
        sx={{
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
            color: "inherit",
          },
        }}
        onClick={onBack}
      >
        <ArrowBackIcon sx={{mr:1}}/>
        {backLabel}
      </Button>
    </Box>
  );
}
