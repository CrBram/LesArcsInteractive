import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { AudioLoader, Audio, AudioListener } from "three";
import { useSound } from "@/contexts/SoundContext";

interface NarratorAudioProps {
  path: string;
  volume?: number;
}

export interface NarratorAudioRef {
  play: () => void;
  stop: () => void;
}

const NarratorAudio = forwardRef<NarratorAudioRef, NarratorAudioProps>(
  ({ path, volume = 0.5 }, ref) => {
    const { camera } = useThree();
    const { soundEnabled, voiceoverEnabled, isAudioInitialized } = useSound();
    const audioRef = useRef<Audio | null>(null);
    const listenerRef = useRef<AudioListener | null>(null);
    const audioBuffer = useLoader(AudioLoader, path);

    useEffect(() => {
      if (!isAudioInitialized || !audioBuffer) return;

      if (!listenerRef.current) {
        listenerRef.current = new AudioListener();
        camera.add(listenerRef.current);
      }

      if (!audioRef.current) {
        audioRef.current = new Audio(listenerRef.current);
        audioRef.current.setBuffer(audioBuffer);
        audioRef.current.setLoop(false);
        audioRef.current.setVolume(volume);
      }

      return () => {
        if (audioRef.current) {
          audioRef.current.stop();
          audioRef.current.disconnect();
          audioRef.current = null;
        }
        if (listenerRef.current) {
          camera.remove(listenerRef.current);
          listenerRef.current = null;
        }
      };
    }, [audioBuffer, camera, volume, isAudioInitialized]);

    useImperativeHandle(ref, () => ({
      play: () => {
        if (
          audioRef.current &&
          soundEnabled &&
          voiceoverEnabled &&
          isAudioInitialized
        ) {
          try {
            audioRef.current.stop();
            audioRef.current.play();
          } catch (error) {
            console.warn("Narrator audio playback failed:", error);
          }
        }
      },
      stop: () => {
        if (audioRef.current && audioRef.current.isPlaying) {
          audioRef.current.stop();
        }
      },
    }));

    useEffect(() => {
      if (
        (!soundEnabled || !voiceoverEnabled) &&
        audioRef.current &&
        audioRef.current.isPlaying
      ) {
        audioRef.current.stop();
      }
    }, [soundEnabled, voiceoverEnabled]);

    return null;
  }
);

NarratorAudio.displayName = "NarratorAudio";

export default NarratorAudio;
