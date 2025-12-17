import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { Home, CableCar, Store, Bus } from "lucide-react";
import VallandryScene from "@/components/VallandryScene";
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

function VallandryPage() {
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
    position: [-12, 1, 211.0] as [number, number, number],
    rotation: [0, Math.PI / 0.65, 0],
  };

  const infoButtons = [
    {
      position: [-12, 1, 211.0] as [number, number, number],
      icon: Home,
      title: "Home",
      restoreInitial: true,
    },
    {
      position: [-0.5, -1, 209] as [number, number, number],
      icon: Store,
      title: "Ski Shop",
      description:
        "There is one central ski shop in Vallandry. It is located in the center of the village. It contains a wide range of ski equipment and clothing, as well as the ability to rent ski equipment.",
    },
    {
      position: [2, -1, 211.0] as [number, number, number],
      icon: Bus,
      title: "Bus Stop",
      description:
        "The bus stop is located in the center of Vallandry. The bus stop goes around Les Arcs and stops at the ski shops and the ski lodge.",
    },
    {
      position: [7.5, -1, 208.0] as [number, number, number],
      icon: CableCar,
      title: "Ski Lodge",
      description:
        "This is the main ski lodge of Vallandry. It is located right at the foot of the cable car. This cozy lodge is the perfect place to relax after a day on the slopes.",
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
        <BackButton label="Vallandry" />
        <InfoButtons items={infoButtons} villageName="vallandry" />
        <Canvas camera={cameraSettings as any} shadows>
          <Suspense fallback={null}>
            <ProgressTracker
              onProgress={setLoadingProgress}
              onComplete={handleLoadingComplete}
            />
            <VallandryScene />
          </Suspense>
        </Canvas>
      </Layout>
    </CameraNavigationProvider>
  );
}

export default VallandryPage;
