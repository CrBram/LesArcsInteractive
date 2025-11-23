import { Environment } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <Environment preset="sunset" />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      <directionalLight position={[-3, 2, 1]} intensity={0.5} color="#ffa500" />

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
    </>
  );
};

export default Lights;
