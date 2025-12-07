import type { ReactNode } from "react";
import Navigation from "./Navigation";
import EnvironmentPresetSwitch from "./EnvironmentPresetSwitch";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen relative">
      <Navigation />
      <EnvironmentPresetSwitch />
      {children}
    </div>
  );
}
