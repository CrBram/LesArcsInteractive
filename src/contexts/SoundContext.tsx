import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import type { Audio } from "three";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  startAudio: () => void;
  registerAudio: (
    audio: Audio,
    hasStartedRef: { current: boolean }
  ) => () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioInstancesRef = useRef<
    Map<Audio, { hasStartedRef: { current: boolean } }>
  >(new Map());

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const registerAudio = useCallback(
    (audio: Audio, hasStartedRef: { current: boolean }) => {
      audioInstancesRef.current.set(audio, { hasStartedRef });

      const shouldStart =
        sessionStorage.getItem("audioStartRequested") === "true";
      if (shouldStart && soundEnabled && !hasStartedRef.current) {
        try {
          audio.play();
          hasStartedRef.current = true;
        } catch (error) {
          console.warn("Audio playback failed:", error);
        }
      }

      return () => {
        audioInstancesRef.current.delete(audio);
      };
    },
    [soundEnabled]
  );

  const startAudio = useCallback(() => {
    sessionStorage.setItem("audioStartRequested", "true");

    try {
      const unlockAudio = document.createElement("audio");
      unlockAudio.src =
        "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";
      unlockAudio.volume = 0.01;
      unlockAudio.play().catch(() => {});
    } catch (error) {}

    audioInstancesRef.current.forEach(({ hasStartedRef }, audio) => {
      if (!hasStartedRef.current && soundEnabled) {
        try {
          audio.play();
          hasStartedRef.current = true;
        } catch (error) {
          console.warn("Audio playback failed:", error);
        }
      }
    });
  }, [soundEnabled]);

  return (
    <SoundContext.Provider
      value={{ soundEnabled, toggleSound, startAudio, registerAudio }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
