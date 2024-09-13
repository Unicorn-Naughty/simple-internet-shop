import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import createApp from "./App.jsx";
import themeContext from "./contexts/theme.js";
(async function () {
  const app = await createApp();
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <ThemeProvider theme={themeContext}>
        <CssBaseline />
        <BrowserRouter>{app}</BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
})();
