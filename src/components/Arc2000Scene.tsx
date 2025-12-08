import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Snow } from "./scene/Snow";
import Lights from "./scene/Lights";
import { Arc2000 } from "./models/Arc2000";
import { MouseLook } from "./MouseLook";
import { CameraNavigator } from "./CameraNavigator";
import TownAmbience from "./scene/TownAmbience";
import SnowfallAmbient from "./scene/SnowfallAmbient";
import { useSound } from "@/contexts/SoundContext";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";

const Arc2000Scene = () => {
  const { gl, scene } = useThree();
  const { startAudio } = useSound();
  const { preset } = useEnvironmentPreset();

  const backgroundColor = preset === "night" ? "#4A4870" : "#8785B9";

  useEffect(() => {
    scene.background = new THREE.Color(backgroundColor);
  }, [scene, backgroundColor]);

  useEffect(() => {
    const canvas = gl.domElement;
    const handleClick = () => {
      startAudio();
    };

    canvas.addEventListener("click", handleClick);

    return () => {
      canvas.removeEventListener("click", handleClick);
    };
  }, [gl, startAudio]);

  return (
    <>
      <fogExp2 attach="fog" args={[backgroundColor, 0.015]} />
      <Lights />
      <Arc2000 />
      <Snow centerX={0} centerY={0} centerZ={0} />
      <MouseLook />
      <SnowfallAmbient />
      <TownAmbience />
      <CameraNavigator />
    </>
  );
};

export default Arc2000Scene;
