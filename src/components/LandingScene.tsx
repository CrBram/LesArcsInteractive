import { useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Physics } from "@react-three/rapier";
import { LesArcs } from "./models/LesArcs";
import Lights from "./scene/Lights";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";

const INITIAL_CAMERA_POSITION: [number, number, number] = [
  -17.105249709288742, 8.932276283830646, 128.99947616462492,
];
const INITIAL_TARGET: [number, number, number] = [
  0.02400202305203503, 3.3597511357778416, 129.852306087246,
];

const dx = INITIAL_CAMERA_POSITION[0] - INITIAL_TARGET[0];
const dz = INITIAL_CAMERA_POSITION[2] - INITIAL_TARGET[2];
const initialAngle = Math.atan2(dz, dx);
const radius = Math.sqrt(dx * dx + dz * dz);

const LandingScene = () => {
  const { camera, scene } = useThree();
  const { preset } = useEnvironmentPreset();
  const rotationRef = useRef(initialAngle);

  const backgroundColor = preset === "night" ? "#111024" : "#8785B9";

  useEffect(() => {
    scene.background = new THREE.Color("#A4A2C7");
    camera.position.set(...INITIAL_CAMERA_POSITION);
    camera.lookAt(...INITIAL_TARGET);

    const timer = setTimeout(() => {
      scene.background = new THREE.Color(backgroundColor);
    }, 100);

    return () => clearTimeout(timer);
  }, [scene, backgroundColor, camera]);

  useFrame((_state, delta) => {
    rotationRef.current += delta * 0.1;

    const height = INITIAL_CAMERA_POSITION[1];
    const centerX = INITIAL_TARGET[0];
    const centerZ = INITIAL_TARGET[2];

    const x = centerX + radius * Math.cos(rotationRef.current);
    const z = centerZ + radius * Math.sin(rotationRef.current);

    camera.position.set(x, height, z);
    camera.lookAt(...INITIAL_TARGET);
  });

  return (
    <>
      <fogExp2 attach="fog" args={[backgroundColor, 0.03]} />
      <Lights />
      <Physics>
        <LesArcs />
      </Physics>
    </>
  );
};

export default LandingScene;
