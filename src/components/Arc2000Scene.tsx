import { Snow } from "./scene/Snow";
import Lights from "./scene/Lights";
import { Arc2000 } from "./models/Arc2000";
import { MouseLook } from "./MouseLook";
import { CameraNavigator } from "./CameraNavigator";
import TownAmbience from "./scene/TownAmbience";
import SnowfallAmbient from "./scene/SnowfallAmbient";

const Arc2000Scene = () => {
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
