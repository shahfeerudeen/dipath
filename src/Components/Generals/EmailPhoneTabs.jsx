// File: src/components/Generals/EmailPhoneTabs.jsx

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { LuMail, CiMobile2 } from "./Icons";

export default function EmailPhoneTabs({ selected, onChange }) {
  return (
    <Box display="flex" alignItems="center">
      {/* Email Tab */}
      <Box display="flex" flexDirection="column" alignItems="center" mr={4}>
        <Button
          onClick={() => onChange("email")}
          sx={{
            color: "var(--brand-950)",
            textTransform: "none",
            fontWeight: 800,
          }}
          startIcon={<LuMail />}
        >
          Email
        </Button>
        <Box
          sx={{
            height: "2px",
            bgcolor:
              selected === "email"
                ? "var(--brand-500)"
                : "var(--gray-300)",
            width: "180%",
            mt: "3px",
            ml: 8,
            borderRadius: "2px",
          }}
        />
      </Box>

      {/* OR */}
      <Typography
        variant="body2"
        color="black"
        fontWeight="bold"
        mx={3}
        ml={6}
      >
        (OR)
      </Typography>

      {/* Phone Number Tab */}
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          onClick={() => onChange("phone")}
          sx={{
            color: "var(--brand-950)",
            textTransform: "none",
            fontWeight: 800,
          }}
          startIcon={<CiMobile2 />}
        >
          Phone Number
        </Button>
        <Box
          sx={{
            height: "2px",
            bgcolor:
              selected === "phone"
                ? "var(--brand-500)"
                : "var(--gray-300)",
            width: "100%",
            mt: "3px",
            borderRadius: "2px",
          }}
        />
      </Box>
    </Box>
  );
}
