import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Popover,
  Box,
} from "@mui/material";
import { LuCalendar } from "../../Components/Generals/Icons";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import { SvgIcon } from "@mui/material";

export default function DateRangeBox() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState([
    dayjs("2024-02-22"),
    dayjs("2024-06-22"),
  ]);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const formatted =
    value[0] && value[1]
      ? `${value[0].format("DD/MM/YYYY")} - ${value[1].format("DD/MM/YYYY")}`
      : "";

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextField
        value={formatted}
        fullWidth
        readOnly
        onClick={handleOpen}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton tabIndex={-1} onClick={handleOpen}>
                <SvgIcon sx={{ color: "var(--brand-600)" }}>
                  <LuCalendar />
                </SvgIcon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            bgcolor: "#fff",
            fontWeight: 500,
            fontSize: 16,
            border:2
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor:"2px solid  var(--brand-600)",
          },
          "& .MuiInputBase-input": {
            padding: "10px 14px",
          },
        }}
        variant="outlined"
      />
<Popover
  open={Boolean(anchorEl)}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  PaperProps={{
    sx: {
      border: "1px solid var(--brand-600)",
      borderRadius: "8px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    },
  }}
>
  <Box sx={{ p: 2 }}>
    <DateRangePicker
      calendars={1}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        handleClose();
      }}
      slotProps={{
        textField: { size: "small" },
      }}
    />
  </Box>
</Popover>

    </LocalizationProvider>
  );
}
