import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import { Snow } from "./scene/Snow";
import { LesArcs } from "./models/LesArcs";
import Lights from "./scene/Lights";
import { InfoPoint } from "./InfoPoint";
import { MountainSnow } from "lucide-react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

interface MainSceneProps {
  onAiguillesRougesClick?: () => void;
  onResetReady?: (reset: () => void) => void;
  showInfoPoints?: boolean;
  enableAzimuthConstraints?: boolean;
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
}: MainSceneProps) => {
  const navigate = useNavigate();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();
  const resetAnimationRef = useRef<gsap.core.Timeline | null>(null);

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

  return (
    <>
      <color attach="background" args={["#8785B9"]} />
      <fogExp2 attach="fog" args={["#8785B9", 0.03]} />
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
          <InfoPoint
            position={[3.238, 6.65, 129.805]}
            targetPosition={[3.238, 7.5, 132]}
            title="Aiguilles Rouges"
            icon={<MountainSnow />}
            onClick={onAiguillesRougesClick}
          />
          <InfoPoint
            position={[2.4, 4.65, 125.95]}
            targetPosition={[2.454, 5.4, 124.5]}
            title="ARC 2000"
            icon={
              <img
                src="/images/cabin_icon.svg"
                alt="Cabin"
                className="w-6 h-6"
              />
            }
            onClick={() => navigate("/arc-2000")}
          />
          <InfoPoint
            position={[-1.559, 2.016, 126.75]}
            targetPosition={[-1.505, 2.766, 126.3]}
            title="ARC 1600"
            icon={
              <img
                src="/images/cabin_icon.svg"
                alt="Cabin"
                className="w-6 h-6"
              />
            }
            onClick={() => navigate("/arc-2000")}
          />
          <InfoPoint
            position={[-1.485, 2.745, 129.501]}
            targetPosition={[-1.3, 3.795, 129.051]}
            title="ARC 1800"
            icon={
              <img
                src="/images/cabin_icon.svg"
                alt="Cabin"
                className="w-6 h-6"
              />
            }
            onClick={() => navigate("/arc-2000")}
          />
          <InfoPoint
            position={[-2.165, 1.945, 133.833]}
            targetPosition={[-2.111, 2.595, 134.383]}
            title="Vallandry 1600"
            icon={
              <img
                src="/images/cabin_icon.svg"
                alt="Cabin"
                className="w-6 h-6"
              />
            }
            onClick={() => navigate("/arc-2000")}
          />
        </>
      )}
    </>
  );
};

export default MainScene;
