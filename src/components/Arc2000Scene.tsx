import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { Snow } from "./scene/Snow";
import Lights from "./scene/Lights";
import { Arc2000 } from "./models/Arc2000";
import { MouseLook } from "./MouseLook";
import { CameraNavigator } from "./CameraNavigator";
import TownAmbience from "./scene/TownAmbience";
import SnowfallAmbient from "./scene/SnowfallAmbient";
import { useSound } from "@/contexts/SoundContext";

const Arc2000Scene = () => {
  const { gl } = useThree();
  const { startAudio } = useSound();

  // Add click handler to canvas to start audio on any click
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
      <color attach="background" args={["#8785B9"]} />
      <fogExp2 attach="fog" args={["#8785B9", 0.015]} />
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
