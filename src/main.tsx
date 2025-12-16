import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Landing from "./pages/Landing";
import LesArcs from "./pages/LesArcs";
import Arc2000Page from "./pages/Arc2000";
import Arc1800Page from "./pages/Arc1800";
import Arc1600Page from "./pages/Arc1600";
import VallandryPage from "./pages/Vallandry";
import { EnvironmentPresetProvider } from "./contexts/EnvironmentPresetContext";
import { SoundProvider } from "./contexts/SoundContext";

function App() {
  return (
    <EnvironmentPresetProvider>
      <SoundProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/les-arcs" element={<LesArcs />} />
            <Route path="/arc-2000" element={<Arc2000Page />} />
            <Route path="/arc-1800" element={<Arc1800Page />} />
            <Route path="/arc-1600" element={<Arc1600Page />} />
            <Route path="/vallandry" element={<VallandryPage />} />
          </Routes>
        </BrowserRouter>
      </SoundProvider>
    </EnvironmentPresetProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
