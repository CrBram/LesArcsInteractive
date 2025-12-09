import { useGLTF } from "@react-three/drei";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";

export function Arc2000(props: React.ComponentPropsWithoutRef<"group">) {
  const { nodes, materials } = useGLTF("/models/SkiTown.glb") as any;
  const { preset } = useEnvironmentPreset();
  const isNight = preset === "night";
  return (
    <group {...props} dispose={null}>
      <group
        position={[-9.016, 0.201, 2.75]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder630.geometry}
          material={materials["TrunkBrown.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder630_1.geometry}
          material={materials["LeafGreen.008"]}
        />
      </group>
      <group
        position={[-9.045, 0.265, -2.714]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder631.geometry}
          material={materials["TrunkBrown.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder631_1.geometry}
          material={materials["LeafGreen.009"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup001.geometry}
        material={materials["Rock.001"]}
        position={[27.914, -0.236, -2.877]}
        rotation={[0, -0.252, 0]}
        scale={[9.024, 8.771, 9.024]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup005.geometry}
        material={materials["Rock.005"]}
        position={[23.215, -0.236, 9.72]}
        rotation={[0, -0.252, 0]}
        scale={[8.455, 8.218, 8.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Ground}
        position={[5.356, -0.023, 2.518]}
        rotation={[0, -1.571, 0]}
        scale={-33.828}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1001.geometry}
        material={materials["Fence.002"]}
        position={[-2.083, 0.042, 2.292]}
        rotation={[0, -1.482, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1002.geometry}
        material={materials["Fence.004"]}
        position={[-0.6, 0.047, 2.16]}
        rotation={[0, -1.482, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1003.geometry}
        material={materials["Fence.007"]}
        position={[4.523, 0.047, 1.57]}
        rotation={[Math.PI, -1.373, Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1004.geometry}
        material={materials["Fence.008"]}
        position={[3.149, 0.042, 1.565]}
        rotation={[0, -0.95, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1005.geometry}
        material={materials["Fence.011"]}
        position={[11.867, 0.047, -3.361]}
        rotation={[0, 0.081, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1006.geometry}
        material={materials["Fence.012"]}
        position={[12.392, 0.042, -1.932]}
        rotation={[0, 0.676, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1007.geometry}
        material={materials["Fence.014"]}
        position={[1.312, 0.183, -2.292]}
        rotation={[0, -1.31, 0]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1008.geometry}
        material={materials["Fence.015"]}
        position={[-0.147, 0.179, -2.037]}
        rotation={[Math.PI, -1.48, Math.PI]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2001.geometry}
        material={materials["Fence.003"]}
        position={[-1.351, 0.039, 2.204]}
        rotation={[-0.087, -1.431, -0.105]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2002.geometry}
        material={materials["Fence.005"]}
        position={[0.138, 0.018, 2.228]}
        rotation={[-3.006, -1.481, -3.025]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2003.geometry}
        material={materials["Fence.006"]}
        position={[3.827, 0.037, 1.449]}
        rotation={[-0.098, -1.446, -0.116]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2004.geometry}
        material={materials["Fence.009"]}
        position={[12.122, 0.018, -4.011]}
        rotation={[-0.013, -0.406, -0.024]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2005.geometry}
        material={materials["Fence.010"]}
        position={[11.965, 0.039, -2.615]}
        rotation={[-0.013, 0.44, -0.013]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2006.geometry}
        material={materials["Fence.013"]}
        position={[0.56, 0.176, -2.08]}
        rotation={[-0.087, -1.431, -0.105]}
        scale={[0.046, 0.074, 0.046]}
      />
      <group
        position={[1.812, 1.926, 3.167]}
        rotation={[0, -1.301, 0]}
        scale={[1.501, 0.063, 1.735]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials["Cabin.147"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials["Chimney.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_2.geometry}
          material={materials["Cabin.169"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_3.geometry}
          material={materials["Cabin.166"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_4.geometry}
          material={materials["Cabin.168"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_5.geometry}
          material={materials["Cabin.167"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_6.geometry}
          material={materials["Cabin.165"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_7.geometry}
          material={materials["Cabin.164"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_8.geometry}
          material={materials["Cabin.163"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_9.geometry}
          material={materials["Cabin.162"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_10.geometry}
          material={materials["Cabin.161"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_11.geometry}
          material={materials["Cabin.160"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_12.geometry}
          material={materials["Cabin.159"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_13.geometry}
          material={materials["Cabin.158"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_14.geometry}
          material={materials["Cabin.157"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_15.geometry}
          material={materials["Cabin.156"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_16.geometry}
          material={materials["Door.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_17.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_18.geometry}
          material={materials["CabinFence.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_19.geometry}
          material={materials["CabinFence.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_20.geometry}
          material={materials["CabinFence.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_21.geometry}
          material={materials["CabinFence.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_22.geometry}
          material={materials["CabinFence.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_23.geometry}
          material={materials["CabinFence.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_24.geometry}
          material={materials["CabinFence.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_25.geometry}
          material={materials["CabinFence.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_26.geometry}
          material={materials["Cabin.155"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_27.geometry}
          material={materials["Cabin.154"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_28.geometry}
          material={materials["Cabin.153"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_29.geometry}
          material={materials["Cabin.152"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_30.geometry}
          material={materials["Cabin.151"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_31.geometry}
          material={materials["Cabin.150"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_32.geometry}
          material={materials["Cabin.149"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_33.geometry}
          material={materials["Cabin.148"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_34.geometry}
          material={materials["Cabin.146"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_35.geometry}
          material={materials["Cabin.145"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_36.geometry}
          material={materials["Cabin.144"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_37.geometry}
          material={materials["Cabin.143"]}
        />
      </group>
      <group
        position={[11.655, 1.772, 0.148]}
        rotation={[0, -0.938, 0]}
        scale={[1.379, 0.057, 1.594]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["Cabin.247"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_1.geometry}
          material={materials["Chimney.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_2.geometry}
          material={materials["Cabin.225"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_3.geometry}
          material={materials["Cabin.228"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_4.geometry}
          material={materials["Cabin.226"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_5.geometry}
          material={materials["Cabin.227"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_6.geometry}
          material={materials["Cabin.229"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_7.geometry}
          material={materials["Cabin.230"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_8.geometry}
          material={materials["Cabin.231"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_9.geometry}
          material={materials["Cabin.232"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_10.geometry}
          material={materials["Cabin.233"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_11.geometry}
          material={materials["Cabin.234"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_12.geometry}
          material={materials["Cabin.235"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_13.geometry}
          material={materials["Cabin.236"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_14.geometry}
          material={materials["Cabin.237"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_15.geometry}
          material={materials["Cabin.238"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_16.geometry}
          material={materials["Door.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_17.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_18.geometry}
          material={materials["CabinFence.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_19.geometry}
          material={materials["CabinFence.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_20.geometry}
          material={materials["CabinFence.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_21.geometry}
          material={materials["CabinFence.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_22.geometry}
          material={materials["CabinFence.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_23.geometry}
          material={materials["CabinFence.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_24.geometry}
          material={materials["CabinFence.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_25.geometry}
          material={materials["CabinFence.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_26.geometry}
          material={materials["Cabin.239"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_27.geometry}
          material={materials["Cabin.240"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_28.geometry}
          material={materials["Cabin.241"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_29.geometry}
          material={materials["Cabin.242"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_30.geometry}
          material={materials["Cabin.243"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_31.geometry}
          material={materials["Cabin.244"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_32.geometry}
          material={materials["Cabin.245"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_33.geometry}
          material={materials["Cabin.246"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_34.geometry}
          material={materials["Cabin.248"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_35.geometry}
          material={materials["Cabin.249"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_36.geometry}
          material={materials["Cabin.250"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_37.geometry}
          material={materials["Cabin.251"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials.Lantern}
        position={[-5.947, 1.583, 1.561]}
        rotation={[-Math.PI / 2, -Math.PI / 6, 0]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials.Lantern}
        position={[-5.947, 0.774, 1.716]}
        rotation={[-Math.PI, -Math.PI / 6, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <group
        position={[-5.945, 1.307, 1.464]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material001"].geometry}
            material={materials["candle.002"]}
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
            geometry={nodes["lamp_glass-material001"].geometry}
            material={materials["lamp_glass.003"]}
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
            geometry={nodes["metal-material001"].geometry}
            material={materials["metal.003"]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary002.geometry}
        material={materials["Lantern.006"]}
        position={[-1.464, 1.533, 1.535]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary004.geometry}
        material={materials["Lantern.008"]}
        position={[8.889, 1.533, -0.873]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary.geometry}
        material={materials.Lantern}
        position={[-5.946, 1.533, 1.465]}
      />
      <group
        position={[0.421, 0.267, -2.62]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.389, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder611.geometry}
          material={materials["TrunkBrown.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder611_1.geometry}
          material={materials["LeafGreen.001"]}
        />
      </group>
      <group
        position={[-0.776, 0.201, 2.95]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.389, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder610.geometry}
          material={materials.TrunkBrown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder610_1.geometry}
          material={materials.LeafGreen}
        />
      </group>
      <group
        position={[7.113, 0.265, -4.378]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.324, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder612.geometry}
          material={materials["TrunkBrown.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder612_1.geometry}
          material={materials["LeafGreen.002"]}
        />
      </group>
      <group
        position={[3.836, 0.2, 1.995]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.328, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder613.geometry}
          material={materials["TrunkBrown.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder613_1.geometry}
          material={materials["LeafGreen.003"]}
        />
      </group>
      <group
        position={[13.621, 0.177, -2.546]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.285, 0.324, 0.285]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder615.geometry}
          material={materials["TrunkBrown.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder615_1.geometry}
          material={materials["LeafGreen.005"]}
        />
      </group>
      <group
        position={[13.621, 0.129, -3.464]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.191, 0.218, 0.225]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder616.geometry}
          material={materials["TrunkBrown.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder616_1.geometry}
          material={materials["LeafGreen.006"]}
        />
      </group>
      <group
        position={[12.891, 0.129, -2.975]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.191, 0.218, 0.225]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder617.geometry}
          material={materials["TrunkBrown.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder617_1.geometry}
          material={materials["LeafGreen.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials["Lantern.002"]}
        position={[-1.461, 1.583, 1.633]}
        rotation={[-1.544, -0.523, 0.053]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials["Lantern.002"]}
        position={[-1.454, 0.774, 1.788]}
        rotation={[-Math.PI, -0.569, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <group
        position={[-1.464, 1.307, 1.537]}
        rotation={[-Math.PI / 2, 0, 0.046]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material002"].geometry}
            material={materials["candle.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material002"].geometry}
            material={materials["lamp_glass.004"]}
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
            geometry={nodes["metal-material002"].geometry}
            material={materials["metal.004"]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary001.geometry}
        material={materials["Lantern.005"]}
        position={[-1.464, 1.533, 1.535]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials["Lantern.003"]}
        position={[3.333, 1.583, 0.63]}
        rotation={[-1.387, -0.493, 0.374]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials["Lantern.003"]}
        position={[3.383, 0.774, 0.777]}
        rotation={[-Math.PI, -0.851, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <group
        position={[3.304, 1.307, 0.537]}
        rotation={[-Math.PI / 2, 0, 0.328]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material003"].geometry}
            material={materials["candle.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material003"].geometry}
            material={materials["lamp_glass.005"]}
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
            geometry={nodes["metal-material003"].geometry}
            material={materials["metal.005"]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary003.geometry}
        material={materials["Lantern.007"]}
        position={[3.304, 1.533, 0.537]}
        rotation={[0.001, 0.021, -0.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials["Lantern.004"]}
        position={[8.922, 1.583, -0.782]}
        rotation={[-1.367, -0.486, 0.416]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials["Lantern.004"]}
        position={[8.978, 0.774, -0.637]}
        rotation={[-Math.PI, -0.889, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <group
        position={[8.89, 1.307, -0.873]}
        rotation={[-Math.PI / 2, 0, 0.365]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material004"].geometry}
            material={materials["candle.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material004"].geometry}
            material={materials["lamp_glass.006"]}
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
            geometry={nodes["metal-material004"].geometry}
            material={materials["metal.006"]}
          />
        </group>
      </group>
      <group
        position={[-2.007, 1.442, -2.34]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.096, 1.226, 0.096]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["Cabin.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials["Cabin.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_3.geometry}
          material={materials["Cabin.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_4.geometry}
          material={materials["Cabin.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_5.geometry}
          material={materials["Cabin.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_6.geometry}
          material={materials["Cabin.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_7.geometry}
          material={materials["Cabin.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_8.geometry}
          material={materials["Chimney.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_9.geometry}
          material={materials.WoodenSign}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_10.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_11.geometry}
          material={materials["Door.006"]}
        />
      </group>
      <group
        position={[-4.956, 1.076, -2.34]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["Cabin.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["Cabin.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials["Cabin.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_4.geometry}
          material={materials["Cabin.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_5.geometry}
          material={materials["Cabin.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_6.geometry}
          material={materials["Cabin.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_7.geometry}
          material={materials["Cabin.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_8.geometry}
          material={materials["Chimney.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_9.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_10.geometry}
          material={materials["Door.005"]}
        />
      </group>
      <group
        position={[-7.376, 1.011, 2.47]}
        rotation={[2.094, 0.009, 1.586]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_1.geometry}
          material={materials["Cabin.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_2.geometry}
          material={materials["Cabin.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_3.geometry}
          material={materials["Cabin.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_4.geometry}
          material={materials["Cabin.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_5.geometry}
          material={materials["Cabin.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_6.geometry}
          material={materials["Cabin.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_7.geometry}
          material={materials["Cabin.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_8.geometry}
          material={materials["Chimney.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_9.geometry}
          material={materials["Door.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_10.geometry}
          material={materials["Material.012"]}
        />
      </group>
      <group
        position={[-4.243, 1.378, 2.477]}
        rotation={[2.094, 0.009, 1.586]}
        scale={[0.096, 1.226, 0.096]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials["Cabin.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials["Cabin.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_3.geometry}
          material={materials["Cabin.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_4.geometry}
          material={materials["Cabin.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_5.geometry}
          material={materials["Cabin.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_6.geometry}
          material={materials["Cabin.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_7.geometry}
          material={materials["Cabin.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_8.geometry}
          material={materials["Chimney.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_9.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_10.geometry}
          material={materials["Door.007"]}
        />
      </group>
      <group
        position={[-7.447, 1.076, -2.34]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172.geometry}
          material={materials["Cabin.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_1.geometry}
          material={materials.Cabin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_2.geometry}
          material={materials["Cabin.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_3.geometry}
          material={materials["Cabin.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_4.geometry}
          material={materials["Cabin.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_5.geometry}
          material={materials["Cabin.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_6.geometry}
          material={materials["Cabin.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_7.geometry}
          material={materials.Chimney}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_8.geometry}
          material={materials["Door.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder172_9.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group
        position={[2.391, 1.071, -2.521]}
        rotation={[1.059, 0.117, -1.776]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_1.geometry}
          material={materials["Cabin.093"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_2.geometry}
          material={materials["Cabin.095"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_3.geometry}
          material={materials["Cabin.096"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_4.geometry}
          material={materials["Cabin.097"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_5.geometry}
          material={materials["Cabin.098"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_6.geometry}
          material={materials["Cabin.099"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_7.geometry}
          material={materials["Cabin.100"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_8.geometry}
          material={materials["Chimney.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_9.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder018_10.geometry}
          material={materials["Door.010"]}
        />
      </group>
      <group
        position={[5.125, 1.054, -3.235]}
        rotation={[1.059, 0.117, -1.776]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_1.geometry}
          material={materials["Cabin.101"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_2.geometry}
          material={materials["Cabin.102"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_3.geometry}
          material={materials["Cabin.254"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_4.geometry}
          material={materials["Cabin.255"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_5.geometry}
          material={materials["Cabin.256"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_6.geometry}
          material={materials["Cabin.257"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_7.geometry}
          material={materials["Cabin.258"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_8.geometry}
          material={materials["Chimney.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_9.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019_10.geometry}
          material={materials["Door.011"]}
        />
      </group>
      <group
        position={[9.288, 1.062, -4.255]}
        rotation={[1.059, 0.117, -1.776]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_1.geometry}
          material={materials["Cabin.259"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_2.geometry}
          material={materials["Cabin.260"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_3.geometry}
          material={materials["Cabin.261"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_4.geometry}
          material={materials["Cabin.262"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_5.geometry}
          material={materials["Cabin.263"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_6.geometry}
          material={materials["Cabin.264"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_7.geometry}
          material={materials["Cabin.265"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_8.geometry}
          material={materials["Chimney.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_9.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_10.geometry}
          material={materials["Door.012"]}
        />
      </group>
      <group
        position={[5.545, 0.996, 1.52]}
        rotation={[2.082, -0.117, 1.366]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_1.geometry}
          material={materials["Cabin.266"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_2.geometry}
          material={materials["Cabin.267"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_3.geometry}
          material={materials["Cabin.268"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_4.geometry}
          material={materials["Cabin.269"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_5.geometry}
          material={materials["Cabin.270"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_6.geometry}
          material={materials["Cabin.271"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_7.geometry}
          material={materials["Cabin.272"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_8.geometry}
          material={materials["Chimney.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_9.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder021_10.geometry}
          material={materials["Door.013"]}
        />
      </group>
      <group
        position={[8.238, 0.996, 0.8]}
        rotation={[2.077, -0.14, 1.325]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_1.geometry}
          material={materials["Cabin.273"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_2.geometry}
          material={materials["Cabin.274"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_3.geometry}
          material={materials["Cabin.275"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_4.geometry}
          material={materials["Cabin.276"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_5.geometry}
          material={materials["Cabin.277"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_6.geometry}
          material={materials["Cabin.278"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_7.geometry}
          material={materials["Cabin.279"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_8.geometry}
          material={materials["Chimney.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_9.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_10.geometry}
          material={materials["Door.014"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary005.geometry}
        material={materials.LightsCable}
        position={[-4.606, 1.826, 0.028]}
      />
      <group
        position={[-4.918, 1.678, -1.885]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025.geometry}
          material={materials["LightBase.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_1.geometry}
          material={materials["LightRed.001"]}
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
        position={[-4.799, 1.653, -1.155]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060.geometry}
          material={materials["LightBase.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder060_1.geometry}
          material={materials["LightRed.002"]}
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
        position={[-4.675, 1.682, -0.39]}
        rotation={[-Math.PI, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063.geometry}
          material={materials["LightBase.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder063_1.geometry}
          material={materials["LightRed.003"]}
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
        position={[-4.556, 1.773, 0.334]}
        rotation={[2.995, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064.geometry}
          material={materials["LightBase.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder064_1.geometry}
          material={materials["LightRed.004"]}
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
        position={[-4.45, 1.893, 0.986]}
        rotation={[2.921, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065.geometry}
          material={materials["LightBase.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder065_1.geometry}
          material={materials["LightRed.005"]}
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
        position={[-4.337, 2.073, 1.677]}
        rotation={[2.858, 0, 0]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066.geometry}
          material={materials["LightBase.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder066_1.geometry}
          material={materials["LightRed.006"]}
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.019"]}
        position={[14.155, 1.289, -0.755]}
        rotation={[0, 0.524, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.020"]}
        position={[20.023, 3.309, -3.568]}
        rotation={[0, 0.468, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.021"]}
        position={[25.204, 7.175, -1.946]}
        rotation={[0, -0.604, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.022"]}
        position={[25.207, 9.962, 7.841]}
        rotation={[0, -1.392, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.023"]}
        position={[25.817, 8.618, 2.358]}
        rotation={[0, -1.392, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary006.geometry}
        material={materials.Cable}
        position={[17.185, 2.098, -1.984]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary007.geometry}
        material={materials.Cable}
        position={[17, 2.096, -2.327]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary008.geometry}
        material={materials.Cable}
        position={[22.603, 5.113, -2.613]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary009.geometry}
        material={materials.Cable}
        position={[22.626, 5.092, -2.946]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary010.geometry}
        material={materials.Cable}
        position={[25.371, 7.814, 0.295]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary011.geometry}
        material={materials.Cable}
        position={[25.673, 7.802, 0.101]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary012.geometry}
        material={materials.Cable}
        position={[25.311, 9.147, 5.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary013.geometry}
        material={materials.Cable}
        position={[25.696, 9.146, 5.067]}
      />
      <group
        position={[25.632, 7.034, -0.451]}
        rotation={[-Math.PI / 2, 0, 0.105]}
        scale={0.007}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["03___Default"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["07___Default"]}
          />
        </group>
      </group>
      <group
        position={[25.106, 8.807, 6.305]}
        rotation={[-Math.PI / 2, 0, 3.017]}
        scale={0.007}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4001.geometry}
            material={materials["03___Default.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5001.geometry}
            material={materials["07___Default.001"]}
            position={[-0.599, -1.062, 0.075]}
          />
        </group>
      </group>
      <group
        position={[16.71, 1.357, -2.254]}
        rotation={[-Math.PI / 2, 0, 2.076]}
        scale={0.007}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4002.geometry}
            material={materials["03___Default.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5002.geometry}
            material={materials["07___Default.002"]}
            position={[-0.599, -1.062, 0.075]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/SkiTown.glb");
