import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Arc2000Page from "./pages/Arc2000";
import { EnvironmentPresetProvider } from "./contexts/EnvironmentPresetContext";

function App() {
  return (
    <EnvironmentPresetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arc-2000" element={<Arc2000Page />} />
        </Routes>
      </BrowserRouter>
    </EnvironmentPresetProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
