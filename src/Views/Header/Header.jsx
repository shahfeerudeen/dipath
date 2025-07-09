// src/components/AppBarComponent.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
  Button,
  Avatar,
} from "@mui/material";
import {
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  Search as SearchIcon,
  CalendarToday as CalendarTodayIcon,
} from "@mui/icons-material";
import { LuSearch } from "../../Components/Generals/Icons";
import logo from "../../Assets/logo.png";

export default function Header({ onToggleDrawer }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "var(--brand-800)",
        boxShadow: "none",
        height: 60,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left: Logo + Menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: 32, mr: 2 }}
          />
        </Box>

        {/* Middle: Search */}
        <Box
          sx={{
            minWidth: 320,
            mx: 2,
            display: "flex",
            alignItems: "center",
            backgroundColor: "var(--brand-800)",
            borderRadius: 2,
            border: "2px solid var(--brand-500)",
            px: 1,
            mr: 127,
          }}
        >
          <LuSearch
            style={{
              color: "var(--brand-50)",
              marginRight: "12px",
              fontSize: "24px",
            }}
          />{" "}
          <InputBase
            variant="bodyBase"
            placeholder="Search anything"
            sx={{ color: "var(--brand-400)" }}
          />
        </Box>

        {/* Right: Year Selector + Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            variant="outlined"
            size="small"
            startIcon={<CalendarTodayIcon />}
            sx={{
              color: "white",
              borderColor: "rgba(255,255,255,0.4)",
              "&:hover": {
                borderColor: "white",
              },
            }}
          >
            2023-2024
          </Button>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
