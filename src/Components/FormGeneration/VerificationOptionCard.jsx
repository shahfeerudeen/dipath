import React from "react";
import { Box, Typography, IconButton, Card } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

const VerificationOptionCard = ({
  icon,
  title,
  children,
  onClick,
  selected,
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        border: selected ? "1px solid rgb(51, 0, 255)" : "1px solid gray",
        borderRadius: 2,
        padding: 2,
        cursor: "pointer",
        transition: "0.2s",
        mb:3
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 2,
          }}
        >
          <Box sx={{ fontSize: 25 }}>{icon}</Box>

          <Box>
            <Typography fontWeight={600}>{title}</Typography>
          </Box>
        </Box>
        <Box width={200}>{children}</Box>
      </Box>

      <IconButton size="small" sx={{ color: "black", mt: 1 }}>
        <IoIosArrowForward />
      </IconButton>
    </Card>
  );
};

export default VerificationOptionCard;
