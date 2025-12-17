import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { Home, CableCar, Store } from "lucide-react";
import Arc1800Scene from "@/components/Arc1800Scene";
import Loading from "@/components/Loading";
import Layout from "@/components/ui/Layout";
import { CameraNavigationProvider } from "@/contexts/CameraNavigationContext";
import { InfoButtons } from "@/components/InfoButtons";
import { BackButton } from "@/components/ui/BackButton";

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

function Arc1800Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLoadingComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 400,
    position: [3.8, 1, 98.0] as [number, number, number],
    rotation: [0, Math.PI / 0.65, 0],
  };

  const infoButtons = [
    {
      position: [3.8, 1, 98.0] as [number, number, number],
      icon: Home,
      title: "Home",
      restoreInitial: true,
    },
    {
      position: [13.0, -1.0, 96.0] as [number, number, number],
      icon: Store,
      title: "Ski Shop",
      description:
        "There are two ski shops in Arc 1800. They are located in the center of the village and at the foot of the cable car. You can rent ski equipment at both shops.",
    },
    {
      position: [18.5, -1, 101.5] as [number, number, number],
      icon: CableCar,
      title: "Ski Lodge",
      description:
        "The ski lodge is located at the foot of the cable car. It contains a restaurant and a bar, it is also the main party spot on the mountain.",
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
        <BackButton label="Arc 1800" />
        <InfoButtons items={infoButtons} />
        <Canvas camera={cameraSettings as any} shadows>
          <Suspense fallback={null}>
            <ProgressTracker
              onProgress={setLoadingProgress}
              onComplete={handleLoadingComplete}
            />
            <Arc1800Scene />
          </Suspense>
        </Canvas>
      </Layout>
    </CameraNavigationProvider>
  );
}

export default Arc1800Page;
