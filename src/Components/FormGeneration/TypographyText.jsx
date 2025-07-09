import React from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

export default function TypographyText({ label, actionText, onClick, loading }) {
  const hasActionText = Boolean(actionText);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: hasActionText ? "flex-start" : "flex-end",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        mb: 2,
        mt: 1,
      }}
    >
      {hasActionText && (
        <Typography
          variant="bodySmall"
          sx={{ color: "var(--gray-800)" }}
        >
          {actionText}
        </Typography>
      )}

      {/* Keep the label visible */}
      <Typography
        onClick={!loading ? onClick : undefined}
        variant="bodyMedium"
        sx={{
          color: loading ? "var(--gray-500)" : "var(--link-blue)",
          cursor: loading ? "default" : "pointer",
          pointerEvents: loading ? "none" : "auto",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {loading && <CircularProgress size={14} />}
        {label}
      </Typography>
    </Box>
  );
}
