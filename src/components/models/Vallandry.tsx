import { useGLTF } from "@react-three/drei";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";

export function Vallandry(props: React.ComponentPropsWithoutRef<"group">) {
  const { nodes, materials } = useGLTF("/models/Vallandry.glb") as any;
  const { preset } = useEnvironmentPreset();
  const isNight = preset === "night";
  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.078, 0, 208.391]}
        rotation={[-0.359, -1.232, 2.719]}
        scale={0.412}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0.002, -0.002, 0]}>
            <group
              position={[-12.498, 92.999, 0]}
              rotation={[-1.657, 0.013, -0.051]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Bindings_0004.geometry}
                material={materials["Bindings.007"]}
                position={[0, -0.033, -0.166]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Orange_0004.geometry}
                material={materials["ski_blue.005"]}
                position={[0, -0.022, 0.002]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_White_0004.geometry}
                material={materials["White.007"]}
                position={[0, -0.02, 0.002]}
              />
            </group>
            <group
              position={[12.501, 92.997, 0]}
              rotation={[-1.658, -0.012, 0.034]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Bindings_0004.geometry}
                material={materials["Bindings.007"]}
                position={[0, -0.033, -0.166]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Orange_0004.geometry}
                material={materials["ski_blue.005"]}
                position={[0, -0.022, 0.002]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_White_0005.geometry}
                material={materials["White.007"]}
                position={[0, -0.02, 0.002]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-2.519, 0.06, 208.389]}
        rotation={[-1.675, -0.07, -0.012]}
        scale={0.412}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0.001, -0.002]}>
            <group
              position={[-12.5, 93, -0.001]}
              rotation={[-1.657, 0.013, -0.051]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Bindings_0005.geometry}
                material={materials["Bindings.008"]}
                position={[0, -0.033, -0.166]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Core_0001.geometry}
                material={materials["Core.002"]}
                position={[0, -0.033, -0.034]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Metal_0001.geometry}
                material={materials["Metal.002"]}
                position={[0, -0.028, -0.07]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Orange_0005.geometry}
                material={materials["Orange.001"]}
                position={[0, -0.022, 0.002]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_White_0005.geometry}
                material={materials["White.008"]}
                position={[0, -0.02, 0.002]}
              />
            </group>
            <group
              position={[12.5, 93.001, -0.005]}
              rotation={[-1.658, -0.012, 0.034]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Bindings_0005.geometry}
                material={materials["Bindings.008"]}
                position={[0, -0.033, -0.166]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Core_0001.geometry}
                material={materials["Core.002"]}
                position={[0, -0.033, -0.034]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Metal_0001.geometry}
                material={materials["Metal.002"]}
                position={[0, -0.028, -0.07]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Orange_0005.geometry}
                material={materials["Orange.001"]}
                position={[0, -0.022, 0.002]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_White_0006.geometry}
                material={materials["White.008"]}
                position={[0, -0.02, 0.002]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[3.304, 1.307, 211.076]}
        rotation={[-Math.PI / 2, 0, 0.328]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material020"].geometry}
            material={materials["candle.023"]}
            position={[-0.002, -0.001, -0.439]}
          >
            {isNight && (
              <meshStandardMaterial
                color="#ffffff"
                emissive="orange"
                emissiveIntensity={10}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material020"].geometry}
            material={materials["lamp_glass.024"]}
            position={[0.114, -0.006, -0.097]}
          >
            {isNight && (
              <meshStandardMaterial
                color="#ffffff"
                emissive="orange"
                emissiveIntensity={6}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["metal-material020"].geometry}
            material={materials["metal.024"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <group
        position={[-1.464, 1.307, 212.075]}
        rotation={[-Math.PI / 2, 0, 0.046]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material021"].geometry}
            material={materials["candle.024"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material021"].geometry}
            material={materials["lamp_glass.025"]}
            position={[0.114, -0.006, -0.097]}
          >
            {isNight && (
              <meshStandardMaterial
                color="#ffffff"
                emissive="orange"
                emissiveIntensity={6}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["metal-material021"].geometry}
            material={materials["metal.025"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <group
        position={[-5.945, 1.307, 212.003]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material022"].geometry}
            material={materials["candle.025"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material022"].geometry}
            material={materials["lamp_glass.026"]}
            position={[0.114, -0.006, -0.097]}
          >
            {isNight && (
              <meshStandardMaterial
                color="#ffffff"
                emissive="orange"
                emissiveIntensity={6}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["metal-material022"].geometry}
            material={materials["metal.026"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <group
        position={[-1.993, 1.131, 207.379]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.096, 1.226, 0.096]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245.geometry}
          material={materials["Cabin.440"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_1.geometry}
          material={materials["Cabin.441"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_2.geometry}
          material={materials["Cabin.442"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_3.geometry}
          material={materials["Cabin.443"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_4.geometry}
          material={materials["Cabin.444"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_5.geometry}
          material={materials["Cabin.445"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_6.geometry}
          material={materials["Cabin.446"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_7.geometry}
          material={materials["Chimney.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_8.geometry}
          material={materials["WoodenSign.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_9.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_10.geometry}
          material={materials["Door.034"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Ground.002"]}
        position={[5.741, 0.803, 206.645]}
        rotation={[Math.PI, -1.183, Math.PI]}
        scale={-33.828}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup004.geometry}
        material={materials["Rock.004"]}
        position={[19.668, 2.074, 220.12]}
        rotation={[0, -0.64, 0]}
        scale={[8.455, 8.218, 8.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup006.geometry}
        material={materials["Rock.006"]}
        position={[28.783, 2.23, 210.237]}
        rotation={[0, -0.64, 0]}
        scale={[9.024, 8.771, 9.024]}
      />
      <group
        position={[-4.337, 2.033, 212.227]}
        rotation={[2.858, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder246.geometry}
          material={materials["LightBase.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder246_1.geometry}
          material={materials["LightRed.013"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="orange"
              emissiveIntensity={2}
            />
          )}
        </mesh>
      </group>
      <group
        position={[-4.45, 1.853, 211.534]}
        rotation={[2.921, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder247_1.geometry}
          material={materials["LightBase.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder247_2.geometry}
          material={materials["LightRed.014"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="green"
              emissiveIntensity={2}
            />
          )}
        </mesh>
      </group>
      <group
        position={[-4.556, 1.733, 210.878]}
        rotation={[2.995, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder248.geometry}
          material={materials["LightBase.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder248_1.geometry}
          material={materials["LightRed.015"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="red"
              emissiveIntensity={2}
            />
          )}
        </mesh>
      </group>
      <group
        position={[-4.675, 1.641, 210.149]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder249.geometry}
          material={materials["LightBase.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder249_1.geometry}
          material={materials["LightRed.016"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="green"
              emissiveIntensity={2}
            />
          )}
        </mesh>
      </group>
      <group
        position={[-4.799, 1.611, 209.383]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder250.geometry}
          material={materials["LightBase.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder250_1.geometry}
          material={materials["LightRed.017"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="red"
              emissiveIntensity={2}
            />
          )}
        </mesh>
      </group>
      <group
        position={[-4.918, 1.637, 208.654]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder251.geometry}
          material={materials["LightBase.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder251_1.geometry}
          material={materials["LightRed.018"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="purple"
              emissiveIntensity={2}
            />
          )}
        </mesh>
      </group>
      <group
        position={[-9.042, 1.602, 207.798]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder252.geometry}
          material={materials["TrunkBrown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder252_1.geometry}
          material={materials["LeafGreen.031"]}
        />
      </group>
      <group
        position={[-9.013, 1.537, 213.262]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder253.geometry}
          material={materials["TrunkBrown.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder253_1.geometry}
          material={materials["LeafGreen.032"]}
        />
      </group>
      <group
        position={[15.443, 1.542, 205.398]}
        rotation={[-0.021, -0.385, -0.008]}
        scale={[0.285, 0.324, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder256.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder256_1.geometry}
          material={materials["LeafGreen.035"]}
        />
      </group>
      <group
        position={[3.84, 1.582, 212.506]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.328, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder257.geometry}
          material={materials["TrunkBrown.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder257_1.geometry}
          material={materials["LeafGreen.036"]}
        />
      </group>
      <group
        position={[7.116, 1.63, 206.133]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.324, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder258.geometry}
          material={materials["TrunkBrown.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder258_1.geometry}
          material={materials["LeafGreen.037"]}
        />
      </group>
      <group
        position={[-0.773, 1.838, 213.455]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.389, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder259.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder259_1.geometry}
          material={materials["LeafGreen.038"]}
        />
      </group>
      <group
        position={[0.425, 1.904, 207.885]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.389, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder260.geometry}
          material={materials["TrunkBrown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder260_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2015.geometry}
        material={materials["Fence.046"]}
        position={[0.291, 0.24, 208.497]}
        rotation={[-0.087, -1.431, -0.105]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2016.geometry}
        material={materials["Fence.047"]}
        position={[12.082, 0.104, 208.169]}
        rotation={[-0.013, 0.44, -0.013]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2017.geometry}
        material={materials["Fence.048"]}
        position={[12.016, 0.083, 206.778]}
        rotation={[-0.013, -0.406, -0.024]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2018.geometry}
        material={materials["Fence.049"]}
        position={[3.209, 0.102, 211.69]}
        rotation={[-0.098, -1.446, -0.116]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2019.geometry}
        material={materials["Fence.050"]}
        position={[-0.133, 0.083, 212.743]}
        rotation={[-3.006, -1.481, -3.025]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2020.geometry}
        material={materials["Fence.051"]}
        position={[-1.621, 0.104, 212.781]}
        rotation={[-0.087, -1.431, -0.105]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1017.geometry}
        material={materials["Fence.052"]}
        position={[-0.427, 0.239, 208.476]}
        rotation={[Math.PI, -1.48, Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1018.geometry}
        material={materials["Fence.053"]}
        position={[1.04, 0.243, 208.319]}
        rotation={[0, -1.31, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1019.geometry}
        material={materials["Fence.054"]}
        position={[12.567, 0.102, 208.825]}
        rotation={[0, 0.676, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1020.geometry}
        material={materials["Fence.055"]}
        position={[11.889, 0.106, 207.457]}
        rotation={[0, 0.081, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1021.geometry}
        material={materials["Fence.056"]}
        position={[2.524, 0.102, 211.821]}
        rotation={[0, -1.392, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1022.geometry}
        material={materials["Fence.057"]}
        position={[3.899, 0.106, 211.722]}
        rotation={[Math.PI, -1.373, Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1023.geometry}
        material={materials["Fence.058"]}
        position={[-0.88, 0.106, 212.723]}
        rotation={[0, -1.482, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1024.geometry}
        material={materials["Fence.059"]}
        position={[-2.363, 0.102, 212.856]}
        rotation={[0, -1.482, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <group
        position={[-7.436, 0.845, 207.563]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261.geometry}
          material={materials["Cabin.447"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_1.geometry}
          material={materials["Cabin.448"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_2.geometry}
          material={materials["Cabin.449"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_3.geometry}
          material={materials["Cabin.450"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_4.geometry}
          material={materials["Cabin.451"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_5.geometry}
          material={materials["Cabin.452"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_6.geometry}
          material={materials["Cabin.453"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_7.geometry}
          material={materials["Chimney.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_8.geometry}
          material={materials["Door.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_9.geometry}
          material={materials["Material.045"]}
        />
      </group>
      <group
        position={[5.18, 0.765, 210.933]}
        rotation={[2, -0.31, 0.983]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262.geometry}
          material={materials["Cabin.454"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_1.geometry}
          material={materials["Cabin.455"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_2.geometry}
          material={materials["Cabin.456"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_3.geometry}
          material={materials["Cabin.457"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_4.geometry}
          material={materials["Cabin.458"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_5.geometry}
          material={materials["Cabin.459"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_6.geometry}
          material={materials["Cabin.460"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_7.geometry}
          material={materials["Chimney.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_8.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_9.geometry}
          material={materials["Door.036"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder230.geometry}
        material={materials["Lantern.045"]}
        position={[3.383, 0.774, 211.315]}
        rotation={[-Math.PI, -0.851, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder231.geometry}
        material={materials["Lantern.045"]}
        position={[3.333, 1.583, 211.168]}
        rotation={[-1.387, -0.493, 0.374]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder232.geometry}
        material={materials["Lantern.046"]}
        position={[-1.461, 1.583, 212.172]}
        rotation={[-1.544, -0.523, 0.053]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder233.geometry}
        material={materials["Lantern.046"]}
        position={[-1.454, 0.774, 212.327]}
        rotation={[-Math.PI, -0.569, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder234.geometry}
        material={materials["Lantern.047"]}
        position={[-5.947, 0.774, 212.255]}
        rotation={[-Math.PI, -Math.PI / 6, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder235.geometry}
        material={materials["Lantern.047"]}
        position={[-5.947, 1.583, 212.099]}
        rotation={[-Math.PI / 2, -Math.PI / 6, 0]}
        scale={[0.03, 0.162, 0.03]}
      />
      <group
        position={[-4.259, 1.058, 213.888]}
        rotation={[2.094, 0.009, 1.586]}
        scale={[0.096, 1.226, 0.096]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272.geometry}
          material={materials["Cabin.468"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_1.geometry}
          material={materials["Cabin.469"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_2.geometry}
          material={materials["Cabin.470"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_3.geometry}
          material={materials["Cabin.471"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_4.geometry}
          material={materials["Cabin.472"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_5.geometry}
          material={materials["Cabin.473"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_6.geometry}
          material={materials["Cabin.474"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_7.geometry}
          material={materials["Chimney.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_8.geometry}
          material={materials["Material.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_9.geometry}
          material={materials["Door.038"]}
        />
      </group>
      <group
        position={[-7.388, 0.781, 213.642]}
        rotation={[2.094, 0.009, 1.586]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273.geometry}
          material={materials["Cabin.475"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_1.geometry}
          material={materials["Cabin.476"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_2.geometry}
          material={materials["Cabin.477"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_3.geometry}
          material={materials["Cabin.478"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_4.geometry}
          material={materials["Cabin.479"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_5.geometry}
          material={materials["Cabin.480"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_6.geometry}
          material={materials["Cabin.481"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_7.geometry}
          material={materials["Chimney.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_8.geometry}
          material={materials["Door.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_9.geometry}
          material={materials["Material.049"]}
        />
      </group>
      <group
        position={[4.811, 0.823, 205.821]}
        rotation={[1.106, 0.25, -2.029]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275.geometry}
          material={materials["Cabin.489"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_1.geometry}
          material={materials["Cabin.490"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_2.geometry}
          material={materials["Cabin.491"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_3.geometry}
          material={materials["Cabin.492"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_4.geometry}
          material={materials["Cabin.493"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_5.geometry}
          material={materials["Cabin.494"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_6.geometry}
          material={materials["Cabin.495"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_7.geometry}
          material={materials["Chimney.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_8.geometry}
          material={materials["Material.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_9.geometry}
          material={materials["Door.041"]}
        />
      </group>
      <group
        position={[2.183, 0.84, 207.098]}
        rotation={[1.072, 0.165, -1.864]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276.geometry}
          material={materials["Cabin.496"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_1.geometry}
          material={materials["Cabin.497"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_2.geometry}
          material={materials["Cabin.498"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_3.geometry}
          material={materials["Cabin.499"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_4.geometry}
          material={materials["Cabin.500"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_5.geometry}
          material={materials["Cabin.501"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_6.geometry}
          material={materials["Cabin.502"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_7.geometry}
          material={materials["Chimney.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_8.geometry}
          material={materials["Material.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_9.geometry}
          material={materials["Door.042"]}
        />
      </group>
      <group
        position={[-4.946, 0.845, 207.563]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277.geometry}
          material={materials["Cabin.503"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_1.geometry}
          material={materials["Cabin.504"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_2.geometry}
          material={materials["Cabin.505"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_3.geometry}
          material={materials["Cabin.506"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_4.geometry}
          material={materials["Cabin.507"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_5.geometry}
          material={materials["Cabin.508"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_6.geometry}
          material={materials["Cabin.509"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_7.geometry}
          material={materials["Chimney.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_8.geometry}
          material={materials["Material.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_9.geometry}
          material={materials["Door.043"]}
        />
      </group>
      <group
        position={[6.824, 1.294, 208.094]}
        rotation={[0, -0.221, 0]}
        scale={[1.379, 0.057, 1.594]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials["Cabin.510"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_1.geometry}
          material={materials["Chimney.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_2.geometry}
          material={materials["Cabin.511"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_3.geometry}
          material={materials["Cabin.512"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_4.geometry}
          material={materials["Cabin.513"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_5.geometry}
          material={materials["Cabin.514"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_6.geometry}
          material={materials["Cabin.515"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_7.geometry}
          material={materials["Cabin.516"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_8.geometry}
          material={materials["Cabin.517"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_9.geometry}
          material={materials["Cabin.518"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_10.geometry}
          material={materials["Cabin.519"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_11.geometry}
          material={materials["Cabin.520"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_12.geometry}
          material={materials["Cabin.521"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_13.geometry}
          material={materials["Cabin.522"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_14.geometry}
          material={materials["Cabin.523"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_15.geometry}
          material={materials["Cabin.524"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_16.geometry}
          material={materials["Door.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_17.geometry}
          material={materials["Material.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_18.geometry}
          material={materials["CabinFence.081"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_19.geometry}
          material={materials["CabinFence.082"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_20.geometry}
          material={materials["CabinFence.083"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_21.geometry}
          material={materials["CabinFence.084"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_22.geometry}
          material={materials["CabinFence.085"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_23.geometry}
          material={materials["CabinFence.086"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_24.geometry}
          material={materials["CabinFence.087"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_25.geometry}
          material={materials["CabinFence.088"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_26.geometry}
          material={materials["Cabin.525"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_27.geometry}
          material={materials["Cabin.526"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_28.geometry}
          material={materials["Cabin.527"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_29.geometry}
          material={materials["Cabin.528"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_30.geometry}
          material={materials["Cabin.529"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_31.geometry}
          material={materials["Cabin.530"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_32.geometry}
          material={materials["Cabin.531"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_33.geometry}
          material={materials["Cabin.532"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_34.geometry}
          material={materials["Cabin.533"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_35.geometry}
          material={materials["Cabin.534"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_36.geometry}
          material={materials["Cabin.535"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube069_37.geometry}
          material={materials["Cabin.536"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024.geometry}
        material={materials["Material.056"]}
        position={[24.864, 8.246, 214.29]}
        rotation={[Math.PI, -1.362, Math.PI]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["Material.057"]}
        position={[22.225, 9.591, 219.135]}
        rotation={[Math.PI, -1.362, Math.PI]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials["Material.058"]}
        position={[25.925, 6.803, 210.074]}
        rotation={[0, -0.992, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials["Material.059"]}
        position={[21.742, 2.937, 206.612]}
        rotation={[0, 0.08, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials["Material.060"]}
        position={[15.246, 0.917, 206.997]}
        rotation={[0, 0.136, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <group
        position={[18.179, 1.357, 206.576]}
        rotation={[-Math.PI / 2, 0, 1.688]}
        scale={0.007}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.002, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4006.geometry}
              material={materials["03___Default.006"]}
              position={[2.133, 31.72, 5.042]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5006.geometry}
              material={materials["07___Default.006"]}
              position={[0.06, 20.437, 4.063]}
            />
          </group>
        </group>
      </group>
      <group
        position={[22.713, 8.807, 217.675]}
        rotation={[-Math.PI / 2, 0, 2.629]}
        scale={0.007}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.002, 0, 0.001]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4007.geometry}
              material={materials["03___Default.007"]}
              position={[2.134, 31.72, 5.042]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5007.geometry}
              material={materials["07___Default.007"]}
              position={[0.062, 20.437, 4.063]}
            />
          </group>
        </group>
      </group>
      <group
        position={[25.755, 7.034, 211.62]}
        rotation={[-Math.PI / 2, 0, -0.283]}
        scale={0.007}
      >
        <group position={[0, 0.002, 0]}>
          <group position={[0, 0.002, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.001, 0, -0.002]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4008.geometry}
                material={materials["03___Default.008"]}
                position={[2.133, 31.72, 5.042]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5008.geometry}
                material={materials["07___Default.008"]}
                position={[0.66, 21.498, 3.988]}
              />
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary025.geometry}
        material={materials["Cable.002"]}
        position={[22.925, 6.034, 210.922]}
        rotation={[0, -0.388, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary026.geometry}
        material={materials["Cable.002"]}
        position={[22.715, 6.043, 211.09]}
        rotation={[0, -0.388, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary027.geometry}
        material={materials["LightsCable.002"]}
        position={[-4.606, 1.826, 210.566]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary029.geometry}
        material={materials["Lantern.049"]}
        position={[3.304, 1.533, 211.076]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary030.geometry}
        material={materials["Lantern.050"]}
        position={[-1.464, 1.533, 212.074]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary031.geometry}
        material={materials["Lantern.051"]}
        position={[-1.464, 1.533, 212.074]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary032.geometry}
        material={materials["Lantern.047"]}
        position={[-5.946, 1.533, 212.003]}
      />
      <group
        position={[5.121, 1.307, 209.179]}
        rotation={[-Math.PI / 2, 0, 1.123]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material023"].geometry}
            material={materials["candle.026"]}
            position={[-0.001, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material023"].geometry}
            material={materials["lamp_glass.027"]}
            position={[0.114, -0.006, -0.097]}
          >
            {isNight && (
              <meshStandardMaterial
                color="#ffffff"
                emissive="orange"
                emissiveIntensity={6}
              />
            )}
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["metal-material023"].geometry}
            material={materials["metal.027"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder236.geometry}
        material={materials["Lantern.052"]}
        position={[5.348, 0.774, 209.29]}
        rotation={[0, -1.495, Math.PI]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder239.geometry}
        material={materials["Lantern.052"]}
        position={[5.208, 1.583, 209.223]}
        rotation={[-1.091, -0.218, 1.177]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary033.geometry}
        material={materials["Lantern.053"]}
        position={[5.121, 1.533, 209.18]}
        rotation={[0.001, 0.779, -0.042]}
      />
      <group
        position={[1.231, 0.848, 212.725]}
        rotation={[-2.272, 0.474, -1.061]}
        scale={[0.037, 0.123, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287.geometry}
          material={materials["Cabin.572"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287_1.geometry}
          material={materials["WoodenSign.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287_2.geometry}
          material={materials["Cabin.573"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287_3.geometry}
          material={materials["Cabin.574"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287_4.geometry}
          material={materials["Cabin.575"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287_5.geometry}
          material={materials["Cabin.576"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287_6.geometry}
          material={materials["Cabin.577"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287_7.geometry}
          material={materials["Cabin.578"]}
        />
      </group>
      <group
        position={[3.84, 1.582, 213.19]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.328, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder293.geometry}
          material={materials["TrunkBrown.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder293_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[3.459, 1.353, 213.092]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.238, 0.274, 0.238]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder294.geometry}
          material={materials["TrunkBrown.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder294_1.geometry}
          material={materials["LeafGreen.041"]}
        />
      </group>
      <group
        position={[0.439, 1.353, 213.284]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.238, 0.274, 0.238]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder295.geometry}
          material={materials["TrunkBrown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder295_1.geometry}
          material={materials["LeafGreen.042"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1025.geometry}
        material={materials["Fence.060"]}
        position={[2.156, 0.102, 212.309]}
        rotation={[0, -0.172, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <group
        position={[-6.211, 0.231, 207.89]}
        rotation={[1.555, 0, 0]}
        scale={0.041}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0008.geometry}
            material={materials["barrel_wood.008"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0008.geometry}
            material={materials["Metall_rings.008"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
      <group
        position={[-3.772, 0.153, 212.663]}
        rotation={[1.555, 0, 0]}
        scale={0.041}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0009.geometry}
            material={materials["barrel_wood.009"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0009.geometry}
            material={materials["Metall_rings.009"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
      <group
        position={[3.873, 0.103, 211.206]}
        rotation={[-3.097, 0, 0]}
        scale={0.041}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0010.geometry}
            material={materials["barrel_wood.010"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0010.geometry}
            material={materials["Metall_rings.010"]}
            position={[0, -0.012, 0]}
          />
        </group>
      </group>
      <group
        position={[6.301, 0.137, 207.331]}
        rotation={[1.589, -0.067, -2.97]}
        scale={0.041}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0011.geometry}
            material={materials["barrel_wood.011"]}
            position={[0.086, 0, -0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0011.geometry}
            material={materials["Metall_rings.011"]}
            position={[0, -0.013, -0.001]}
          />
        </group>
      </group>
      <group
        position={[-4.453, 0.188, 208.437]}
        rotation={[1.589, -0.067, -2.97]}
        scale={0.041}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 0.001]}>
            <group position={[0, 0, 0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrel_body_barrel_wood_0012.geometry}
                material={materials["barrel_wood.012"]}
                position={[0.086, 0, 0]}
              />
            </group>
            <group position={[0, 0, 0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rings_Metall_rings_0012.geometry}
                material={materials["Metall_rings.012"]}
                position={[0, -0.013, 0]}
              />
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1037.geometry}
        material={materials["Fence.091"]}
        position={[6.003, 0.102, 208.248]}
        rotation={[Math.PI, -1.37, Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
    </group>
  );
}

useGLTF.preload("/models/Vallandry.glb");
