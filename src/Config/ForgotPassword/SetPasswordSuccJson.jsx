import React from "react";
import { CheckCircleIcon } from "../../Components/Generals/Icons";

export default {
  column1: [
    {
      component: "SuccessMessage",
      icon: CheckCircleIcon,
      label: "You have successfully changed the password ",
    },
  ],
  column2: [
    {
      name: "Sign In",
      label: "Sign In",
      placeholder: " ",
      type: "text",
      component: "BlackButton",
      hidden: false,
      button: true,
    },
  ],  
};
