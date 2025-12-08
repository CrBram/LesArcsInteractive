import { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { AudioLoader, Audio, AudioListener } from "three";
import { useSound } from "@/contexts/SoundContext";

const SnowfallAmbient = () => {
  const { camera } = useThree();
  const { soundEnabled, registerAudio, isAudioInitialized } = useSound();
  const audioRef = useRef<Audio | null>(null);
  const listenerRef = useRef<AudioListener | null>(null);
  const hasStartedRef = useRef(false);
  const audioBuffer = useLoader(AudioLoader, "/sound/snowfall_ambient.mp3");

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
      audioRef.current.setLoop(true);
      audioRef.current.setVolume(0.4);
    }

    let unregister: (() => void) | null = null;
    if (audioRef.current) {
      unregister = registerAudio(audioRef.current, hasStartedRef);
    }

    return () => {
      if (unregister) unregister();
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
  }, [audioBuffer, camera, soundEnabled, registerAudio, isAudioInitialized]);

  useEffect(() => {
    if (!soundEnabled && audioRef.current && audioRef.current.isPlaying) {
      audioRef.current.stop();
    } else if (
      soundEnabled &&
      audioRef.current &&
      !audioRef.current.isPlaying &&
      hasStartedRef.current
    ) {
      try {
        audioRef.current.play();
      } catch (error) {
        console.warn("Audio playback failed:", error);
      }
    }
  }, [soundEnabled]);

  return null;
};

export default SnowfallAmbient;
