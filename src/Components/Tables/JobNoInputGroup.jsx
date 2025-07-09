import React from "react";
import { Box, TextField, Divider } from "@mui/material";

export default function JobNoInputGroup({
  jobNoOptions = [],
  jobNoValue = "",
  onJobNoChange,
  textValue = "",
  onTextChange,
  textPlaceholder = "",
  ...boxProps
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #c4c4c4",
        borderRadius: 2,
        overflow: "hidden",
        height: 40,
        bgcolor: "#fff",
        minWidth: 390,
      }}
      {...boxProps}
    >
      <TextField
        select
        label="Job No"
        size="small"
        variant="outlined"
        value={jobNoValue}
        onChange={onJobNoChange}
        sx={{
          minWidth: 150,
          "& .MuiOutlinedInput-root": {
            border: "none",
            borderRadius: 1,
            bgcolor: "transparent",
            height: 40,
          },
          "& .MuiInputLabel-root": {
            top: "-7px",
          },
          "& fieldset": { border: "none" },
        }}
        SelectProps={{ native: true }}
      >
      </TextField>
      <Divider orientation="vertical" flexItem />
      <TextField
        placeholder={textPlaceholder}
        size="small"
        variant="outlined"
        value={textValue}
        onChange={onTextChange}
        sx={{
          minWidth: 160,
          flex: 1,
          "& .MuiOutlinedInput-root": {
            border: "none",
            bgcolor: "transparent",
            height: 40,
          },
          "& fieldset": { border: "none" },
        }}
      />
    </Box>
  );
} 