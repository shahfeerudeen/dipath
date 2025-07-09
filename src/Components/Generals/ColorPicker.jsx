import React, { useRef } from "react";
import { useColor } from "../../Context/ColorContext";
import { IconButton, Box } from "@mui/material";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

export default function ColorPicker() {
  const { color, setColor } = useColor();
  const colorInputRef = useRef(null);

  const handleIconClick = () => {
    colorInputRef.current?.click(); // Open the color picker
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton onClick={handleIconClick}>
        <ColorLensOutlinedIcon sx={{ color: "#fff",fontSize:30 }} />
      </IconButton>

      <Box sx={{ ml: 2 }}>
        <input
          ref={colorInputRef}
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{
            width: 1,
            height: 1,
            border: "none",
            cursor: "pointer",
            background: "transparent",
          }}
        />
      </Box>
    </Box>
  );
}
