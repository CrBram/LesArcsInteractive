import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import Scene from "@/components/Scene";
import Loading from "@/components/Loading";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 400,
  position: [-15, 8, 115],
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
    <div className="w-full h-screen relative">
      {isLoading && (
        <Loading progress={loadingProgress} isTransitioning={isTransitioning} />
      )}
      <Canvas camera={cameraSettings as any} shadows>
        <Suspense fallback={null}>
          <ProgressTracker
            onProgress={setLoadingProgress}
            onComplete={handleLoadingComplete}
          />
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;
