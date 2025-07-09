import React, { useState } from "react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppBarComponent from "../Views/Header/Header";
import DrawerComponent from "../Views/Sidebar/SidebarDrawer";

const drawerWidth = 240; // adjust as needed

export default function SidebarLayout() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBarComponent onToggleDrawer={toggleDrawer} />

      {/* Drawer */}
      <DrawerComponent drawerOpen={drawerOpen} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          px: 3,
          py:1,
          width: "100%",
          backgroundColor:"var(--brand-100)",
          height:"100vh"
        }}
      >
        {/* This ensures content starts below the AppBar */}
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
