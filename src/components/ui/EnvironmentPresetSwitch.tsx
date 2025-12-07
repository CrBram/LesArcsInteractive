import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";
import { MoonStar, Sun } from "lucide-react";

export default function EnvironmentPresetSwitch() {
  const { preset, togglePreset } = useEnvironmentPreset();
  const isNight = preset === "night";

  return (
    <div className="absolute right-4 sm:right-8 md:right-12 bottom-4 sm:bottom-8 md:bottom-12 z-40">
      <input
        type="checkbox"
        id="environment-preset-toggle"
        className="toggle-checkbox"
        onChange={togglePreset}
        checked={isNight}
        aria-label="Toggle environment preset"
      />
      <label htmlFor="environment-preset-toggle" className="toggle-label">
        <Sun
          className={`sun-icon h-4 w-4 transition-colors ${
            isNight ? "text-black/40" : "text-black"
          }`}
        />
        <MoonStar
          className={`moon-icon h-4 w-4 transition-colors ${
            isNight ? "text-black" : "text-black/40"
          }`}
        />
      </label>
    </div>
  );
}
