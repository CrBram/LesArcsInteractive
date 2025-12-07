import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type EnvironmentPreset = "night" | "sunset";

interface EnvironmentPresetContextType {
  preset: EnvironmentPreset;
  togglePreset: () => void;
}

const EnvironmentPresetContext = createContext<
  EnvironmentPresetContextType | undefined
>(undefined);

export function EnvironmentPresetProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [preset, setPreset] = useState<EnvironmentPreset>("sunset");

  const togglePreset = () => {
    setPreset((prev) => (prev === "night" ? "sunset" : "night"));
  };

  return (
    <EnvironmentPresetContext.Provider value={{ preset, togglePreset }}>
      {children}
    </EnvironmentPresetContext.Provider>
  );
}

export function useEnvironmentPreset() {
  const context = useContext(EnvironmentPresetContext);
  if (context === undefined) {
    throw new Error(
      "useEnvironmentPreset must be used within an EnvironmentPresetProvider"
    );
  }
  return context;
}

