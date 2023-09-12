import bg from "../img/bg.jpg";

export const theme = {
  colors: {
    white: "#FFFFFF",
    primary: "#663399",
    text: "#393939",
    secondary: "#DAA520",
    background: "#d4bcec",
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // variants can use custom, user-defined names\
  bg: bg,
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  // variants for buttons
  buttons: {
    primary: {
      // you can reference other values defined in the theme
      color: "white",
      bg: "primary",
    },
    secondary: {
      color: "text",
      bg: "secondary",
    },
  },
};
