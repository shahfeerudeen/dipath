import React from "react";
import {
  KeyboardArrowDownOutlinedIcon,
  VisibilityOutlinedIcon,
  VisibilityOffOutlinedIcon,
  FaArrowLeft
} from "../../Components/Generals/Icons";

export default {
  column1: [
    {
      name: "Create New Password",
      label: "Create New Password",
      placeholder: "***********",
      component: "InputTextField",
      type: "password",
      required: true,
      minLength: 8,
      regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    }
  ],
  column2: [
    {
      name: "Confirm New Password",
      label: "Confirm New Password",
      placeholder: "*************",
      component: "InputTextField",
      type: "password",
      required: true,
      minLength: 8,
      regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
      showToggle: true,
      VisibilityIcon: VisibilityOutlinedIcon,
      VisibilityOffIcon: VisibilityOffOutlinedIcon
    }
  ],

  column3: [
    {
      name: "Reset Password",
      label: "Reset Password",
      placeholder: " ",
      component: "BlackButton",
      hidden: false,
      button: true
    }
  ],

  column4: [
    {
      name: "Back to Sign in",
      label: "Back to Sign in",
      component: "Backlink",
      hidden: false,
      button: true,
      icon: FaArrowLeft
    }
  ]
};
