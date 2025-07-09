import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Typography } from "@mui/material";
import "./styles/Colors.css";
import AuthLayout from "./Layout/AuthLayout";
import LoginPage from "./Pages/Login/LoginPage";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import SetNewPassword from "./Pages/ForgotPassword/SetNewPassword";
import SetNewpasswordsucc from "./Pages/ForgotPassword/SetNewPasswordSucc";
import SidebarLayout from "./Layout/SidebarLayout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ForgotRedirect from "./Components/Route/ForgotRedirect";
import WithOutTokenRedirect from "./Components/Route/WithOutTokenRedirect";
import WithTokenRedirect from "./Components/Route/WithTokenRedirect";

localStorage.clear();

function App() {
  return (
    <Routes>
      {/* Auth Layout */}
      <Route path="/" element={<AuthLayout />}>
      <Route path="login" element={<WithTokenRedirect><LoginPage /></WithTokenRedirect>}/>
        {/* ✅ Apply redirect logic only to ForgotPassword */}
        <Route path="forgotpassword" element={<ForgotRedirect><ForgotPassword /></ForgotRedirect>}/>
        <Route path="setpassword" element={<SetNewPassword />} />
        <Route path="setpassucc" element={<SetNewpasswordsucc />} />
        <Route index element={<Navigate to="/login" replace />} />
      </Route>

      {/* Dashboard Layout */}
      <Route path="dashboard" element={<WithOutTokenRedirect><SidebarLayout /></WithOutTokenRedirect>}>
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
