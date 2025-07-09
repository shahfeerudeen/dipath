import React from "react";
import { Button, CircularProgress } from "@mui/material";

export const BlackButton = ({
  label,
  disabled,
  loading,
  type = "submit",
  onClick,
  ...props
}) => (
  <Button
    type={type}
    variant="contained"
    disabled={disabled || loading}
    fullWidth
    onClick={onClick}
    sx={{
      backgroundColor: "var(--brand-600)",
      color: "var(--gray-50)",
      textTransform: "none",
      borderRadius: 2,
      padding: 1,
      height: 50,
      opacity: disabled ? 1 : 1,
      cursor: disabled ? "not-allowed" : "pointer",
      mt: 2,
      mb: 1,
    }}
    {...props}
  >
    {loading ? "Loading..." : label}
  </Button>
);
