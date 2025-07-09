import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import {
  LuChevronsLeft,
  ExpandLess,
  ExpandMore,
} from "../../Components/Generals/Icons";

import { sidebarMenu } from "../../Views/Sidebar/sidebarMenu";

const drawerWidthOpen = 240;
const drawerWidthClosed = 72;

export default function SidebarDrawer() {
  // Instead of object, store the label of the expanded item
  const [expanded, setExpanded] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const handleExpand = (label) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerOpen ? drawerWidthOpen : drawerWidthClosed,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerOpen ? drawerWidthOpen : drawerWidthClosed,
          minWidth: 0, // ✅ override MUI's default min-width: 56px
          mt: "60px",
          overflowX: "hidden",
          backgroundColor: "var(--brand-50)",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* Scrollable menu */}
      <List
        disablePadding
        sx={{
          flex: "1 1 auto",
          overflowY: "auto",
        }}
      >
        {sidebarMenu.map((item) => {
          const Icon = item.icon;
          const hasChildren = item.children && item.children.length > 0;
          return (
            <React.Fragment key={item.label}>
              <ListItemButton
                onClick={() => hasChildren && handleExpand(item.label)}
                sx={{
                  py: 1.7,
                  justifyContent: drawerOpen ? "flex-start" : "center",
                  ml: drawerOpen ? 0 : 2,
                }}
              >
                <ListItemIcon sx={{ minWidth: drawerOpen ? 45 : 40 }}>
                  {Icon && <Icon style={{ fontSize: 20 }} />}
                </ListItemIcon>
                {drawerOpen && <ListItemText primary={item.label} />}
                {drawerOpen &&
                  hasChildren &&
                  (expanded === item.label ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>

              {hasChildren && (
                <Collapse
                  in={expanded === item.label}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItemButton
                        key={child.label}
                        selected={child.selected}
                        sx={(theme) => ({
                          alignItems: "center",
                          textAlign: "left",
                          mx: 1,
                          borderRadius: 1,
                          mb: 0.5,
                          ...(child.selected && {
                            backgroundColor: "var(--brand-600)",
                            color: "#fff",
                            "& .MuiListItemText-primary": {
                              fontWeight: 600,
                            },
                            "&:hover": {
                              backgroundColor: "red)",
                            },
                          }),
                        })}
                      >
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}

              {item.label === "Custom Exports" && <Divider />}
            </React.Fragment>
          );
        })}
      </List>

      <Divider />

      {/* Fixed toggle button */}
      <Box
        sx={{
          paddingBottom: 10,
          paddingTop: 1,
          display: "flex",
          ml: 2,
        }}
      >
        <IconButton color="inherit" onClick={toggleDrawer}>
          <LuChevronsLeft />
        </IconButton>
      </Box>
    </Drawer>
  );
}
