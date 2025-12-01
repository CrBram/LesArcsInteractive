import { OrbitControls } from "@react-three/drei";
import { Snow } from "./scene/Snow";
import Lights from "./scene/Lights";
import { Arc2000 } from "./models/Arc2000";

const Arc2000Scene = () => {
  return (
    <>
      <color attach="background" args={["#8785B9"]} />
      <fogExp2 attach="fog" args={["#8785B9", 0.03]} />
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.5}
        target={[-6.2, 1.5, 0]}
      />
      <Lights />

      <Arc2000 />
      <Snow centerX={0} centerY={0} centerZ={0} />
    </>
  );
};

export default Arc2000Scene;
