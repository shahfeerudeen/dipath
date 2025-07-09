import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "../../App.css";
import FormGenerator from "../../Views/FormGenerator";
import schema from "../../Config/Dashboard/DashboardJson";
import { Outlet } from "react-router";
import { BlackButton } from "../../Components/Buttons/BlackButton";
import { Height } from "@mui/icons-material";
import { LuPlus } from "../../Components/Generals/Icons";
import FilterBar from "../../Views/FilterBar";

function Dashboard() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        {/* Left side - Typography stacked */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="heading">Export Overview</Typography>
          <Typography variant="bodySmall">
            You can see all the Jobs here
          </Typography>
        </Box>

        {/* Right side - Button */}
        <BlackButton
          variant="bodySmallStrong"
          label="Create New Entry"
          startIcon={<LuPlus />}
          sx={{
            width: "auto",
            color: "var(--gray-50)",
            backgroundColor: "var(--brand-600)",
            textTransform: "none",
          }}
        />
      </Box>
      <Box>
        <FormGenerator schema={schema} />
      </Box>
      <FilterBar/>
    </Box>
  );
}

export default Dashboard;
