import { useSound } from "@/contexts/SoundContext";
import { Volume2, VolumeX } from "lucide-react";

export default function SoundToggle() {
  const { soundEnabled, toggleSound } = useSound();

  return (
    <div className="absolute right-4 sm:right-8 md:right-12 bottom-4 sm:bottom-8 md:bottom-12 z-40">
      <button
        type="button"
        onClick={toggleSound}
        aria-label="Toggle sound"
        className={`w-8 h-8 rounded-full backdrop-blur-sm border flex items-center justify-center hover:bg-[#E9E9E9]/90 transition cursor-pointer ${
          soundEnabled
            ? "bg-[#E9E9E9]/90 border-[#A4E3D8] border-2"
            : "bg-[#DBDBDB]/70 border-[#E9E9E9]/60"
        }`}
      >
        {soundEnabled ? (
          <Volume2 className="w-5 h-5 text-black" />
        ) : (
          <VolumeX className="w-5 h-5 text-black" />
        )}
      </button>
    </div>
  );
}
