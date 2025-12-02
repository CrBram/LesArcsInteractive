import { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import Arc2000Scene from "@/components/Arc2000Scene";
import Loading from "@/components/Loading";
import Layout from "@/components/ui/Layout";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 400,
  position: [-12.5, 1, 0],
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

function Arc2000Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

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
      <button
        type="button"
        onClick={() => navigate("/")}
        className="cursor-pointer absolute left-4 sm:left-8 md:left-12 top-22 z-40 flex items-center gap-2 bg-[#DBDBDB]/70 backdrop-blur-sm rounded-full px-3 py-2 border border-[#E9E9E9]/60 text-sm font-medium text-black hover:bg-[#E9E9E9]/90 transition"
      >
        <span className="inline-block h-4 w-4">
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M11.5 4.5L6 10l5.5 5.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>Back</span>
      </button>
      <Canvas camera={cameraSettings as any} shadows>
        <Suspense fallback={null}>
          <ProgressTracker
            onProgress={setLoadingProgress}
            onComplete={handleLoadingComplete}
          />
          <Arc2000Scene />
        </Suspense>
      </Canvas>
    </Layout>
  );
}

export default Arc2000Page;
