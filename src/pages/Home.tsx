import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import MainScene from "@/components/MainScene";
import Loading from "@/components/Loading";
import Layout from "@/components/ui/Layout";

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

  const handleLoadingComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <Layout>
      {isLoading && (
        <Loading progress={loadingProgress} isTransitioning={isTransitioning} />
      )}
      <Canvas camera={cameraSettings as any} shadows>
        <Suspense fallback={null}>
          <ProgressTracker
            onProgress={setLoadingProgress}
            onComplete={handleLoadingComplete}
          />
          <MainScene />
        </Suspense>
      </Canvas>
    </Layout>
  );
}

export default Home;
