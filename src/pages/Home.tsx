import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import MainScene from "@/components/MainScene";
import Loading from "@/components/Loading";
import Layout from "@/components/ui/Layout";
import { BackButton } from "@/components/ui/BackButton";
import { InformationCard } from "@/components/InformationCard";
import { MountainSnow } from "lucide-react";
import { useSound } from "@/contexts/SoundContext";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 400,
  position: [-17.105249709288742, 8.932276283830646, 128.99947616462492],
};

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

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showAiguillesRougesButton, setShowAiguillesRougesButton] =
    useState(false);
  const [showInfoPoints, setShowInfoPoints] = useState(true);
  const resetViewRef = useRef<(() => void) | null>(null);
  const { startAudio } = useSound();

  const handleLoadingComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleAiguillesRougesClick = () => {
    setShowAiguillesRougesButton(true);
    setShowInfoPoints(false);
  };

  const handleResetReady = (reset: () => void) => {
    resetViewRef.current = reset;
  };

  const handleBackButtonClick = () => {
    setShowAiguillesRougesButton(false);
    setShowInfoPoints(true);
    if (resetViewRef.current) {
      resetViewRef.current();
    }
  };

  return (
    <Layout>
      {isLoading && (
        <Loading progress={loadingProgress} isTransitioning={isTransitioning} />
      )}
      {showAiguillesRougesButton && (
        <BackButton label="Aiguilles Rouges" onClick={handleBackButtonClick} />
      )}
      {showAiguillesRougesButton && (
        <InformationCard
          icon={MountainSnow}
          title="Aiguilles Rouges"
          description="Aiguille Rouges (Red Peaks) is the highest mountain in the ski area of Les Arcs, it rises to 3226 metres above sea level, making it the top point of the resort. From there starts the iconic 7 km long descent down to Villaroger with a vertical drop of around 2026 metres — one of the largest in Europe. The summit can be reached by a cable-car and offers a spectacular 360° panoramic view of the Alps — including views of peaks such as Mont Blanc — and features a footbridge at the top for visitors to enjoy the scenery."
          isVisible={showAiguillesRougesButton}
        />
      )}
      <Canvas
        camera={cameraSettings as any}
        shadows
        onPointerMissed={() => {
          startAudio();
        }}
      >
        <Suspense fallback={null}>
          <ProgressTracker
            onProgress={setLoadingProgress}
            onComplete={handleLoadingComplete}
          />
          <MainScene
            onAiguillesRougesClick={handleAiguillesRougesClick}
            onResetReady={handleResetReady}
            showInfoPoints={showInfoPoints}
            enableAzimuthConstraints={!showAiguillesRougesButton}
          />
        </Suspense>
      </Canvas>
    </Layout>
  );
}

export default Home;
