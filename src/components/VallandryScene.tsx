import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Snow } from "./scene/Snow";
import Lights from "./scene/Lights";
import { Vallandry } from "./models/Vallandry";
import { MouseLook } from "./MouseLook";
import { CameraNavigator } from "./CameraNavigator";
import TownAmbience from "./scene/TownAmbience";
import SnowfallAmbient from "./scene/SnowfallAmbient";
import MouseClickSound from "./scene/MouseClickSound";
import { useSound } from "@/contexts/SoundContext";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { ToneMappingMode } from "postprocessing";

const VallandryScene = () => {
  const { gl, scene } = useThree();
  const { startAudio } = useSound();
  const { preset } = useEnvironmentPreset();

  const backgroundColor = preset === "night" ? "#111024" : "#8785B9";

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
      <EffectComposer>
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        <Bloom luminanceThreshold={1.1} mipmapBlur />
      </EffectComposer>
      <fogExp2 attach="fog" args={[backgroundColor, 0.015]} />
      <Lights />
      <Vallandry />
      <Snow centerX={0} centerY={0} centerZ={0} />
      <MouseLook />
      <SnowfallAmbient />
      <TownAmbience />
      <MouseClickSound />
      <CameraNavigator />
    </>
  );
};

export default VallandryScene;
