import { OrbitControls } from "@react-three/drei";
import { Snow } from "./scene/Snow";
import { LesArcs } from "./models/LesArcs";
import Lights from "./scene/Lights";

const Scene = () => {
  return (
    <>
      <color attach="background" args={["#8785B9"]} />
      <fogExp2 attach="fog" args={["#8785B9", 0.03]} />
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.5}
        target={[0, 2.5, 127]}
      />
      <Lights />

      <LesArcs />
      <Snow centerX={0} centerY={0} centerZ={127} />
    </>
  );
};

export default Scene;
