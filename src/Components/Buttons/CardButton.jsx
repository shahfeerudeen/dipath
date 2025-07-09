import React from "react";
import { Box } from "@mui/material";

export default function CardButton({
  label,
  value,
  percentage,
  caption,
  borderColor,
  arrowDirection,
  arrowColor,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        borderRadius: 3,
        background: "var(--gray-0)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        width: "100%",          
        maxWidth: "395px",      
        borderLeft: `4px solid ${borderColor}`,
        alignItems: "center",   
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Box sx={{ fontSize: "1rem", fontWeight: 500, color: "#374151" }}>
          {label}
        </Box>
        <Box sx={{ fontSize: "1.75rem", fontWeight: 600, mt: "0.25rem" }}>
          {value}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mt: "0.75rem" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f0fdf4",
              borderRadius: "0.375rem",
              p: "0.25rem",
              mr: "0.5rem",
            }}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke={arrowColor}
              style={{
                width: "1rem",
                height: "1rem",
                transform:
                  arrowDirection === "up" ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </Box>
          <span
            style={{
              color: arrowColor,
              fontWeight: 600,
              marginRight: "0.25rem",
              fontSize: "1rem",
            }}
          >
            {percentage}
          </span>
          <span style={{ color: "#6b7280", fontSize: "0.875rem" }}>
            {caption}
          </span>
        </Box>
      </Box>
    </Box>
  );
}
