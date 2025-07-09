import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { LuSearch } from "../../Components/Generals/Icons";

export default function SearchBox({ value, onChange }) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      variant="outlined"
      size="small"
      fullWidth
      placeholder="Search"
      sx={{
        backgroundColor: "var(--gray-0)",
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          borderRadius: 3,
          "& fieldset": {
            borderWidth: "2px",
            borderColor: "var(--brand-300)", 
          },
          // Remove hover effect
          "&:hover fieldset": {
            borderColor: "var(--brand-300)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--brand-300)", 
          },
        },
        "& .MuiInputBase-input::placeholder": {
          opacity: 1,
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LuSearch sx={{ fontSize: 20, color: "gray" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}
