import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import MainScene from "@/components/MainScene";
import Loading from "@/components/Loading";
import Layout from "@/components/ui/Layout";
import { BackButton } from "@/components/ui/BackButton";

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
      <Canvas camera={cameraSettings as any} shadows>
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
