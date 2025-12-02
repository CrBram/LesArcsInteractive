import { Environment } from "@react-three/drei";

const Lights = () => {
  return (
    <>
      <Environment preset="sunset" />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      <directionalLight position={[-3, 2, 1]} intensity={0.5} color="#ffa500" />
    </>
  );
};

export default Lights;
