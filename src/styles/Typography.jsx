// src/theme/typography.js
import { createTheme } from "@mui/material/styles";

const typography = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",

    // Big Titles
    hero: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "72px",
      lineHeight: "120%",
     
    },
    titlePage: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "120%",
     
    },
    title: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "120%",
     
    },

    // Headings
    heading: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "120%",
     
    },
    
    subheading: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "120%",
     
    },

    // Body
    bodyBase: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "140%",
    },
    bodyMedium: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "140%",
     
    },
    bodyStrong: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "140%",
     
    },
    bodyEmphasis: {
      fontFamily: "'Inter', sans-serif",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "140%",
     
    },
    bodySmall: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "1.8",
     
    },
    bodySmallStrong: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "14px",
      lineHeight: "140%",
     
    },
    bodyXSmall: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
     
    },
    bodyXXSmall: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "100%",
     
    },

    // Code
    bodyCode: {
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "100%",
     
    },
    bodyCodeSmall: {
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "100%",
     
    },
    bodyCodeXSmall: {
      fontFamily: "'Roboto Mono', monospace",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "100%",
     
    },

    // Underline & Link
    bodyUnderlined: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "140%",
      textDecoration: "underline",
     
    },
    bodyLink: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "140%",
      textDecoration: "underline",
      cursor: "pointer",
     
    },
  },
});

export default typography;
