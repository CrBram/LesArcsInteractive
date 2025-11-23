import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "@/components/Scene";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 400,
  position: [-15, 8, 115],
};

function Home() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={cameraSettings as any} shadows>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Home;
