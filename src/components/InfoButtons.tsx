import { useState, useEffect, useRef } from "react";
import { useCameraNavigation } from "@/contexts/CameraNavigationContext";
import { useSound } from "@/contexts/SoundContext";
import type { LucideIcon } from "lucide-react";
import { Info } from "lucide-react";
import { InformationCard } from "./InformationCard";
import { PlayMouseClick } from "./scene/MouseClickSound";

interface InfoButtonItem {
  position: [number, number, number];
  icon?: LucideIcon;
  title: string;
  description?: string;
  restoreInitial?: boolean;
}

interface InfoButtonsProps {
  items: InfoButtonItem[];
  villageName?: string; // e.g., "arc1800", "arc1600", "arc2000", "vallandry"
}

export function InfoButtons({ items, villageName }: InfoButtonsProps) {
  const { navigateTo, activeTarget, currentTarget } = useCameraNavigation();
  const { startAudio, voiceoverEnabled, soundEnabled } = useSound();
  const [displayedItem, setDisplayedItem] = useState<InfoButtonItem | null>(
    null
  );
  const [showHint, setShowHint] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const audioRefsRef = useRef<Map<number, HTMLAudioElement>>(new Map());
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = (item: InfoButtonItem) => {
    startAudio();
    PlayMouseClick();
    navigateTo({
      position: item.position,
      restoreInitial: item.restoreInitial,
    });
  };

  const isActive = (item: InfoButtonItem) => {
    if (currentTarget) return false;
    if (!activeTarget) return false;
    const [x1, y1, z1] = item.position;
    const [x2, y2, z2] = activeTarget.position;
    const threshold = 1;
    return (
      Math.abs(x1 - x2) < threshold &&
      Math.abs(y1 - y2) < threshold &&
      Math.abs(z1 - z2) < threshold &&
      item.restoreInitial === activeTarget.restoreInitial
    );
  };

  const activeItem = items.find((item) => isActive(item));

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const shouldShow = activeItem && activeItem.description;

    if (shouldShow) {
      if (displayedItem !== activeItem) {
        if (displayedItem) {
          timeoutRef.current = setTimeout(() => {
            setDisplayedItem(activeItem);
          }, 300);
        } else {
          setDisplayedItem(activeItem);
        }
      }
    } else {
      if (displayedItem) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedItem(null);
        }, 300);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem, displayedItem]);

  const isVisible = !!(
    displayedItem &&
    activeItem &&
    displayedItem === activeItem &&
    displayedItem.description
  );

  useEffect(() => {
    if (!villageName) return;

    let infoIndex = 0;
    items.forEach((item, index) => {
      if (item.description) {
        infoIndex++;
        const audioPath = `/sound/narrations/${villageName}_info${infoIndex}.mp3`;
        const audio = new Audio(audioPath);
        audio.volume = 0.5;
        audioRefsRef.current.set(index, audio);
      }
    });

    return () => {
      audioRefsRef.current.forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
      audioRefsRef.current.clear();
    };
  }, [items, villageName]);

  useEffect(() => {
    if (!villageName || !isVisible || !displayedItem) {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
        currentAudioRef.current = null;
      }
      return;
    }

    const itemIndex = items.findIndex((item) => item === displayedItem);
    if (itemIndex === -1) return;

    const audio = audioRefsRef.current.get(itemIndex);
    if (!audio) return;

    if (currentAudioRef.current && currentAudioRef.current !== audio) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
    }

    if (voiceoverEnabled && soundEnabled) {
      audio.currentTime = 0;
      audio.play().catch((error) => {
        console.warn("Narrator audio playback failed:", error);
      });
      currentAudioRef.current = audio;
    }
  }, [
    isVisible,
    displayedItem,
    items,
    villageName,
    voiceoverEnabled,
    soundEnabled,
  ]);

  useEffect(() => {
    if ((!voiceoverEnabled || !soundEnabled) && currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
  }, [voiceoverEnabled, soundEnabled]);

  useEffect(() => {
    return () => {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
        currentAudioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const hintTimeout = window.setTimeout(() => {
      setShowHint(false);
    }, 10000);

    return () => {
      window.clearTimeout(hintTimeout);
    };
  }, []);

  return (
    <>
      {showHint && (
        <div className="select-none absolute left-4 sm:left-8 md:left-12 bottom-22 sm:bottom-26 md:bottom-30 z-40 flex items-center gap-2 text-xs sm:text-sm text-white bg-[#2563EB]/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Info className="w-3.5 h-3.5" />
          <span>Click the buttons to navigate</span>
        </div>
      )}
      <div className="absolute left-4 sm:left-8 md:left-12 bottom-4 sm:bottom-8 md:bottom-12 z-40 flex flex-row gap-2">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(item)}
            className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full backdrop-blur-sm border flex items-center justify-center hover:bg-[#E9E9E9]/90 transition cursor-pointer ${
              isActive(item)
                ? "bg-[#E9E9E9]/90 border-[#A4E3D8] border-2"
                : "bg-[#DBDBDB]/70 border-[#E9E9E9]/60"
            } ${showHint ? "info-button-pulsate" : ""}`}
          >
            {item.icon ? (
              <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
            ) : (
              <span className="text-black text-[10px] sm:text-xs font-medium text-center px-1 sm:px-2">
                {item.title}
              </span>
            )}
          </button>
        ))}
      </div>
      {displayedItem && displayedItem.description && (
        <InformationCard
          icon={displayedItem.icon}
          title={displayedItem.title}
          description={displayedItem.description}
          isVisible={!!isVisible}
        />
      )}
    </>
  );
}
