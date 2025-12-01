import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { Snow } from "./scene/Snow";
import { LesArcs } from "./models/LesArcs";
import Lights from "./scene/Lights";
import { InfoPoint } from "./InfoPoint";

const MainScene = () => {
  const navigate = useNavigate();

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
      <InfoPoint
        position={[3.238, 6.65, 129.805]}
        targetPosition={[3.238, 7.5, 132]}
        title="Aiguilles Rouges"
        description="2.965m"
        icon={<img src="/images/mountain_icon.svg" />}
      />
      <InfoPoint
        position={[2.4, 4.65, 125.95]}
        targetPosition={[2.454, 5.4, 124.5]}
        title="ARC 2000"
        icon={<img src="/images/cabin_icon.svg" />}
        onClick={() => navigate("/arc-2000")}
      />
    </>
  );
};

export default MainScene;
