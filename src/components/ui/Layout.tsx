import type { ReactNode } from "react";
import Navigation from "./Navigation";
import EnvironmentPresetSwitch from "./EnvironmentPresetSwitch";
import SoundToggle from "./SoundToggle";
import VoiceoverToggle from "./VoiceoverToggle";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen relative">
      <Navigation />
      <EnvironmentPresetSwitch />
      <VoiceoverToggle />
      <SoundToggle />
      {children}
    </div>
  );
}
