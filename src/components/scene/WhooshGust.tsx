import { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { AudioLoader, Audio, AudioListener } from "three";
import { useSound } from "@/contexts/SoundContext";

let playWhooshGust: (() => void) | null = null;

export const playWhoosh = () => {
  if (playWhooshGust) {
    playWhooshGust();
  }
};

const WhooshGust = () => {
  const { camera } = useThree();
  const { soundEnabled, isAudioInitialized } = useSound();
  const audioRef = useRef<Audio | null>(null);
  const listenerRef = useRef<AudioListener | null>(null);
  const audioBuffer = useLoader(AudioLoader, "/sound/whoosh_gust.mp3");

  // Only create AudioListener after user interaction (when isAudioInitialized is true)
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
      audioRef.current.setVolume(0.15);
    }

    const play = () => {
      if (audioRef.current && soundEnabled) {
        try {
          if (audioRef.current.isPlaying) {
            audioRef.current.stop();
          }
          audioRef.current.play();
        } catch (error) {
          console.warn("Whoosh gust audio playback failed:", error);
        }
      }
    };

    playWhooshGust = play;

    return () => {
      playWhooshGust = null;
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
  }, [audioBuffer, camera, soundEnabled, isAudioInitialized]);

  useEffect(() => {
    if (!soundEnabled && audioRef.current && audioRef.current.isPlaying) {
      audioRef.current.stop();
    }
  }, [soundEnabled]);

  return null;
};

export default WhooshGust;
