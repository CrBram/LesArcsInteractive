import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { Home, CableCar, Store } from "lucide-react";
import Arc1600Scene from "@/components/Arc1600Scene";
import Loading from "@/components/Loading";
import Layout from "@/components/ui/Layout";
import { CameraNavigationProvider } from "@/contexts/CameraNavigationContext";
import { InfoButtons } from "@/components/InfoButtons";
import { BackButton } from "@/components/ui/BackButton";
import { useSound } from "@/contexts/SoundContext";

function ProgressTracker({
  onProgress,
  onComplete,
}: {
  onProgress: (progress: number) => void;
  onComplete: () => void;
}) {
  const { progress, active } = useProgress();

  useEffect(() => {
    onProgress(progress);
    if (!active && progress === 100) {
      setTimeout(() => {
        onComplete();
      }, 300);
    }
  }, [progress, active, onProgress, onComplete]);

  return null;
}

function Arc1600Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { voiceoverEnabled, soundEnabled } = useSound();
  const welcomeAudioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedWelcomeRef = useRef(false);

  const handleLoadingComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (isLoading || hasPlayedWelcomeRef.current) return;

    if (!welcomeAudioRef.current) {
      welcomeAudioRef.current = new Audio(
        "/sound/narrations/arc1600_welcome.mp3"
      );
      welcomeAudioRef.current.volume = 0.5;
    }

    if (voiceoverEnabled && soundEnabled) {
      welcomeAudioRef.current.currentTime = 0;
      welcomeAudioRef.current.play().catch((error) => {
        console.warn("Welcome audio playback failed:", error);
      });
      hasPlayedWelcomeRef.current = true;
    }

    return () => {
      if (welcomeAudioRef.current) {
        welcomeAudioRef.current.pause();
        welcomeAudioRef.current.currentTime = 0;
      }
    };
  }, [isLoading, voiceoverEnabled, soundEnabled]);

  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 400,
    position: [-12, 1, 315.0] as [number, number, number],
    rotation: [0, Math.PI / 0.65, 0],
  };

  const infoButtons = [
    {
      position: [-12, 1, 315.0] as [number, number, number],
      icon: Home,
      title: "Home",
      restoreInitial: true,
    },
    {
      position: [-0.5, -1.0, 312.0] as [number, number, number],
      icon: Store,
      title: "Ski Shop",
      description:
        "There is one central ski shop in Arc 1600. It is located in the center of the village. It contains a wide range of ski equipment and clothing, as well as the ability to rent ski equipment.",
    },
    {
      position: [5, -1, 316.0] as [number, number, number],
      icon: CableCar,
      title: "Ski Lodge",
      description:
        "This is the main ski lodge of Arc 1600. It is located right at the foot of the cable car.",
    },
  ];

  return (
    <CameraNavigationProvider>
      <Layout>
        {isLoading && (
          <Loading
            progress={loadingProgress}
            isTransitioning={isTransitioning}
          />
        )}
        <BackButton label="Arc 1600" />
        <InfoButtons items={infoButtons} villageName="arc1600" />
        <Canvas camera={cameraSettings as any} shadows>
          <Suspense fallback={null}>
            <ProgressTracker
              onProgress={setLoadingProgress}
              onComplete={handleLoadingComplete}
            />
            <Arc1600Scene />
          </Suspense>
        </Canvas>
      </Layout>
    </CameraNavigationProvider>
  );
}

export default Arc1600Page;
