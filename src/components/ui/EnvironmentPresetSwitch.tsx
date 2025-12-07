import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";
import { MoonStar, Sun } from "lucide-react";

export default function EnvironmentPresetSwitch() {
  const { preset, togglePreset } = useEnvironmentPreset();

  return (
    <button
      type="button"
      onClick={togglePreset}
      className="cursor-pointer absolute right-4 sm:right-8 md:right-12 bottom-4 sm:bottom-8 md:bottom-12 z-40 flex items-center gap-2 bg-[#DBDBDB]/70 backdrop-blur-sm rounded-full px-4 py-2 border border-[#E9E9E9]/60 text-sm font-medium text-black hover:bg-[#E9E9E9]/90 transition"
    >
      <span className="inline-block h-4 w-4">
        {preset === "night" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <MoonStar className="h-4 w-4" />
        )}
      </span>
    </button>
  );
}
