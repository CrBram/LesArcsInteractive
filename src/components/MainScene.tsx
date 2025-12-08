import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Snow } from "./scene/Snow";
import { LesArcs } from "./models/LesArcs";
import Lights from "./scene/Lights";
import { InfoPoint } from "./InfoPoint";
import { MountainSnow, School } from "lucide-react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const MainScene = () => {
  const navigate = useNavigate();
  const controlsRef = useRef<OrbitControlsImpl>(null);

  return (
    <>
      <color attach="background" args={["#8785B9"]} />
      <fogExp2 attach="fog" args={["#8785B9", 0.03]} />
      <OrbitControls
        ref={controlsRef}
        makeDefault
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.5}
        target={[0.02400202305203503, 3.3597511357778416, 129.852306087246]}
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
      <InfoPoint
        position={[3.238, 6.65, 129.805]}
        targetPosition={[3.238, 7.5, 132]}
        title="Aiguilles Rouges"
        description="2.965m"
        icon={<MountainSnow />}
      />
      <InfoPoint
        position={[2.4, 4.65, 125.95]}
        targetPosition={[2.454, 5.4, 124.5]}
        title="ARC 2000"
        icon={<School />}
        onClick={() => navigate("/arc-2000")}
      />
    </>
  );
};

export default MainScene;
