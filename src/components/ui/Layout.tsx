import type { ReactNode } from "react";
import Navigation from "./Navigation";
import EnvironmentPresetSwitch from "./EnvironmentPresetSwitch";
import SoundToggle from "./SoundToggle";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen relative">
      <Navigation />
      <EnvironmentPresetSwitch />
      <SoundToggle />
      {children}
    </div>
  );
}
