import React from "react";
import { Box, Typography } from "@mui/material";

export default function SuccessMessage({ icon, label }) {
  const Icon = icon;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={4}
      textAlign="center"
      mb={5}
      mt={5}
    >
      {Icon && (
        <Icon
          sx={{
            fontSize: 82,
            color: "var(--green)",
            mb: 2,
          }}
        />
      )}
      <Typography fontSize={20} fontWeight={600}>
        {label}
      </Typography>
    </Box>
  );
}
