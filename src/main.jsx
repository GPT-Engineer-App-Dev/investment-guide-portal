import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: "#FFF1E5",
  text: "#33302E",
  primary: "#990F3D",
  secondary: "#0D7680",
};

const theme = extendTheme({ 
  colors: {
    ...colors,
    background: colors.background,
    text: colors.text,
    primary: colors.primary,
    secondary: colors.secondary,
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);