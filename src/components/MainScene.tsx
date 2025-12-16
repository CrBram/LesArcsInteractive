import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import type React from "react";
import { Snow } from "./scene/Snow";
import { LesArcs } from "./models/LesArcs";
import Lights from "./scene/Lights";
import SnowfallAmbient from "./scene/SnowfallAmbient";
import WhooshGust from "./scene/WhooshGust";
import MouseClickSound from "./scene/MouseClickSound";
import { InfoPoint } from "./InfoPoint";
import { MountainSnow } from "lucide-react";
import { CabinIcon } from "./icons/CabinIcon";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";

interface MainSceneProps {
  onAiguillesRougesClick?: () => void;
  onResetReady?: (reset: () => void) => void;
  showInfoPoints?: boolean;
  enableAzimuthConstraints?: boolean;
  onInfoPointHover?: (
    data: {
      title: string;
      description: string;
      icon?: React.ComponentType<{ className?: string }>;
    } | null
  ) => void;
}

const INITIAL_CAMERA_POSITION: [number, number, number] = [
  -17.105249709288742, 8.932276283830646, 128.99947616462492,
];
const INITIAL_TARGET: [number, number, number] = [
  0.02400202305203503, 3.3597511357778416, 129.852306087246,
];

const MainScene = ({
  onAiguillesRougesClick,
  onResetReady,
  showInfoPoints = true,
  enableAzimuthConstraints = true,
  onInfoPointHover,
}: MainSceneProps) => {
  const navigate = useNavigate();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera, scene } = useThree();
  const resetAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const { preset } = useEnvironmentPreset();

  const backgroundColor = preset === "night" ? "#111024" : "#8785B9";

  useEffect(() => {
    scene.background = new THREE.Color(backgroundColor);
  }, [scene, backgroundColor]);

  useEffect(() => {
    if (!controlsRef.current) return;

    if (enableAzimuthConstraints) {
      controlsRef.current.minAzimuthAngle = -Math.PI / 1;
      controlsRef.current.maxAzimuthAngle = Math.PI / 18;
    } else {
      controlsRef.current.minAzimuthAngle = -Infinity;
      controlsRef.current.maxAzimuthAngle = Infinity;
    }
    controlsRef.current.update();
  }, [enableAzimuthConstraints]);

  const resetView = () => {
    if (!controlsRef.current) return;

    if (resetAnimationRef.current) {
      resetAnimationRef.current.kill();
    }

    const orbitControls = controlsRef.current as any;
    const currentCameraPos = new THREE.Vector3();
    const currentTarget = new THREE.Vector3();
    camera.getWorldPosition(currentCameraPos);
    currentTarget.copy(orbitControls.target);

    const targetVec = new THREE.Vector3(...INITIAL_TARGET);
    const desiredCameraPos = new THREE.Vector3(...INITIAL_CAMERA_POSITION);

    const cameraAnim = {
      x: currentCameraPos.x,
      y: currentCameraPos.y,
      z: currentCameraPos.z,
    };

    const targetAnim = {
      x: currentTarget.x,
      y: currentTarget.y,
      z: currentTarget.z,
    };

    orbitControls.enabled = false;

    const timeline = gsap.timeline({
      onUpdate: () => {
        if (!controlsRef.current) return;
        camera.position.set(cameraAnim.x, cameraAnim.y, cameraAnim.z);
        orbitControls.target.set(targetAnim.x, targetAnim.y, targetAnim.z);
        orbitControls.update();
      },
      onComplete: () => {
        orbitControls.enabled = true;
      },
    });

    timeline.to(cameraAnim, {
      x: desiredCameraPos.x,
      y: desiredCameraPos.y,
      z: desiredCameraPos.z,
      duration: 2.5,
      ease: "power2.inOut",
    });

    timeline.to(
      targetAnim,
      {
        x: targetVec.x,
        y: targetVec.y,
        z: targetVec.z,
        duration: 2.5,
        ease: "power2.inOut",
      },
      "<"
    );

    resetAnimationRef.current = timeline;
  };

  useEffect(() => {
    if (onResetReady) {
      onResetReady(resetView);
    }
  }, [onResetReady]);

  const infoPoints = [
    {
      position: [3.238, 6.65, 129.805] as [number, number, number],
      targetPosition: [3.238, 7.5, 132] as [number, number, number],
      title: "Aiguilles Rouges",
      iconComponent: MountainSnow,
      onClick: onAiguillesRougesClick,
    },
    {
      position: [2.4, 4.65, 125.95] as [number, number, number],
      targetPosition: [2.454, 5.4, 124.5] as [number, number, number],
      title: "ARC 2000",
      description:
        "Arc 2000 is the highest village in Les Arcs, located at an altitude of 2000 meters. It's a modern, purpose-built resort with excellent ski-in/ski-out access and is the starting point for the cable car to Aiguilles Rouges.",
      iconComponent: CabinIcon,
      onClick: () => navigate("/arc-2000"),
    },
    {
      position: [-1.559, 2.016, 126.75] as [number, number, number],
      targetPosition: [-1.505, 2.766, 126.3] as [number, number, number],
      title: "ARC 1600",
      description:
        "Arc 1600 is the original village of Les Arcs, built in the 1960s. It's a charming, traditional-style resort with a cozy atmosphere, located at 1600 meters altitude. The village offers a mix of accommodation, restaurants, and shops.",
      iconComponent: CabinIcon,
      onClick: () => navigate("/arc-1600"),
    },
    {
      position: [-1.485, 2.745, 129.501] as [number, number, number],
      targetPosition: [-1.3, 3.795, 129.051] as [number, number, number],
      title: "ARC 1800",
      description:
        "Arc 1800 is one of the main villages in Les Arcs, situated at 1800 meters. It's a vibrant resort with a lively après-ski scene, numerous restaurants, bars, and shops. The village is well-connected to the ski area and offers great access to the slopes.",
      iconComponent: CabinIcon,
      onClick: () => navigate("/arc-1800"),
    },
    {
      position: [-2.165, 1.945, 133.833] as [number, number, number],
      targetPosition: [-2.111, 2.595, 134.383] as [number, number, number],
      title: "Vallandry 1600",
      description:
        "Vallandry is a charming village at 1600 meters altitude, part of the Les Arcs ski area. It offers a more relaxed atmosphere compared to the main Arc villages, with traditional architecture and easy access to the slopes. The village is perfect for families and those seeking a quieter mountain experience.",
      iconComponent: CabinIcon,
      onClick: () => navigate("/vallandry"),
    },
  ];

  return (
    <>
      <fogExp2 attach="fog" args={[backgroundColor, 0.03]} />
      <OrbitControls
        ref={controlsRef}
        makeDefault
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.5}
        minAzimuthAngle={-Math.PI / 1}
        maxAzimuthAngle={Math.PI / 18}
        target={INITIAL_TARGET}
        enablePan={false}
        enableRotate={true}
        enableZoom={false}
        // onChange={() => {
        //   if (controlsRef.current) {
        //     const target = controlsRef.current.target;
        //     const position = camera.position;
        //     console.log("Camera Position:", [
        //       position.x,
        //       position.y,
        //       position.z,
        //     ]);
        //     console.log("Target:", [target.x, target.y, target.z]);
        //     console.log("---");
        //   }
        // }}
      />
      <Lights />
      <SnowfallAmbient />
      <WhooshGust />
      <MouseClickSound />
      <pointLight
        position={[-1.559, 2.016, 126.75]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      <pointLight
        position={[-1.485, 2.745, 129.501]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      <pointLight
        position={[-2.165, 1.845, 133.833]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      <pointLight
        position={[2.248, 4.186, 126.642]}
        intensity={1.5}
        scale={0.2}
        color="#ffd700"
        distance={5}
        decay={2}
      />
      <LesArcs />
      <Snow centerX={0} centerY={0} centerZ={127} />
      {showInfoPoints && (
        <>
          {infoPoints.map((point, index) => {
            const IconComponent = point.iconComponent;
            return (
              <InfoPoint
                key={index}
                position={point.position}
                targetPosition={point.targetPosition}
                title={point.title}
                icon={<IconComponent className="w-6 h-6" />}
                onClick={point.onClick}
                onHoverEnter={
                  point.description && onInfoPointHover
                    ? () => {
                        onInfoPointHover({
                          title: point.title,
                          description: point.description!,
                          icon: point.iconComponent,
                        });
                      }
                    : undefined
                }
                onHoverLeave={
                  point.description && onInfoPointHover
                    ? () => {
                        onInfoPointHover(null);
                      }
                    : undefined
                }
              />
            );
          })}
        </>
      )}
    </>
  );
};

export default MainScene;
