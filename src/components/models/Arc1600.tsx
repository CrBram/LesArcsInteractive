import { useGLTF } from "@react-three/drei";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";

export function Arc1600(props: React.ComponentPropsWithoutRef<"group">) {
  const { nodes, materials } = useGLTF("/models/Arc1600.glb") as any;
  const { preset } = useEnvironmentPreset();
  const isNight = preset === "night";
  return (
    <group {...props} dispose={null}>
      <group
        position={[4.702, 1.307, 312.729]}
        rotation={[-Math.PI / 2, 0, 2.283]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material019"].geometry}
            material={materials["candle.027"]}
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
            geometry={nodes["lamp_glass-material019"].geometry}
            material={materials["lamp_glass.028"]}
            position={[0.113, -0.006, -0.097]}
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
            geometry={nodes["metal-material019"].geometry}
            material={materials["metal.028"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <group
        position={[-5.945, 1.307, 315.782]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material024"].geometry}
            material={materials["candle.028"]}
            position={[-0.002, 0, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material024"].geometry}
            material={materials["lamp_glass.029"]}
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
            geometry={nodes["metal-material024"].geometry}
            material={materials["metal.029"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <group
        position={[-1.464, 1.307, 315.854]}
        rotation={[-Math.PI / 2, 0, 0.046]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material025"].geometry}
            material={materials["candle.029"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material025"].geometry}
            material={materials["lamp_glass.030"]}
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
            geometry={nodes["metal-material025"].geometry}
            material={materials["metal.030"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <group
        position={[5.029, 1.307, 316.556]}
        rotation={[-Math.PI / 2, 0, 0.932]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material026"].geometry}
            material={materials["candle.030"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material026"].geometry}
            material={materials["lamp_glass.031"]}
            position={[0.113, -0.006, -0.097]}
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
            geometry={nodes["metal-material026"].geometry}
            material={materials["metal.031"]}
            position={[0.001, -0.001, 0.536]}
          />
        </group>
      </group>
      <group
        position={[-2.506, 0.06, 311.903]}
        rotation={[-1.666, -0.082, 0.11]}
        scale={0.412}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0.001, 0.001]}>
            <group
              position={[-12.5, 93.001, -0.002]}
              rotation={[-1.657, 0.013, -0.051]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Bindings_0006.geometry}
                material={materials["Bindings.009"]}
                position={[0, -0.033, -0.166]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Metal_0002.geometry}
                material={materials["Metal.003"]}
                position={[0, -0.028, -0.07]}
              />
              <group position={[0.215, -0.021, -0.122]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ski_L_Orange_0007.geometry}
                  material={materials["Orange.003"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ski_L_Orange_0007_1.geometry}
                  material={materials["Core.003"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ski_L_Orange_0007_2.geometry}
                  material={materials["Bindings.009"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ski_L_Orange_0007_3.geometry}
                  material={materials["White.009"]}
                />
              </group>
            </group>
            <group
              position={[12.5, 93.001, -0.002]}
              rotation={[-1.658, -0.012, 0.034]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Metal_0002.geometry}
                material={materials["Metal.003"]}
                position={[0, -0.028, -0.07]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_White_0007.geometry}
                material={materials["White.009"]}
                position={[0, -0.02, 0.002]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-2.106, 1.131, 310.848]}
        rotation={[1.05, 0.054, -1.664]}
        scale={[0.096, 1.226, 0.096]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296.geometry}
          material={materials["Cabin.579"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_1.geometry}
          material={materials["Cabin.580"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_2.geometry}
          material={materials["Cabin.581"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_3.geometry}
          material={materials["Cabin.582"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_4.geometry}
          material={materials["Cabin.583"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_5.geometry}
          material={materials["Cabin.584"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_6.geometry}
          material={materials["Cabin.585"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_7.geometry}
          material={materials["Chimney.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_8.geometry}
          material={materials["WoodenSign.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_9.geometry}
          material={materials["Material.061"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_10.geometry}
          material={materials["Door.046"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Ground.003"]}
        position={[6.579, 0.803, 320.947]}
        rotation={[0, -1.262, 0]}
        scale={-33.828}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup007.geometry}
        material={materials["Rock.007"]}
        position={[26.559, 2.23, 308.918]}
        rotation={[0, 0.057, 0]}
        scale={[9.024, 8.771, 9.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup008.geometry}
        material={materials["Rock.008"]}
        position={[25.908, 2.074, 322.347]}
        rotation={[0, 0.057, 0]}
        scale={[8.455, 8.218, 8.455]}
      />
      <group
        position={[-4.918, 1.637, 312.433]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder297.geometry}
          material={materials["LightBase.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder297_1.geometry}
          material={materials["LightRed.019"]}
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
        position={[-4.799, 1.611, 313.163]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder298.geometry}
          material={materials["LightBase.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder298_1.geometry}
          material={materials["LightRed.020"]}
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
        position={[-4.675, 1.641, 313.928]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder299.geometry}
          material={materials["LightBase.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder299_1.geometry}
          material={materials["LightRed.021"]}
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
        position={[-4.556, 1.733, 314.657]}
        rotation={[2.995, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder300.geometry}
          material={materials["LightBase.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder300_1.geometry}
          material={materials["LightRed.022"]}
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
        position={[-4.45, 1.853, 315.313]}
        rotation={[2.921, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder301.geometry}
          material={materials["LightBase.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder301_1.geometry}
          material={materials["LightRed.023"]}
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
        position={[-4.337, 2.033, 316.006]}
        rotation={[2.858, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder302.geometry}
          material={materials["LightBase.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder302_1.geometry}
          material={materials["LightRed.024"]}
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
        position={[2.456, 1.353, 320.597]}
        rotation={[-0.023, -0.578, -0.013]}
        scale={[0.238, 0.274, 0.238]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder303.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder303_1.geometry}
          material={materials["LeafGreen.043"]}
        />
      </group>
      <group
        position={[0.096, 1.904, 310.31]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.389, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder304.geometry}
          material={materials["TrunkBrown.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder304_1.geometry}
          material={materials["LeafGreen.044"]}
        />
      </group>
      <group
        position={[1.594, 1.838, 320.076]}
        rotation={[-0.023, -0.578, -0.013]}
        scale={[0.285, 0.389, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder305.geometry}
          material={materials["TrunkBrown.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder305_1.geometry}
          material={materials["LeafGreen.045"]}
        />
      </group>
      <group
        position={[7.116, 1.63, 309.912]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.324, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder306.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder306_1.geometry}
          material={materials["LeafGreen.046"]}
        />
      </group>
      <group
        position={[3.84, 1.582, 320.219]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.328, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder307.geometry}
          material={materials["TrunkBrown.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder307_1.geometry}
          material={materials["LeafGreen.047"]}
        />
      </group>
      <group
        position={[13.222, 1.542, 313.766]}
        rotation={[-0.02, 0.311, 0.006]}
        scale={[0.285, 0.324, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder308.geometry}
          material={materials["TrunkBrown.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder308_1.geometry}
          material={materials["LeafGreen.048"]}
        />
      </group>
      <group
        position={[3.459, 1.353, 320.805]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.238, 0.274, 0.238]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder309.geometry}
          material={materials["TrunkBrown.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder309_1.geometry}
          material={materials["LeafGreen.049"]}
        />
      </group>
      <group
        position={[3.84, 1.582, 320.903]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.328, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder310.geometry}
          material={materials["TrunkBrown.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder310_1.geometry}
          material={materials["LeafGreen.050"]}
        />
      </group>
      <group
        position={[-9.013, 1.537, 317.041]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder311.geometry}
          material={materials["TrunkBrown.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder311_1.geometry}
          material={materials["LeafGreen.051"]}
        />
      </group>
      <group
        position={[-9.042, 1.602, 311.577]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder312.geometry}
          material={materials["TrunkBrown.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder312_1.geometry}
          material={materials["LeafGreen.052"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2021.geometry}
        material={materials["Fence.061"]}
        position={[-1.894, 0.19, 316.561]}
        rotation={[-0.081, -1.431, -0.098]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2022.geometry}
        material={materials["Fence.062"]}
        position={[-0.55, 0.163, 316.895]}
        rotation={[-3.129, -0.525, 3.13]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2023.geometry}
        material={materials["Fence.063"]}
        position={[2.209, 0.102, 319.357]}
        rotation={[-3.095, 1.31, 3.078]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2026.geometry}
        material={materials["Fence.066"]}
        position={[0.326, 0.24, 311.361]}
        rotation={[-0.024, -1.038, -0.039]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1027.geometry}
        material={materials["Fence.068"]}
        position={[-2.636, 0.188, 316.635]}
        rotation={[0.01, -1.482, 0.01]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1028.geometry}
        material={materials["Fence.069"]}
        position={[-1.153, 0.193, 316.503]}
        rotation={[0.01, -1.482, 0.01]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1029.geometry}
        material={materials["Fence.070"]}
        position={[1.521, 0.106, 319.42]}
        rotation={[0, 1.51, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1030.geometry}
        material={materials["Fence.071"]}
        position={[2.913, 0.102, 319.133]}
        rotation={[-Math.PI, 1.255, -Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1034.geometry}
        material={materials["Fence.075"]}
        position={[-0.427, 0.239, 311.59]}
        rotation={[Math.PI, -1.48, Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <group
        position={[-0.58, 0.932, 317.482]}
        rotation={[-1.052, 0.671, -2.878]}
        scale={[0.037, 0.123, 0.027]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder313.geometry}
          material={materials["Cabin.586"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder313_1.geometry}
          material={materials["WoodenSign.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder313_2.geometry}
          material={materials["Cabin.587"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder313_3.geometry}
          material={materials["Cabin.588"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder313_4.geometry}
          material={materials["Cabin.589"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder313_5.geometry}
          material={materials["Cabin.590"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder313_6.geometry}
          material={materials["Cabin.591"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder313_7.geometry}
          material={materials["Cabin.592"]}
        />
      </group>
      <group
        position={[-4.946, 0.845, 311.342]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314.geometry}
          material={materials["Cabin.593"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_1.geometry}
          material={materials["Cabin.594"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_2.geometry}
          material={materials["Cabin.595"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_3.geometry}
          material={materials["Cabin.596"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_4.geometry}
          material={materials["Cabin.597"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_5.geometry}
          material={materials["Cabin.598"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_6.geometry}
          material={materials["Cabin.599"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_7.geometry}
          material={materials["Chimney.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_8.geometry}
          material={materials["Material.062"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder314_9.geometry}
          material={materials["Door.047"]}
        />
      </group>
      <group
        position={[4.299, 0.669, 310.906]}
        rotation={[1.092, -0.222, -1.17]}
        scale={[0.055, 0.699, 0.055]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315.geometry}
          material={materials["Cabin.600"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_1.geometry}
          material={materials["Cabin.601"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_2.geometry}
          material={materials["Cabin.602"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_3.geometry}
          material={materials["Cabin.603"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_4.geometry}
          material={materials["Cabin.604"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_5.geometry}
          material={materials["Cabin.605"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_6.geometry}
          material={materials["Cabin.606"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_7.geometry}
          material={materials["Chimney.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_8.geometry}
          material={materials["Material.063"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder315_9.geometry}
          material={materials["Door.048"]}
        />
      </group>
      <group
        position={[6.502, 0.823, 312.679]}
        rotation={[1.338, -0.473, -0.48]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316.geometry}
          material={materials["Cabin.607"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_1.geometry}
          material={materials["Cabin.608"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_2.geometry}
          material={materials["Cabin.609"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_3.geometry}
          material={materials["Cabin.610"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_4.geometry}
          material={materials["Cabin.611"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_5.geometry}
          material={materials["Cabin.612"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_6.geometry}
          material={materials["Cabin.613"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_7.geometry}
          material={materials["Chimney.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_8.geometry}
          material={materials["Material.064"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder316_9.geometry}
          material={materials["Door.049"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder252.geometry}
        material={materials["Lantern.054"]}
        position={[4.776, 1.583, 312.667]}
        rotation={[-1.159, 0.333, 2.213]}
        scale={[0.03, 0.162, 0.03]}
      />
      <group
        position={[-7.388, 0.781, 317.422]}
        rotation={[2.094, 0.009, 1.586]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318.geometry}
          material={materials["Cabin.614"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_1.geometry}
          material={materials["Cabin.615"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_2.geometry}
          material={materials["Cabin.616"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_3.geometry}
          material={materials["Cabin.617"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_4.geometry}
          material={materials["Cabin.618"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_5.geometry}
          material={materials["Cabin.619"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_6.geometry}
          material={materials["Cabin.620"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_7.geometry}
          material={materials["Chimney.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_8.geometry}
          material={materials["Door.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder318_9.geometry}
          material={materials["Material.065"]}
        />
      </group>
      <group
        position={[-4.259, 1.058, 317.667]}
        rotation={[2.094, 0.009, 1.586]}
        scale={[0.096, 1.226, 0.096]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319.geometry}
          material={materials["Cabin.621"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_1.geometry}
          material={materials["Cabin.622"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_2.geometry}
          material={materials["Cabin.623"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_3.geometry}
          material={materials["Cabin.624"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_4.geometry}
          material={materials["Cabin.625"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_5.geometry}
          material={materials["Cabin.626"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_6.geometry}
          material={materials["Cabin.627"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_7.geometry}
          material={materials["Chimney.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_8.geometry}
          material={materials["Material.066"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder319_9.geometry}
          material={materials["Door.051"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder255.geometry}
        material={materials["Lantern.054"]}
        position={[4.894, 0.774, 312.566]}
        rotation={[0, -0.335, Math.PI]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder256.geometry}
        material={materials["Lantern.055"]}
        position={[-5.947, 1.583, 315.878]}
        rotation={[-Math.PI / 2, -Math.PI / 6, 0]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder257.geometry}
        material={materials["Lantern.055"]}
        position={[-5.947, 0.774, 316.034]}
        rotation={[-Math.PI, -Math.PI / 6, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder258.geometry}
        material={materials["Lantern.056"]}
        position={[-1.454, 0.774, 316.106]}
        rotation={[-Math.PI, -0.569, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder259.geometry}
        material={materials["Lantern.056"]}
        position={[-1.461, 1.583, 315.951]}
        rotation={[-1.544, -0.523, 0.053]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder260.geometry}
        material={materials["Lantern.057"]}
        position={[5.106, 1.583, 316.615]}
        rotation={[-1.137, -0.303, 0.999]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder261.geometry}
        material={materials["Lantern.057"]}
        position={[5.23, 0.774, 316.708]}
        rotation={[-Math.PI, -1.455, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <group
        position={[5.18, 0.765, 318.416]}
        rotation={[2, -0.31, 0.983]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327.geometry}
          material={materials["Cabin.628"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_1.geometry}
          material={materials["Cabin.629"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_2.geometry}
          material={materials["Cabin.630"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_3.geometry}
          material={materials["Cabin.631"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_4.geometry}
          material={materials["Cabin.632"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_5.geometry}
          material={materials["Cabin.633"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_6.geometry}
          material={materials["Cabin.634"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_7.geometry}
          material={materials["Chimney.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_8.geometry}
          material={materials["Material.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder327_9.geometry}
          material={materials["Door.052"]}
        />
      </group>
      <group
        position={[-7.438, 0.578, 311.458]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.057, 0.728, 0.057]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328.geometry}
          material={materials["Cabin.635"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_1.geometry}
          material={materials["Cabin.636"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_2.geometry}
          material={materials["Cabin.637"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_3.geometry}
          material={materials["Cabin.638"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_4.geometry}
          material={materials["Cabin.639"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_5.geometry}
          material={materials["Cabin.640"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_6.geometry}
          material={materials["Cabin.641"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_7.geometry}
          material={materials["Chimney.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_8.geometry}
          material={materials["Door.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder328_9.geometry}
          material={materials["Material.068"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials["Material.069"]}
        position={[14.096, 0.917, 315.119]}
        rotation={[0, 0.833, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials["Material.070"]}
        position={[18.832, 2.937, 310.655]}
        rotation={[0, 0.777, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials["Material.071"]}
        position={[24.261, 6.803, 310.627]}
        rotation={[0, -0.295, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials["Material.072"]}
        position={[27.238, 9.591, 319.95]}
        rotation={[0, -1.083, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials["Material.073"]}
        position={[26.153, 8.246, 314.541]}
        rotation={[0, -1.083, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <group
        position={[6.824, 1.294, 315.831]}
        rotation={[0, -0.221, 0]}
        scale={[1.379, 0.057, 1.594]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099.geometry}
          material={materials["Cabin.642"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_1.geometry}
          material={materials["Chimney.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_2.geometry}
          material={materials["Cabin.643"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_3.geometry}
          material={materials["Cabin.644"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_4.geometry}
          material={materials["Cabin.645"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_5.geometry}
          material={materials["Cabin.646"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_6.geometry}
          material={materials["Cabin.647"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_7.geometry}
          material={materials["Cabin.648"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_8.geometry}
          material={materials["Cabin.649"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_9.geometry}
          material={materials["Cabin.650"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_10.geometry}
          material={materials["Cabin.651"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_11.geometry}
          material={materials["Cabin.652"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_12.geometry}
          material={materials["Cabin.653"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_13.geometry}
          material={materials["Cabin.654"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_14.geometry}
          material={materials["Cabin.655"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_15.geometry}
          material={materials["Cabin.656"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_16.geometry}
          material={materials["Door.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_17.geometry}
          material={materials["Material.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_18.geometry}
          material={materials["CabinFence.097"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_19.geometry}
          material={materials["CabinFence.098"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_20.geometry}
          material={materials["CabinFence.099"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_21.geometry}
          material={materials["CabinFence.100"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_22.geometry}
          material={materials["CabinFence.101"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_23.geometry}
          material={materials["CabinFence.102"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_24.geometry}
          material={materials["CabinFence.103"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_25.geometry}
          material={materials["CabinFence.104"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_26.geometry}
          material={materials["Cabin.657"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_27.geometry}
          material={materials["Cabin.658"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_28.geometry}
          material={materials["Cabin.659"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_29.geometry}
          material={materials["Cabin.660"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_30.geometry}
          material={materials["Cabin.661"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_31.geometry}
          material={materials["Cabin.662"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_32.geometry}
          material={materials["Cabin.663"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_33.geometry}
          material={materials["Cabin.664"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_34.geometry}
          material={materials["Cabin.665"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_35.geometry}
          material={materials["Cabin.666"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_36.geometry}
          material={materials["Cabin.667"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube099_37.geometry}
          material={materials["Cabin.668"]}
        />
      </group>
      <group
        position={[25.123, 7.034, 311.921]}
        rotation={[-Math.PI / 2, 0, 0.414]}
        scale={0.007}
      >
        <group position={[0, 0.003, 0]}>
          <group position={[0, 0.003, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4009.geometry}
                material={materials["03___Default.009"]}
                position={[2.134, 31.72, 5.043]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5009.geometry}
                material={materials["07___Default.009"]}
                position={[0.661, 21.498, 3.986]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[26.675, 8.807, 318.518]}
        rotation={[-Math.PI / 2, 0, -2.957]}
        scale={0.007}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4010.geometry}
            material={materials["03___Default.010"]}
            position={[2.132, 31.72, 5.045]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5010.geometry}
            material={materials["07___Default.010"]}
            position={[0.061, 20.437, 4.061]}
          />
        </group>
      </group>
      <group
        position={[16.075, 1.357, 312.914]}
        rotation={[-Math.PI / 2, 0, 2.385]}
        scale={0.007}
      >
        <group position={[0.003, -0.001, 0]}>
          <group position={[0.003, -0.001, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.003, 0, 0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4011.geometry}
                material={materials["03___Default.011"]}
                position={[2.134, 31.72, 5.042]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5011.geometry}
                material={materials["07___Default.011"]}
                position={[0.065, 20.437, 4.066]}
              />
            </group>
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary028.geometry}
        material={materials["Lantern.058"]}
        position={[4.702, 1.533, 312.729]}
        rotation={[3.139, 1.203, 3.103]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary034.geometry}
        material={materials["Lantern.055"]}
        position={[-5.946, 1.533, 315.782]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary035.geometry}
        material={materials["Lantern.059"]}
        position={[-1.464, 1.533, 315.853]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary036.geometry}
        material={materials["Lantern.060"]}
        position={[-1.464, 1.533, 315.853]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary037.geometry}
        material={materials["Lantern.061"]}
        position={[5.029, 1.533, 316.556]}
        rotation={[0.001, 0.625, -0.042]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary038.geometry}
        material={materials["LightsCable.003"]}
        position={[-4.606, 1.826, 314.345]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary039.geometry}
        material={materials["Cable.003"]}
        position={[22.451, 6.043, 313.465]}
        rotation={[0, 0.309, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary040.geometry}
        material={materials["Cable.003"]}
        position={[22.505, 6.034, 313.202]}
        rotation={[0, 0.309, 0]}
      />
      <group
        position={[2.022, 0.84, 310.15]}
        rotation={[1.052, -0.078, -1.435]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329.geometry}
          material={materials["Cabin.669"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_1.geometry}
          material={materials["Cabin.670"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_2.geometry}
          material={materials["Cabin.671"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_3.geometry}
          material={materials["Cabin.672"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_4.geometry}
          material={materials["Cabin.673"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_5.geometry}
          material={materials["Cabin.674"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_6.geometry}
          material={materials["Cabin.675"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_7.geometry}
          material={materials["Chimney.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_8.geometry}
          material={materials["Material.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder329_9.geometry}
          material={materials["Door.055"]}
        />
      </group>
      <group
        position={[-0.081, 0.765, 319.631]}
        rotation={[2.017, 0.283, 2.099]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330.geometry}
          material={materials["Cabin.676"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_1.geometry}
          material={materials["Cabin.677"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_2.geometry}
          material={materials["Cabin.678"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_3.geometry}
          material={materials["Cabin.679"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_4.geometry}
          material={materials["Cabin.680"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_5.geometry}
          material={materials["Cabin.681"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_6.geometry}
          material={materials["Cabin.682"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_7.geometry}
          material={materials["Chimney.056"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_8.geometry}
          material={materials["Material.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder330_9.geometry}
          material={materials["Door.056"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1026.geometry}
        material={materials["Fence.076"]}
        position={[3.575, 0.102, 318.799]}
        rotation={[-Math.PI, 1.003, -Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <group
        position={[2.718, 1.307, 318.529]}
        rotation={[-Math.PI / 2, 0, 0.087]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material027"].geometry}
            material={materials["candle.031"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material027"].geometry}
            material={materials["lamp_glass.032"]}
            position={[0.114, -0.006, -0.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["metal-material027"].geometry}
            material={materials["metal.032"]}
            position={[0.001, -0.001, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder266.geometry}
        material={materials["Lantern.062"]}
        position={[2.737, 0.774, 318.78]}
        rotation={[-Math.PI, -0.611, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder267.geometry}
        material={materials["Lantern.062"]}
        position={[2.724, 1.583, 318.625]}
        rotation={[-1.521, -0.521, 0.1]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary041.geometry}
        material={materials["Lantern.063"]}
        position={[2.718, 1.533, 318.529]}
        rotation={[0.001, -0.219, -0.041]}
      />
      <group
        position={[-0.022, 1.307, 316.662]}
        rotation={[-Math.PI / 2, 0, -1.277]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material028"].geometry}
            material={materials["candle.032"]}
            position={[-0.001, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material028"].geometry}
            material={materials["lamp_glass.033"]}
            position={[0.113, -0.006, -0.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["metal-material028"].geometry}
            material={materials["metal.033"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder268.geometry}
        material={materials["Lantern.064"]}
        position={[-0.115, 1.583, 316.688]}
        rotation={[-2.076, -0.145, -1.314]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder269.geometry}
        material={materials["Lantern.064"]}
        position={[-0.263, 0.774, 316.733]}
        rotation={[-Math.PI, 0.753, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary042.geometry}
        material={materials["Lantern.065"]}
        position={[-0.022, 1.533, 316.663]}
        rotation={[3.07, -1.558, 3.029]}
      />
      <group
        position={[0.757, 1.307, 311.809]}
        rotation={[-Math.PI / 2, 0, -3]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material029"].geometry}
            material={materials["candle.033"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material029"].geometry}
            material={materials["lamp_glass.034"]}
            position={[0.114, -0.006, -0.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["metal-material029"].geometry}
            material={materials["metal.034"]}
            position={[0.001, -0.001, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder270.geometry}
        material={materials["Lantern.066"]}
        position={[0.724, 0.774, 311.559]}
        rotation={[0, 0.665, -Math.PI]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder271.geometry}
        material={materials["Lantern.066"]}
        position={[0.746, 1.583, 311.713]}
        rotation={[-1.652, 0.518, -2.979]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary043.geometry}
        material={materials["Lantern.067"]}
        position={[0.758, 1.533, 311.809]}
        rotation={[3.141, 0.203, 3.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1032.geometry}
        material={materials["Fence.078"]}
        position={[5.945, 0.106, 317.139]}
        rotation={[-Math.PI, 0.84, -Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1031.geometry}
        material={materials["Fence.079"]}
        position={[6.456, 0.114, 314.285]}
        rotation={[Math.PI, -0.142, Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1033.geometry}
        material={materials["Fence.080"]}
        position={[5.358, 0.169, 311.916]}
        rotation={[Math.PI, -0.858, Math.PI]}
        scale={[0.035, 0.057, 0.035]}
      />
      <group
        position={[2.9, 1.286, 314.818]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.224, 0.258, 0.224]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder337.geometry}
          material={materials["TrunkBrown.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder337_1.geometry}
          material={materials["LeafGreen.053"]}
        />
      </group>
      <group
        position={[2.684, 0.795, 315.345]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.138, 0.159, 0.138]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder338.geometry}
          material={materials["TrunkBrown.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder338_1.geometry}
          material={materials["LeafGreen.054"]}
        />
      </group>
      <group
        position={[2.424, 0.795, 315.053]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.138, 0.159, 0.138]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder339.geometry}
          material={materials["TrunkBrown.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder339_1.geometry}
          material={materials["LeafGreen.055"]}
        />
      </group>
      <group
        position={[2.684, 0.795, 314.419]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.138, 0.159, 0.138]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder340.geometry}
          material={materials["TrunkBrown.056"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder340_1.geometry}
          material={materials["LeafGreen.056"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2024.geometry}
        material={materials["Fence.081"]}
        position={[1.856, 0.159, 315.161]}
        rotation={[-0.012, 0.202, -0.016]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1035.geometry}
        material={materials["Fence.082"]}
        position={[2.219, 0.159, 315.743]}
        rotation={[0, 0.867, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1036.geometry}
        material={materials["Fence.083"]}
        position={[2.846, 0.159, 315.993]}
        rotation={[0, 1.476, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2025.geometry}
        material={materials["Fence.084"]}
        position={[1.916, 0.156, 314.449]}
        rotation={[-0.013, -0.276, -0.022]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2027.geometry}
        material={materials["Fence.085"]}
        position={[2.374, 0.108, 313.95]}
        rotation={[-0.026, -1.089, -0.042]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2029.geometry}
        material={materials["Fence.087"]}
        position={[3.003, 0.108, 313.986]}
        rotation={[-3.118, -1.021, -3.14]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2030.geometry}
        material={materials["Fence.088"]}
        position={[3.478, 0.108, 314.479]}
        rotation={[-3.127, -0.537, 3.13]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2031.geometry}
        material={materials["Fence.089"]}
        position={[3.603, 0.108, 315.114]}
        rotation={[-3.129, 0.084, 3.122]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2032.geometry}
        material={materials["Fence.090"]}
        position={[3.384, 0.108, 315.724]}
        rotation={[-3.126, 0.659, 3.114]}
        scale={[0.046, 0.074, 0.046]}
      />
      <group
        position={[2.259, 0.142, 315.443]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.03}
      >
        <group position={[0, -0.001, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0013.geometry}
            material={materials["barrel_wood.013"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0013.geometry}
            material={materials["Metall_rings.013"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
      <group
        position={[-1.997, 0.261, 316.955]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.045}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0014.geometry}
            material={materials["barrel_wood.014"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0014.geometry}
            material={materials["Metall_rings.014"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
      <group
        position={[6.104, 0.171, 316.295]}
        rotation={[-Math.PI / 2, 0, -0.458]}
        scale={0.045}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0015.geometry}
            material={materials["barrel_wood.015"]}
            position={[0.086, 0, 0.001]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0015.geometry}
            material={materials["Metall_rings.015"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
      <group
        position={[-5.777, 0.266, 316.854]}
        rotation={[-Math.PI / 2, 0, -0.458]}
        scale={0.045}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -0.001]}>
            <group position={[0, 0, -0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Barrel_body_barrel_wood_0016.geometry}
                material={materials["barrel_wood.016"]}
                position={[0.087, 0, 0]}
              />
            </group>
            <group position={[0, 0, -0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rings_Metall_rings_0016.geometry}
                material={materials["Metall_rings.016"]}
                position={[0, -0.013, -0.001]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[-6.135, 0.194, 317.005]}
        rotation={[0.025, -0.971, -0.766]}
        scale={0.045}
      >
        <group position={[0, 0.001, -0.001]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0017.geometry}
            material={materials["barrel_wood.017"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0017.geometry}
            material={materials["Metall_rings.017"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Arc1600.glb");
