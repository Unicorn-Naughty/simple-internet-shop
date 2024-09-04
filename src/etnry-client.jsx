import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import createApp from "./App.jsx";
(async function () {
  const app = await createApp();

  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <BrowserRouter>{app}</BrowserRouter>
    </StrictMode>
  );
})();
