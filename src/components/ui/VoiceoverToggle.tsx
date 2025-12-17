import { useSound } from "@/contexts/SoundContext";
import { Mic, MicOff } from "lucide-react";

export default function VoiceoverToggle() {
  const { voiceoverEnabled, toggleVoiceover } = useSound();

  return (
    <div className="absolute right-4 sm:right-8 md:right-12 bottom-4 sm:bottom-8 md:bottom-12 z-40">
      <button
        type="button"
        onClick={toggleVoiceover}
        aria-label="Toggle voiceover"
        className={`w-8 h-8 rounded-full backdrop-blur-sm border flex items-center justify-center hover:bg-[#E9E9E9]/90 transition cursor-pointer ${
          voiceoverEnabled
            ? "bg-[#E9E9E9]/90 border-[#A4E3D8] border-2"
            : "bg-[#DBDBDB]/70 border-[#E9E9E9]/60"
        }`}
      >
        {voiceoverEnabled ? (
          <Mic className="w-5 h-5 text-black" />
        ) : (
          <MicOff className="w-5 h-5 text-black" />
        )}
      </button>
    </div>
  );
}
