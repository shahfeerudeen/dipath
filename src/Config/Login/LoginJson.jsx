// src/Config/Login/LoginJson.js
import React from "react";
import {
  VisibilityOutlinedIcon,
  VisibilityOffOutlinedIcon,
  KeyboardArrowDownOutlinedIcon,
} from "../../Components/Generals/Icons";
import { apiurl } from "../../Config/ApiConfig/ApiUrl";

export default {
  column1: [
    {
      name: "Organization",
      label: "Organization",
      component: "dropdown-field",
      placeholder: "Select Company",
      required: true,
      icon: <KeyboardArrowDownOutlinedIcon />,
      options: {
        url: apiurl.Organization,
        method: "GET",
      },
    },
  ],

  column2: [
    {
      name: "username",
      label: "Username",
      placeholder: "Enter Username",
      component: "InputTextField",
      required: true,
      minLength: 4,
      regex: "^[a-zA-Z0-9_]{4,}$",
    },
  ],
  column3: [
    {
      name: "password",
      label: "Password",
      placeholder: "Enter Password",
      component: "InputTextField",
      type: "password",
      required: true,
      minLength: 6,
      regex: "^[a-zA-Z0-9@#_-]{6,}$",
      showToggle: true,
      VisibilityIcon: VisibilityOutlinedIcon,
      VisibilityOffIcon: VisibilityOffOutlinedIcon,
    },
  ],
  column4: [
    {
      name: "Forgot Password",
      label: "Forgot Password?",
      actionText: "",
      component: "TypographyText",
      validateUsername: true,
      onClick: "ForgotPassword"
    }    
  ],
  column5: [
    {
      name: "Sign In",
      label: "Sign In",
      component: "BlackButton",
      hidden: false,
      button: true,
    },
  ],
};
