import { Environment } from "@react-three/drei";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";

const Lights = () => {
  const { preset } = useEnvironmentPreset();

  const environmentPreset = preset === "sunset" ? "night" : "sunset";
  const preloadPreset = preset === "sunset" ? "sunset" : "night";

  return (
    <>
      <Environment preset={environmentPreset} background={false} />
      <Environment preset={preloadPreset} background={false} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
      <directionalLight position={[-3, 2, 1]} intensity={0.5} color="#ffa500" />
    </>
  );
};

export default Lights;
