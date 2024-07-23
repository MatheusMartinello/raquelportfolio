import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { App } from "./App";
import BottomOfPage from "./components/BottomOfPage/BottomOfPage";
import GrayLines from "./components/GrayLines/GrayLines";
import NavBar from "./components/NavBar/NavBar";
import "./style.css";
import { theme } from "./styles/theme";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <a
        href="https://wa.me/message/D47343AJPSTPG1"
        className="float"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
      <Box textAlign="center" fontSize="xl">
        <div>
          <BrowserRouter>
            <NavBar />
            <GrayLines>
              <App />
            </GrayLines>
          </BrowserRouter>
        </div>
        <BottomOfPage />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
