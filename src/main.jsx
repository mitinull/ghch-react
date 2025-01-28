import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TabProvider } from "./contexts/TabContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TabProvider>
      <App />
    </TabProvider>
  </StrictMode>
);
