import React from "react";
import {LiaCheckDoubleSolid ,FaArrowLeft} from  "../../Components/Generals/Icons";

export default {
  column1: [
    {
      name: "otp",
      label: "Enter the OTP here",
      placeholder: "Please Enter OTP",
      component: "InputTextField",
      icon: LiaCheckDoubleSolid,
      required: true,
      minLength: 4,
      maxLength: 6,
      type: "text", 
      inputMode: "numeric",     },
  ],
  column2: [
    {
      name: "Resend OTP",
      label: "Click to Resend",
      component: "TypographyText",
      actionText: "Didn’t receive the OTP?",
    },
  ],

  column3: [
    {
      name: "Submit",
      label: "Submit",
      placeholder: " ",
      component: "BlackButton",
      hidden: false,
      defaultValue: "",
      icon: "",
      button: true,
      require: true,
      minLength: 4,
      maxLength: 6,
    },
  ],

  column4: [
    {
      name: "Back to Sig in",
      label: "Back to Sig in",
      component: "Backlink",
      navigateTo: "/login",
      icon: FaArrowLeft,
    },
  ],
};
