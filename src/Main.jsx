import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from "./App";
import "@fontsource/inter";
import { DrawerProvider } from "./Context/DrawerContext";
import { UserProvider } from "./Context/UserContext";
import { ColorProvider } from "./Context/ColorContext";
import theme from "./styles/Typography";
import "./styles/Colors.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_BASENAME}>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <DrawerProvider>
            <ColorProvider>
              <App />
            </ColorProvider>
          </DrawerProvider>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
