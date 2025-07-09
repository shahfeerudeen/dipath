import {
  LuLayoutGrid,
  AccountCircle,
    LuSend,
    BsBoxSeam,
    FiRepeat,
    LuLogIn,
    LuLogOut,
    FiFileText,
    LuUser,
    LuItalic,
    LuGlobe,
    FiTool,
    LuUserCheck
  } from "../../Components/Generals/Icons";
  
  export const sidebarMenu = [
    {
      label: "Organization",
      icon: LuLayoutGrid,
    },
    {
      label: "Airline",
      icon: LuSend,
    },
    {
      label: "Shipping Line",
      icon: BsBoxSeam,
    },
    {
      label: "Transactions",
      icon: FiRepeat,
      children: [
        { label: "Export Job", selected: true },
        { label: "Tracking" },
        { label: "Container VGM" },
      ],    },
    {
      label: "Custom Imports",
      icon: LuLogIn,
      children: [
        { label: "Export Job", selected: true },
        { label: "Tracking" },
        { label: "Container VGM" },
      ],    },
    {
      label: "Custom Exports",
      icon: LuLogOut,
      children: [
        { label: "Export Job", selected: true },
        { label: "Tracking" },
        { label: "Container VGM" },
      ],
    },
    {
      label: "Reports",
      icon: FiFileText,
    },
    {
      label: "My Tripath",
      icon: LuUser,
      children: [
        { label: "Export Job", selected: true },
        { label: "Tracking" },
        { label: "Container VGM" },
      ],    },
    {
      label: "ICE GATE",
      icon: LuItalic,
    },
    {
      label: "Tripath Integrations",
      icon: LuGlobe,
    },
    {
      label: "Tools",
      icon: FiTool,
      children: [
        { label: "Export Job", selected: true },
        { label: "Tracking" },
        { label: "Container VGM" },
      ],    },
    {
      label: "Administration",
      icon: LuUserCheck,
      children: [
        { label: "Export Job", selected: true },
        { label: "Tracking" },
        { label: "Container VGM" },
      ],    },
  ];
  