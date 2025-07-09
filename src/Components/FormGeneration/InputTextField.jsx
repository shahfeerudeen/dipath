import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Box,
  Typography,
  IconButton,
} from "@mui/material";

export default function InputTextField({
  label,
  placeholder,
  value,
  onChange,
  icon,
  type = "",
  showToggle = false,
  error = false,
  helperText = "",
  VisibilityIcon,
  VisibilityOffIcon,
  inputMode,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <Box display="flex" flexDirection="column" gap={1} mb={2} mt={2}>
      {label && <Typography sx={{ fontWeight: 500 }}>{label}</Typography>}
      <TextField
        size="small"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={inputType}
        error={error}
        helperText={helperText}
        InputProps={{
          endAdornment: (
            <>
              {/* Show icon ONLY when not password */}
              {!isPassword && icon && value && value.trim().length > 5 && (
                <InputAdornment position="end">
                  {React.createElement(icon, {
                    color: "var(--brand-green)",
                    size: 25,
                    fontWeight: "bold",
                  })}
                </InputAdornment>
              )}

              {/* Show eye toggle ONLY when password */}
              {isPassword && showToggle && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                    size="small"
                  >
                    {showPassword
                      ? VisibilityIcon
                        ? React.createElement(VisibilityIcon)
                        : null
                      : VisibilityOffIcon 
                      ? React.createElement(VisibilityOffIcon)
                      : null}
                  </IconButton>
                </InputAdornment>
              )}
            </>
          ),
          inputProps: {
            ...(inputMode ? { inputMode } : {}),
          },
        }}
        sx={{
          minWidth: { xs: 170, md: 250 },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: error ? "1px solid red" : "1px solid var(--gray-300)",
              borderRadius: 2,
            },
            "&:hover fieldset": {
              borderColor: error ? "red" : "var(--gray-300)",
            },
            "&.Mui-focused fieldset": {
              borderColor: error ? "red" : "var(--gray-300)",
            },
            "& input": {
              padding: "12px 14px",
              ...(isPassword
                ? {
                    WebkitTextSecurity: "asterisk",
                  }
                : {}),
            },
          },
          "& .MuiFormHelperText-root": {
            color: error ? "red" : "inherit",
            fontWeight: 500,
          },
        }}
      />
    </Box>
  );
}
