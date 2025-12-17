import { Suspense, useState, useEffect, useRef } from "react";
import type React from "react";
import { Canvas } from "@react-three/fiber";
import { useProgress } from "@react-three/drei";
import { useLocation } from "react-router-dom";
import MainScene from "@/components/MainScene";
import Loading from "@/components/Loading";
import Layout from "@/components/ui/Layout";
import { BackButton } from "@/components/ui/BackButton";
import { InformationCard } from "@/components/InformationCard";
import { MountainSnow } from "lucide-react";
import { Physics } from "@react-three/rapier";

const INITIAL_CAMERA_POSITION: [number, number, number] = [
  -17.105249709288742, 8.932276283830646, 128.99947616462492,
];

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

function LesArcs() {
  const location = useLocation();
  const fromLanding = location.state?.fromLanding === true;

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showAiguillesRougesButton, setShowAiguillesRougesButton] =
    useState(false);
  const [showInfoPoints, setShowInfoPoints] = useState(true);
  const [hoveredInfoPoint, setHoveredInfoPoint] = useState<{
    title: string;
    description: string;
    icon?: React.ComponentType<{ className?: string }>;
  } | null>(null);
  const resetViewRef = useRef<(() => void) | null>(null);

  const cameraSettings = {
    fov: 45,
    near: 0.1,
    far: 400,
    position: fromLanding
      ? ([
          INITIAL_CAMERA_POSITION[0],
          INITIAL_CAMERA_POSITION[1] + 50, // Start 50 units above for fly-in effect
          INITIAL_CAMERA_POSITION[2],
        ] as [number, number, number])
      : INITIAL_CAMERA_POSITION,
  };

  const handleLoadingComplete = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const handleAiguillesRougesClick = () => {
    setShowAiguillesRougesButton(true);
    setShowInfoPoints(false);
    setHoveredInfoPoint(null);
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
      {hoveredInfoPoint &&
        hoveredInfoPoint.description &&
        showInfoPoints &&
        hoveredInfoPoint.icon && (
          <InformationCard
            icon={hoveredInfoPoint.icon as any}
            title={hoveredInfoPoint.title}
            description={hoveredInfoPoint.description}
            isVisible={!!hoveredInfoPoint}
          />
        )}
      <Canvas camera={cameraSettings as any} shadows>
        <Suspense fallback={null}>
          <ProgressTracker
            onProgress={setLoadingProgress}
            onComplete={handleLoadingComplete}
          />
          <Physics>
            <MainScene
              onAiguillesRougesClick={handleAiguillesRougesClick}
              onResetReady={handleResetReady}
              showInfoPoints={showInfoPoints}
              enableAzimuthConstraints={!showAiguillesRougesButton}
              shouldFlyIn={!isLoading && fromLanding}
              onInfoPointHover={(data) => {
                setHoveredInfoPoint(data);
              }}
            />
          </Physics>
        </Suspense>
      </Canvas>
    </Layout>
  );
}

export default LesArcs;
