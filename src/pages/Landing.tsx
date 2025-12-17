import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import LandingScene from "@/components/LandingScene";
import { useSound } from "@/contexts/SoundContext";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 400,
  position: [-17.105249709288742, 8.932276283830646, 128.99947616462492],
};

function Landing() {
  const navigate = useNavigate();
  const { startAudio } = useSound();

  const handleStartExploring = () => {
    startAudio();
    navigate("/les-arcs", { state: { fromLanding: true } });
  };

  return (
    <div className="w-full h-screen relative bg-[#A4A2C7]">
      <Canvas camera={cameraSettings as any} shadows>
        <Suspense fallback={null}>
          <LandingScene />
        </Suspense>
      </Canvas>

      <div className="absolute inset-0 bg-[#E9E9E9]/30 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4">
            <img
              src="/images/les_arcs_icon.svg"
              alt="Les Arcs"
              className="w-32 h-auto"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-3xl font-bold text-[#1D1D1D]">Les Arcs</h1>
              <span className="text-xl font-medium text-[#1D1D1D] italic">
                Interactive
              </span>
            </div>
          </div>

          <button
            onClick={handleStartExploring}
            className="cursor-pointer px-8 py-3 bg-[#8DD7CA] text-[#1D1D1D] font-semibold rounded-lg hover:bg-[#7BC4B8] transition-colors duration-200 shadow-lg"
          >
            Start exploring
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
