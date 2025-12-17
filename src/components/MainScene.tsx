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
import NarratorAudio from "./scene/NarratorAudio";
import type { NarratorAudioRef } from "./scene/NarratorAudio";
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
  onStopAiguillesRougesAudioReady?: (stopAudio: () => void) => void;
  showInfoPoints?: boolean;
  enableAzimuthConstraints?: boolean;
  shouldFlyIn?: boolean;
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
  onStopAiguillesRougesAudioReady,
  showInfoPoints = true,
  enableAzimuthConstraints = true,
  shouldFlyIn = false,
  onInfoPointHover,
}: MainSceneProps) => {
  const navigate = useNavigate();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera, scene } = useThree();
  const resetAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const flyInAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const hasFlownInRef = useRef(false);
  const narratorAudioRef = useRef<NarratorAudioRef>(null);
  const aiguillesRougesAudioRef = useRef<NarratorAudioRef>(null);
  const { preset } = useEnvironmentPreset();
  const spotlight1Ref = useRef<THREE.SpotLight>(null);
  const spotlight1TargetRef = useRef<THREE.Object3D>(null);
  const spotlight2Ref = useRef<THREE.SpotLight>(null);
  const spotlight2TargetRef = useRef<THREE.Object3D>(null);
  const spotlight3Ref = useRef<THREE.SpotLight>(null);
  const spotlight3TargetRef = useRef<THREE.Object3D>(null);

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

  useEffect(() => {
    if (onStopAiguillesRougesAudioReady) {
      const stopAudio = () => {
        if (aiguillesRougesAudioRef.current) {
          aiguillesRougesAudioRef.current.stop();
        }
      };
      onStopAiguillesRougesAudioReady(stopAudio);
    }
  }, [onStopAiguillesRougesAudioReady]);

  useEffect(() => {
    if (!shouldFlyIn || hasFlownInRef.current) return;

    const timeoutId = setTimeout(() => {
      if (!controlsRef.current || hasFlownInRef.current) return;

      hasFlownInRef.current = true;
      const orbitControls = controlsRef.current as any;

      const startPosition = new THREE.Vector3();
      camera.getWorldPosition(startPosition);

      orbitControls.target.set(...INITIAL_TARGET);
      orbitControls.update();

      orbitControls.enabled = false;

      const cameraAnim = {
        x: startPosition.x,
        y: startPosition.y,
        z: startPosition.z,
      };

      const targetAnim = {
        x: INITIAL_TARGET[0],
        y: INITIAL_TARGET[1],
        z: INITIAL_TARGET[2],
      };

      if (flyInAnimationRef.current) {
        flyInAnimationRef.current.kill();
      }

      if (narratorAudioRef.current) {
        narratorAudioRef.current.play();
      }

      const timeline = gsap.timeline({
        onUpdate: () => {
          if (!controlsRef.current) return;
          camera.position.set(cameraAnim.x, cameraAnim.y, cameraAnim.z);
          orbitControls.target.set(targetAnim.x, targetAnim.y, targetAnim.z);
          orbitControls.update();
        },
        onComplete: () => {
          if (controlsRef.current) {
            (controlsRef.current as any).enabled = true;
          }
        },
      });

      timeline.to(cameraAnim, {
        x: INITIAL_CAMERA_POSITION[0],
        y: INITIAL_CAMERA_POSITION[1],
        z: INITIAL_CAMERA_POSITION[2],
        duration: 3,
        ease: "power2.out",
      });

      timeline.to(
        targetAnim,
        {
          x: INITIAL_TARGET[0],
          y: INITIAL_TARGET[1],
          z: INITIAL_TARGET[2],
          duration: 3,
          ease: "power2.out",
        },
        "<"
      );

      flyInAnimationRef.current = timeline;
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [shouldFlyIn, camera]);

  useEffect(() => {
    if (preset === "night") {
      if (spotlight1Ref.current && spotlight1TargetRef.current) {
        spotlight1Ref.current.target = spotlight1TargetRef.current;
      }
      if (spotlight2Ref.current && spotlight2TargetRef.current) {
        spotlight2Ref.current.target = spotlight2TargetRef.current;
      }
      if (spotlight3Ref.current && spotlight3TargetRef.current) {
        spotlight3Ref.current.target = spotlight3TargetRef.current;
      }
    }
  }, [preset]);

  const handleAiguillesRougesClick = () => {
    if (aiguillesRougesAudioRef.current) {
      aiguillesRougesAudioRef.current.play();
    }
    if (onAiguillesRougesClick) {
      onAiguillesRougesClick();
    }
  };

  const infoPoints = [
    {
      position: [3.238, 6.65, 129.805] as [number, number, number],
      targetPosition: [3.238, 7.5, 132] as [number, number, number],
      title: "Aiguilles Rouges",
      iconComponent: MountainSnow,
      onClick: handleAiguillesRougesClick,
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
      <NarratorAudio
        ref={narratorAudioRef}
        path="/sound/narrations/les-arcs_welcome.mp3"
      />
      <NarratorAudio
        ref={aiguillesRougesAudioRef}
        path="/sound/narrations/aguilles_rouge_info.mp3"
      />
      {preset === "night" && (
        <>
          <spotLight
            ref={spotlight1Ref}
            position={[-1.15, 2.016, 126.75]}
            intensity={10}
            color="#ffaa44"
            distance={6}
            decay={2}
            angle={0.9}
            penumbra={0.8}
          />
          <object3D
            ref={spotlight1TargetRef}
            position={[-2.343, 1.623, 126.083]}
          />
          <spotLight
            ref={spotlight2Ref}
            position={[-1.2, 2.8, 129.501]}
            intensity={20}
            color="#ffaa44"
            distance={6}
            decay={2}
            angle={0.9}
            penumbra={0.8}
          />
          <object3D
            ref={spotlight2TargetRef}
            position={[-2.137, 2.685, 130.091]}
          />
          <spotLight
            ref={spotlight3Ref}
            position={[-1.8, 1.95, 133.5]}
            intensity={20}
            color="#ffaa44"
            distance={6}
            decay={2}
            angle={0.6}
            penumbra={0.8}
          />
          <object3D ref={spotlight3TargetRef} position={[-2.4, 1.5, 134.2]} />
          <spotLight
            position={[2.56, 4.13, 126.642]}
            intensity={30}
            color="#ffaa44"
            distance={10}
            decay={2}
            angle={0.8}
            penumbra={0.8}
          />
        </>
      )}
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
