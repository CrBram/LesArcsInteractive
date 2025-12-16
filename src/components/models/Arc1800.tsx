import { useGLTF } from "@react-three/drei";
import { useEnvironmentPreset } from "@/contexts/EnvironmentPresetContext";

export function Arc1800(props: React.ComponentPropsWithoutRef<"group">) {
  const { nodes, materials } = useGLTF("/models/Arc1800.glb") as any;
  const { preset } = useEnvironmentPreset();
  const isNight = preset === "night";
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Ground.001"]}
        position={[12.359, 0.802, 102.614]}
        rotation={[0, -1.028, 0]}
        scale={-33.828}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup002.geometry}
        material={materials["Rock.002"]}
        position={[31.485, 2.074, 99.492]}
        rotation={[0, 0.291, 0]}
        scale={[8.455, 8.218, 8.455]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup003.geometry}
        material={materials["Rock.003"]}
        position={[29.002, 2.23, 86.278]}
        rotation={[0, 0.291, 0]}
        scale={[9.024, 8.771, 9.024]}
      />
      <group
        position={[13.461, 1.306, 97.033]}
        rotation={[0, 0.107, -Math.PI]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials["LightBase.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials["LightRed.012"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="orange"
              emissiveIntensity={2}
            />
          )}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_2.geometry}
          material={materials["LightBase.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_3.geometry}
          material={materials["LightRed.007"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="green"
              emissiveIntensity={2}
            />
          )}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_4.geometry}
          material={materials["LightBase.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_5.geometry}
          material={materials["LightRed.008"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="red"
              emissiveIntensity={2}
            />
          )}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_6.geometry}
          material={materials["LightBase.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_7.geometry}
          material={materials["LightRed.009"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="green"
              emissiveIntensity={2}
            />
          )}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_8.geometry}
          material={materials["LightBase.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_9.geometry}
          material={materials["LightRed.010"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="red"
              emissiveIntensity={2}
            />
          )}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_10.geometry}
          material={materials["LightBase.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_11.geometry}
          material={materials["LightRed.011"]}
        >
          {isNight && (
            <meshStandardMaterial
              color="#ffffff"
              emissive="purple"
              emissiveIntensity={2}
            />
          )}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_12.geometry}
          material={materials["Cabin.066"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_13.geometry}
          material={materials["Cabin.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_14.geometry}
          material={materials["Cabin.068"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_15.geometry}
          material={materials["Cabin.069"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_16.geometry}
          material={materials["Cabin.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_17.geometry}
          material={materials["Cabin.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_18.geometry}
          material={materials["Cabin.072"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_19.geometry}
          material={materials["Chimney.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_20.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_21.geometry}
          material={materials["Door.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_22.geometry}
          material={materials["Cabin.134"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_23.geometry}
          material={materials["Cabin.135"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_24.geometry}
          material={materials["Cabin.136"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_25.geometry}
          material={materials["Cabin.137"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_26.geometry}
          material={materials["Cabin.138"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_27.geometry}
          material={materials["Cabin.139"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_28.geometry}
          material={materials["Cabin.140"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_29.geometry}
          material={materials["Chimney.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_30.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_31.geometry}
          material={materials["Door.022"]}
        />
      </group>
      <group
        position={[6.031, 1.514, 95.495]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054.geometry}
          material={materials["TrunkBrown.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder054_1.geometry}
          material={materials["LeafGreen.004"]}
        />
      </group>
      <group
        position={[6.059, 1.45, 99.807]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067.geometry}
          material={materials["TrunkBrown.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder067_1.geometry}
          material={materials["LeafGreen.010"]}
        />
      </group>
      <group
        position={[7.571, 0.82, 94.918]}
        rotation={[1.049, 0.044, -1.647]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076.geometry}
          material={materials["Cabin.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_1.geometry}
          material={materials["Cabin.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_2.geometry}
          material={materials["Cabin.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_3.geometry}
          material={materials["Cabin.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_4.geometry}
          material={materials["Cabin.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_5.geometry}
          material={materials["Cabin.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_6.geometry}
          material={materials["Cabin.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_7.geometry}
          material={materials["Chimney.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_8.geometry}
          material={materials["Door.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder076_9.geometry}
          material={materials["Material.003"]}
        />
      </group>
      <group
        position={[7.661, 0.787, 100.074]}
        rotation={[2.094, 0.027, 1.618]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099.geometry}
          material={materials["Cabin.073"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_1.geometry}
          material={materials["Cabin.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_2.geometry}
          material={materials["Cabin.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_3.geometry}
          material={materials["Cabin.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_4.geometry}
          material={materials["Cabin.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_5.geometry}
          material={materials["Cabin.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_6.geometry}
          material={materials["Cabin.086"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_7.geometry}
          material={materials["Chimney.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_8.geometry}
          material={materials["Door.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_9.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.030"]}
        position={[29.912, 8.246, 91.842]}
        rotation={[0, -0.849, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.031"]}
        position={[32.222, 9.591, 96.852]}
        rotation={[0, -0.849, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["Material.032"]}
        position={[27.164, 6.803, 88.473]}
        rotation={[0, -0.061, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["Material.033"]}
        position={[21.889, 2.937, 89.761]}
        rotation={[0, 1.011, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["Material.034"]}
        position={[18.318, 0.917, 95.201]}
        rotation={[0, 1.067, 0]}
        scale={[0.061, 0.021, 0.251]}
      />
      <group
        position={[19.732, 1.357, 92.597]}
        rotation={[-Math.PI / 2, 0, 2.619]}
        scale={0.007}
      >
        <group position={[0, 0, 0]}>
          <group position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, -0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4003.geometry}
                material={materials["03___Default.003"]}
                position={[2.132, 31.72, 5.042]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5003.geometry}
                material={materials["07___Default.003"]}
                position={[0.06, 20.437, 4.063]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[31.342, 8.807, 95.589]}
        rotation={[-Math.PI / 2, 0, -2.723]}
        scale={0.007}
      >
        <group position={[0, 0.001, 0]}>
          <group position={[0, 0.001, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, 0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4004.geometry}
                material={materials["03___Default.004"]}
                position={[2.133, 31.72, 5.042]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5004.geometry}
                material={materials["07___Default.004"]}
                position={[0.061, 20.437, 4.063]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[28.303, 7.034, 89.532]}
        rotation={[-Math.PI / 2, 0, 0.648]}
        scale={0.007}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4005.geometry}
            material={materials["03___Default.005"]}
            position={[2.132, 31.72, 5.042]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5005.geometry}
            material={materials["07___Default.005"]}
            position={[0.659, 21.498, 3.988]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary007.geometry}
        material={materials["Cable.001"]}
        position={[26.053, 6.034, 91.386]}
        rotation={[0, 0.543, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary008.geometry}
        material={materials["Cable.001"]}
        position={[26.062, 6.043, 91.654]}
        rotation={[0, 0.543, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary009.geometry}
        material={materials["LightsCable.001"]}
        position={[13.507, 1.832, 97.155]}
        rotation={[Math.PI, -0.118, Math.PI]}
      />
      <group
        position={[16.43, 0.96, 94.135]}
        rotation={[0, 1.532, 0]}
        scale={[1.097, 0.046, 1.268]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials["Cabin.222"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_1.geometry}
          material={materials["Chimney.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_2.geometry}
          material={materials["Cabin.223"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_3.geometry}
          material={materials["Cabin.224"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_4.geometry}
          material={materials["Cabin.280"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_5.geometry}
          material={materials["Cabin.281"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_6.geometry}
          material={materials["Cabin.282"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_7.geometry}
          material={materials["Cabin.283"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_8.geometry}
          material={materials["Cabin.284"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_9.geometry}
          material={materials["Cabin.285"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_10.geometry}
          material={materials["Cabin.286"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_11.geometry}
          material={materials["Cabin.287"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_12.geometry}
          material={materials["Cabin.288"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_13.geometry}
          material={materials["Cabin.289"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_14.geometry}
          material={materials["Cabin.290"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_15.geometry}
          material={materials["Cabin.291"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_16.geometry}
          material={materials["Door.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_17.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_18.geometry}
          material={materials["CabinFence.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_19.geometry}
          material={materials["CabinFence.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_20.geometry}
          material={materials["CabinFence.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_21.geometry}
          material={materials["CabinFence.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_22.geometry}
          material={materials["CabinFence.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_23.geometry}
          material={materials["CabinFence.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_24.geometry}
          material={materials["CabinFence.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_25.geometry}
          material={materials["CabinFence.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_26.geometry}
          material={materials["Cabin.292"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_27.geometry}
          material={materials["Cabin.293"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_28.geometry}
          material={materials["Cabin.294"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_29.geometry}
          material={materials["Cabin.295"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_30.geometry}
          material={materials["Cabin.296"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_31.geometry}
          material={materials["Cabin.297"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_32.geometry}
          material={materials["Cabin.298"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_33.geometry}
          material={materials["Cabin.299"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_34.geometry}
          material={materials["Cabin.300"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_35.geometry}
          material={materials["Cabin.301"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_36.geometry}
          material={materials["Cabin.302"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube049_37.geometry}
          material={materials["Cabin.303"]}
        />
      </group>
      <group
        position={[9.371, 1.62, 94.857]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["TrunkBrown.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["LeafGreen.022"]}
        />
      </group>
      <group
        position={[9.679, 1.381, 94.049]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.191, 0.261, 0.191]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["TrunkBrown.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials["LeafGreen.023"]}
        />
      </group>
      <group
        position={[10.388, 1.62, 94.464]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials["TrunkBrown.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials["LeafGreen.024"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2007.geometry}
        material={materials["Fence.029"]}
        position={[9.652, 0.179, 95.338]}
        rotation={[-0.059, -1.43, -0.076]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1009.geometry}
        material={materials["Fence.030"]}
        position={[10.393, 0.185, 95.279]}
        rotation={[0.044, -1.481, 0.044]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1010.geometry}
        material={materials["Fence.031"]}
        position={[8.913, 0.175, 95.34]}
        rotation={[3.118, -1.402, 3.119]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2008.geometry}
        material={materials["Fence.032"]}
        position={[11.179, 0.179, 95.01]}
        rotation={[0.034, -1.138, 0.018]}
        scale={[0.046, 0.074, 0.046]}
      />
      <group
        position={[9.41, 0.787, 102.628]}
        rotation={[2.023, 0.273, 2.077]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014.geometry}
          material={materials["Cabin.311"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_1.geometry}
          material={materials["Cabin.312"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_2.geometry}
          material={materials["Cabin.313"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_3.geometry}
          material={materials["Cabin.314"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_4.geometry}
          material={materials["Cabin.315"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_5.geometry}
          material={materials["Cabin.316"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_6.geometry}
          material={materials["Cabin.317"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_7.geometry}
          material={materials["Chimney.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_8.geometry}
          material={materials["Door.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_9.geometry}
          material={materials["Material.037"]}
        />
      </group>
      <group
        position={[11.932, 0.787, 103.892]}
        rotation={[2.06, 0.195, 1.919]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials["Cabin.318"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials["Cabin.319"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_2.geometry}
          material={materials["Cabin.320"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_3.geometry}
          material={materials["Cabin.321"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_4.geometry}
          material={materials["Cabin.322"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_5.geometry}
          material={materials["Cabin.323"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_6.geometry}
          material={materials["Cabin.324"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_7.geometry}
          material={materials["Chimney.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_8.geometry}
          material={materials["Door.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_9.geometry}
          material={materials["Material.038"]}
        />
      </group>
      <group
        position={[14.487, 0.827, 104.352]}
        rotation={[Math.PI, -1.475, Math.PI]}
        scale={[0.92, 0.038, 1.064]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials["Cabin.325"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials["Chimney.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials["Cabin.326"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials["Cabin.327"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials["Cabin.328"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials["Cabin.329"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_7.geometry}
          material={materials["Cabin.330"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_8.geometry}
          material={materials["Cabin.331"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_9.geometry}
          material={materials["Cabin.332"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_10.geometry}
          material={materials["Cabin.333"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_11.geometry}
          material={materials["Cabin.334"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_12.geometry}
          material={materials["Cabin.335"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_13.geometry}
          material={materials["Cabin.336"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_14.geometry}
          material={materials["Cabin.337"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_15.geometry}
          material={materials["Cabin.338"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_16.geometry}
          material={materials["Cabin.339"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_17.geometry}
          material={materials["Door.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_18.geometry}
          material={materials["Material.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_19.geometry}
          material={materials["CabinFence.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_20.geometry}
          material={materials["CabinFence.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_21.geometry}
          material={materials["CabinFence.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_22.geometry}
          material={materials["CabinFence.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_23.geometry}
          material={materials["CabinFence.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_24.geometry}
          material={materials["CabinFence.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_25.geometry}
          material={materials["CabinFence.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_26.geometry}
          material={materials["CabinFence.056"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_27.geometry}
          material={materials["Cabin.340"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_28.geometry}
          material={materials["Cabin.341"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_29.geometry}
          material={materials["Cabin.342"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_30.geometry}
          material={materials["Cabin.343"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_31.geometry}
          material={materials["Cabin.344"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_32.geometry}
          material={materials["Cabin.345"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_33.geometry}
          material={materials["Cabin.346"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_34.geometry}
          material={materials["Cabin.347"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_35.geometry}
          material={materials["Cabin.348"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_36.geometry}
          material={materials["Cabin.349"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_37.geometry}
          material={materials["Cabin.350"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_38.geometry}
          material={materials["Cabin.351"]}
        />
      </group>
      <group
        position={[16.21, 1.585, 104.453]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071.geometry}
          material={materials["TrunkBrown.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder071_1.geometry}
          material={materials["LeafGreen.025"]}
        />
      </group>
      <group
        position={[19.862, 0.96, 103.012]}
        rotation={[0, -0.563, 0]}
        scale={[1.097, 0.046, 1.268]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Cabin.386"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials["Chimney.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_3.geometry}
          material={materials["Cabin.387"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_4.geometry}
          material={materials["Cabin.388"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_5.geometry}
          material={materials["Cabin.389"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_6.geometry}
          material={materials["Cabin.390"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_7.geometry}
          material={materials["Cabin.391"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_8.geometry}
          material={materials["Cabin.392"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_9.geometry}
          material={materials["Cabin.393"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_10.geometry}
          material={materials["Cabin.394"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_11.geometry}
          material={materials["Cabin.395"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_12.geometry}
          material={materials["Cabin.396"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_13.geometry}
          material={materials["Cabin.397"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_14.geometry}
          material={materials["Cabin.398"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_15.geometry}
          material={materials["Cabin.399"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_16.geometry}
          material={materials["Cabin.400"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_17.geometry}
          material={materials["Door.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_18.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_19.geometry}
          material={materials["CabinFence.065"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_20.geometry}
          material={materials["CabinFence.066"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_21.geometry}
          material={materials["CabinFence.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_22.geometry}
          material={materials["CabinFence.068"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_23.geometry}
          material={materials["CabinFence.069"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_24.geometry}
          material={materials["CabinFence.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_25.geometry}
          material={materials["CabinFence.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_26.geometry}
          material={materials["CabinFence.072"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_27.geometry}
          material={materials["Cabin.401"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_28.geometry}
          material={materials["Cabin.402"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_29.geometry}
          material={materials["Cabin.403"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_30.geometry}
          material={materials["Cabin.404"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_31.geometry}
          material={materials["Cabin.405"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_32.geometry}
          material={materials["Cabin.406"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_33.geometry}
          material={materials["Cabin.407"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_34.geometry}
          material={materials["Cabin.408"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_35.geometry}
          material={materials["Cabin.409"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_36.geometry}
          material={materials["Cabin.410"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_37.geometry}
          material={materials["Cabin.411"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_38.geometry}
          material={materials["Cabin.412"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2009.geometry}
        material={materials["Fence.033"]}
        position={[14.481, 0.086, 94.446]}
        rotation={[-0.059, -1.43, -0.076]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1011.geometry}
        material={materials["Fence.034"]}
        position={[15.222, 0.091, 94.388]}
        rotation={[0.044, -1.481, 0.044]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2010.geometry}
        material={materials["Fence.035"]}
        position={[19.018, 0.101, 100.865]}
        rotation={[-3.131, -0.64, 3.13]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1012.geometry}
        material={materials["Fence.036"]}
        position={[19.425, 0.106, 101.487]}
        rotation={[3.137, -0.589, 3.139]}
        scale={[0.046, 0.073, 0.046]}
      />
      <group
        position={[20.073, 1.585, 100.876]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072.geometry}
          material={materials["TrunkBrown.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder072_1.geometry}
          material={materials["LeafGreen.026"]}
        />
      </group>
      <group
        position={[20.073, 1.282, 100.31]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073.geometry}
          material={materials["TrunkBrown.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder073_1.geometry}
          material={materials["LeafGreen.027"]}
        />
      </group>
      <group
        position={[19.838, 1.282, 100.419]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074.geometry}
          material={materials["TrunkBrown.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder074_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2011.geometry}
        material={materials["Fence.037"]}
        position={[13.506, 0.179, 101.533]}
        rotation={[3.101, -1.206, 3.091]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2012.geometry}
        material={materials["Fence.038"]}
        position={[12.726, 0.179, 100.323]}
        rotation={[-3.133, -0.204, 3.125]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1013.geometry}
        material={materials["Fence.039"]}
        position={[12.705, 0.175, 99.622]}
        rotation={[3.138, 0.049, -3.141]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1014.geometry}
        material={materials["Fence.040"]}
        position={[12.917, 0.185, 101.026]}
        rotation={[3.137, -0.301, 3.141]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2013.geometry}
        material={materials["Fence.041"]}
        position={[15.72, 0.086, 104.099]}
        rotation={[-0.077, -1.464, -0.095]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1015.geometry}
        material={materials["Fence.042"]}
        position={[16.462, 0.091, 104.065]}
        rotation={[0.071, -1.515, 0.071]}
        scale={[0.046, 0.073, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var2014.geometry}
        material={materials["Fence.043"]}
        position={[13.45, 0.086, 103.871]}
        rotation={[-3.119, -1.192, -3.139]}
        scale={[0.046, 0.074, 0.046]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Fence_Var1016.geometry}
        material={materials["Fence.045"]}
        position={[10.954, 0.091, 102.737]}
        rotation={[3.133, -1.077, 3.135]}
        scale={[0.046, 0.073, 0.046]}
      />
      <group
        position={[18.244, 1.282, 94.003]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083.geometry}
          material={materials["TrunkBrown.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder083_1.geometry}
          material={materials["LeafGreen.029"]}
        />
      </group>
      <group
        position={[18.933, 1.585, 92.96]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder085_1.geometry}
          material={materials["LeafGreen.030"]}
        />
      </group>
      <group
        position={[16.844, 0.999, 99.273]}
        rotation={[0, -1.382, 0]}
        scale={[0.984, 0.041, 1.137]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials["Cabin.413"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_1.geometry}
          material={materials["Chimney.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_2.geometry}
          material={materials["Cabin.414"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_3.geometry}
          material={materials["Cabin.415"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_4.geometry}
          material={materials["Cabin.416"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_5.geometry}
          material={materials["Cabin.417"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_6.geometry}
          material={materials["Cabin.418"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_7.geometry}
          material={materials["Cabin.419"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_8.geometry}
          material={materials["Cabin.420"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_9.geometry}
          material={materials["Cabin.421"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_10.geometry}
          material={materials["Cabin.422"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_11.geometry}
          material={materials["Cabin.423"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_12.geometry}
          material={materials["Cabin.424"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_13.geometry}
          material={materials["Cabin.425"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_14.geometry}
          material={materials["Cabin.426"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_15.geometry}
          material={materials["Cabin.427"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_16.geometry}
          material={materials["Door.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_17.geometry}
          material={materials["Material.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_18.geometry}
          material={materials["CabinFence.073"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_19.geometry}
          material={materials["CabinFence.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_20.geometry}
          material={materials["CabinFence.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_21.geometry}
          material={materials["CabinFence.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_22.geometry}
          material={materials["CabinFence.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_23.geometry}
          material={materials["CabinFence.078"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_24.geometry}
          material={materials["CabinFence.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_25.geometry}
          material={materials["CabinFence.080"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_26.geometry}
          material={materials["Cabin.428"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_27.geometry}
          material={materials["Cabin.429"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_28.geometry}
          material={materials["Cabin.430"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_29.geometry}
          material={materials["Cabin.431"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_30.geometry}
          material={materials["Cabin.432"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_31.geometry}
          material={materials["Cabin.433"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_32.geometry}
          material={materials["Cabin.434"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_33.geometry}
          material={materials["Cabin.435"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_34.geometry}
          material={materials["Cabin.436"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_35.geometry}
          material={materials["Cabin.437"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_36.geometry}
          material={materials["Cabin.438"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube054_37.geometry}
          material={materials["Cabin.439"]}
        />
      </group>
      <group
        position={[8.926, 1.307, 98.849]}
        rotation={[-Math.PI / 2, 0, -0.498]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material006"].geometry}
            material={materials["candle.009"]}
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
            geometry={nodes["lamp_glass-material006"].geometry}
            material={materials["lamp_glass.010"]}
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
            geometry={nodes["metal-material006"].geometry}
            material={materials["metal.010"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder123.geometry}
        material={materials["Lantern.018"]}
        position={[8.878, 1.583, 98.932]}
        rotation={[-1.84, -0.455, -0.56]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder124.geometry}
        material={materials["Lantern.018"]}
        position={[8.804, 0.774, 99.069]}
        rotation={[-Math.PI, -0.026, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary011.geometry}
        material={materials["Lantern.019"]}
        position={[8.926, 1.533, 98.849]}
        rotation={[0.001, -0.804, -0.04]}
      />
      <group
        position={[12.418, 1.307, 99.014]}
        rotation={[-Math.PI / 2, 0, 0.681]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material007"].geometry}
            material={materials["candle.010"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material007"].geometry}
            material={materials["lamp_glass.011"]}
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
            geometry={nodes["metal-material007"].geometry}
            material={materials["metal.011"]}
            position={[0.001, -0.001, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder126.geometry}
        material={materials["Lantern.020"]}
        position={[12.575, 0.774, 99.211]}
        rotation={[-Math.PI, -1.205, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder163.geometry}
        material={materials["Lantern.020"]}
        position={[12.477, 1.583, 99.09]}
        rotation={[-1.222, -0.399, 0.752]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary012.geometry}
        material={materials["Lantern.021"]}
        position={[12.418, 1.533, 99.014]}
        rotation={[0.001, 0.375, -0.041]}
      />
      <group
        position={[14.74, 1.307, 98.632]}
        rotation={[-Math.PI / 2, 0, 0.062]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material008"].geometry}
            material={materials["candle.011"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material008"].geometry}
            material={materials["lamp_glass.012"]}
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
            geometry={nodes["metal-material008"].geometry}
            material={materials["metal.012"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder166.geometry}
        material={materials["Lantern.022"]}
        position={[14.744, 1.583, 98.729]}
        rotation={[-1.535, -0.522, 0.071]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder204.geometry}
        material={materials["Lantern.022"]}
        position={[14.754, 0.774, 98.884]}
        rotation={[-Math.PI, -0.585, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary014.geometry}
        material={materials["Lantern.023"]}
        position={[14.74, 1.533, 98.632]}
        rotation={[0.001, -0.245, -0.041]}
      />
      <group
        position={[17.583, 1.307, 98.022]}
        rotation={[-Math.PI / 2, 0, 0.237]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material009"].geometry}
            material={materials["candle.012"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material009"].geometry}
            material={materials["lamp_glass.013"]}
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
            geometry={nodes["metal-material009"].geometry}
            material={materials["metal.013"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder206.geometry}
        material={materials["Lantern.024"]}
        position={[17.64, 0.774, 98.267]}
        rotation={[-Math.PI, -0.76, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder207.geometry}
        material={materials["Lantern.024"]}
        position={[17.604, 1.583, 98.116]}
        rotation={[-1.436, -0.508, 0.271]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary015.geometry}
        material={materials["Lantern.025"]}
        position={[17.583, 1.533, 98.022]}
        rotation={[0.001, -0.07, -0.041]}
      />
      <group
        position={[17.32, 1.307, 95.521]}
        rotation={[-Math.PI / 2, 0, 3.125]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material010"].geometry}
            material={materials["candle.013"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material010"].geometry}
            material={materials["lamp_glass.014"]}
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
            geometry={nodes["metal-material010"].geometry}
            material={materials["metal.014"]}
            position={[0.001, -0.001, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder208.geometry}
        material={materials["Lantern.026"]}
        position={[17.324, 1.583, 95.424]}
        rotation={[-1.561, 0.524, 3.122]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder209.geometry}
        material={materials["Lantern.026"]}
        position={[17.326, 0.774, 95.269]}
        rotation={[0, 0.507, -Math.PI]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary016.geometry}
        material={materials["Lantern.027"]}
        position={[17.32, 1.533, 95.521]}
        rotation={[3.141, 0.323, 3.101]}
      />
      <group
        position={[14.122, 1.307, 95.521]}
        rotation={[-Math.PI / 2, 0, -3.094]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material011"].geometry}
            material={materials["candle.014"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material011"].geometry}
            material={materials["lamp_glass.015"]}
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
            geometry={nodes["metal-material011"].geometry}
            material={materials["metal.015"]}
            position={[0.001, -0.001, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder210.geometry}
        material={materials["Lantern.028"]}
        position={[14.112, 0.774, 95.269]}
        rotation={[0, 0.571, -Math.PI]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder211.geometry}
        material={materials["Lantern.028"]}
        position={[14.119, 1.583, 95.424]}
        rotation={[-1.598, 0.523, -3.087]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary017.geometry}
        material={materials["Lantern.029"]}
        position={[14.121, 1.533, 95.521]}
        rotation={[3.141, 0.259, 3.101]}
      />
      <group
        position={[11.186, 1.307, 95.519]}
        rotation={[-Math.PI / 2, 0, -2.888]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material012"].geometry}
            material={materials["candle.015"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material012"].geometry}
            material={materials["lamp_glass.016"]}
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
            geometry={nodes["metal-material012"].geometry}
            material={materials["metal.016"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder212.geometry}
        material={materials["Lantern.030"]}
        position={[11.164, 1.583, 95.425]}
        rotation={[-1.715, 0.505, -2.85]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder213.geometry}
        material={materials["Lantern.030"]}
        position={[11.125, 0.774, 95.275]}
        rotation={[0, 0.778, -Math.PI]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary018.geometry}
        material={materials["Lantern.031"]}
        position={[11.186, 1.533, 95.519]}
        rotation={[3.141, 0.052, 3.101]}
      />
      <group
        position={[8.413, 1.388, 96.179]}
        rotation={[-Math.PI / 2, 0, -2.888]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material013"].geometry}
            material={materials["candle.016"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material013"].geometry}
            material={materials["lamp_glass.017"]}
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
            geometry={nodes["metal-material013"].geometry}
            material={materials["metal.017"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder214.geometry}
        material={materials["Lantern.032"]}
        position={[8.351, 0.855, 95.935]}
        rotation={[0, 0.778, -Math.PI]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder215.geometry}
        material={materials["Lantern.032"]}
        position={[8.39, 1.663, 96.085]}
        rotation={[-1.715, 0.505, -2.85]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary019.geometry}
        material={materials["Lantern.033"]}
        position={[8.412, 1.614, 96.179]}
        rotation={[3.141, 0.052, 3.101]}
      />
      <group
        position={[10.723, 1.252, 101.909]}
        rotation={[-Math.PI / 2, 0, -0.566]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material014"].geometry}
            material={materials["candle.017"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material014"].geometry}
            material={materials["lamp_glass.018"]}
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
            geometry={nodes["metal-material014"].geometry}
            material={materials["metal.018"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder216.geometry}
        material={materials["Lantern.034"]}
        position={[10.669, 1.527, 101.989]}
        rotation={[-1.871, -0.436, -0.633]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder217.geometry}
        material={materials["Lantern.034"]}
        position={[10.586, 0.719, 102.12]}
        rotation={[-Math.PI, 0.042, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary020.geometry}
        material={materials["Lantern.035"]}
        position={[10.723, 1.477, 101.909]}
        rotation={[0.001, -0.872, -0.04]}
      />
      <group
        position={[13.16, 1.252, 102.986]}
        rotation={[-Math.PI / 2, 0, -0.313]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material015"].geometry}
            material={materials["candle.018"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material015"].geometry}
            material={materials["lamp_glass.019"]}
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
            geometry={nodes["metal-material015"].geometry}
            material={materials["metal.019"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder218.geometry}
        material={materials["Lantern.036"]}
        position={[13.081, 0.719, 103.225]}
        rotation={[-Math.PI, -0.211, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder219.geometry}
        material={materials["Lantern.036"]}
        position={[13.129, 1.527, 103.077]}
        rotation={[-1.747, -0.496, -0.357]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary021.geometry}
        material={materials["Lantern.037"]}
        position={[13.16, 1.477, 102.986]}
        rotation={[0.001, -0.619, -0.04]}
      />
      <group
        position={[15.597, 1.252, 103.367]}
        rotation={[-Math.PI / 2, 0, -0.091]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material016"].geometry}
            material={materials["candle.019"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material016"].geometry}
            material={materials["lamp_glass.020"]}
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
            geometry={nodes["metal-material016"].geometry}
            material={materials["metal.020"]}
            position={[0.001, -0.001, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder220.geometry}
        material={materials["Lantern.038"]}
        position={[15.586, 1.527, 103.463]}
        rotation={[-1.623, -0.521, -0.105]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder221.geometry}
        material={materials["Lantern.038"]}
        position={[15.572, 0.719, 103.618]}
        rotation={[-Math.PI, -0.433, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary022.geometry}
        material={materials["Lantern.039"]}
        position={[15.597, 1.477, 103.367]}
        rotation={[0.001, -0.397, -0.041]}
      />
      <group
        position={[18.112, 1.252, 103.268]}
        rotation={[-Math.PI / 2, 0, 0.13]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material017"].geometry}
            material={materials["candle.020"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material017"].geometry}
            material={materials["lamp_glass.021"]}
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
            geometry={nodes["metal-material017"].geometry}
            material={materials["metal.021"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder222.geometry}
        material={materials["Lantern.040"]}
        position={[18.143, 0.719, 103.518]}
        rotation={[-Math.PI, -0.654, 0]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder223.geometry}
        material={materials["Lantern.040"]}
        position={[18.123, 1.527, 103.364]}
        rotation={[-1.496, -0.519, 0.15]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary023.geometry}
        material={materials["Lantern.041"]}
        position={[18.113, 1.477, 103.268]}
        rotation={[0.001, -0.176, -0.041]}
      />
      <group
        position={[18.73, 1.252, 101.382]}
        rotation={[-Math.PI / 2, 0, 2.041]}
        scale={0.291}
      >
        <group position={[0, 0, 0.264]} scale={0.265}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["candle-material018"].geometry}
            material={materials["candle.021"]}
            position={[-0.002, -0.001, -0.439]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["lamp_glass-material018"].geometry}
            material={materials["lamp_glass.022"]}
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
            geometry={nodes["metal-material018"].geometry}
            material={materials["metal.022"]}
            position={[0.001, 0, 0.536]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder224.geometry}
        material={materials["Lantern.042"]}
        position={[18.817, 1.527, 101.34]}
        rotation={[-1.095, 0.228, 1.985]}
        scale={[0.03, 0.162, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder225.geometry}
        material={materials["Lantern.042"]}
        position={[18.956, 0.719, 101.27]}
        rotation={[0, -0.577, Math.PI]}
        scale={[0.031, 0.842, 0.031]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary024.geometry}
        material={materials["Lantern.043"]}
        position={[18.73, 1.477, 101.382]}
        rotation={[3.136, 1.407, 3.106]}
      />
      <group
        position={[12.645, -0.028, 94.971]}
        rotation={[-1.754, -1.457, 1.326]}
        scale={0.412}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0.001, 0, 0]}>
            <group
              position={[-12.499, 93, 0]}
              rotation={[-1.657, 0.013, -0.051]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Bindings_0003.geometry}
                material={materials["Bindings.005"]}
                position={[0, -0.033, -0.166]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_Orange_0003.geometry}
                material={materials["ski_blue.003"]}
                position={[0, -0.022, 0.002]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_L_White_0003.geometry}
                material={materials["White.005"]}
                position={[0, -0.02, 0.002]}
              />
            </group>
            <group
              position={[12.501, 93, 0]}
              rotation={[-1.658, -0.012, 0.034]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Bindings_0003.geometry}
                material={materials["Bindings.005"]}
                position={[0, -0.033, -0.166]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_Orange_0003.geometry}
                material={materials["ski_blue.003"]}
                position={[0, -0.022, 0.002]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Ski_R_White_0003.geometry}
                material={materials["White.005"]}
                position={[0, -0.02, 0.002]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[13.583, -0.028, 94.887]}
        rotation={[-1.778, -0.288, -0.027]}
        scale={0.412}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0.001, -0.001]}>
            <group
              position={[12.5, 93, -0.002]}
              rotation={[-1.658, -0.012, 0.034]}
              scale={100}
            >
              <group
                position={[-0.17, -0.02, -0.163]}
                rotation={[0.008, 0.223, 0.065]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ski_R_White_0004_1.geometry}
                  material={materials["White.006"]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ski_R_White_0004_2.geometry}
                  material={materials.LightRed}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Ski_R_White_0004_3.geometry}
                  material={materials["Bindings.006"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
      <group
        position={[19.838, 1.334, 96.458]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder341.geometry}
          material={materials["TrunkBrown.057"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder341_1.geometry}
          material={materials["LeafGreen.057"]}
        />
      </group>
      <group
        position={[20.073, 1.334, 96.349]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder342.geometry}
          material={materials["TrunkBrown.058"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder342_1.geometry}
          material={materials["LeafGreen.058"]}
        />
      </group>
      <group
        position={[20.073, 1.637, 96.915]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder343.geometry}
          material={materials["TrunkBrown.059"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder343_1.geometry}
          material={materials["LeafGreen.059"]}
        />
      </group>
      <group
        position={[19.462, 1.637, 97.745]}
        rotation={[-3.092, -1.17, -3.096]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder344.geometry}
          material={materials["TrunkBrown.060"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder344_1.geometry}
          material={materials["LeafGreen.060"]}
        />
      </group>
      <group
        position={[19.983, 1.334, 97.966]}
        rotation={[-3.092, -1.17, -3.096]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder345.geometry}
          material={materials["TrunkBrown.061"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder345_1.geometry}
          material={materials["LeafGreen.061"]}
        />
      </group>
      <group
        position={[19.974, 1.334, 97.708]}
        rotation={[-3.092, -1.17, -3.096]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder346.geometry}
          material={materials["TrunkBrown.062"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder346_1.geometry}
          material={materials["LeafGreen.062"]}
        />
      </group>
      <group
        position={[19.982, 1.334, 95.463]}
        rotation={[-3.121, -0.395, -3.134]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder347.geometry}
          material={materials["TrunkBrown.063"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder347_1.geometry}
          material={materials["LeafGreen.063"]}
        />
      </group>
      <group
        position={[19.807, 1.334, 95.654]}
        rotation={[-3.121, -0.395, -3.134]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder348.geometry}
          material={materials["TrunkBrown.064"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder348_1.geometry}
          material={materials["LeafGreen.064"]}
        />
      </group>
      <group
        position={[19.59, 1.637, 95.131]}
        rotation={[-3.121, -0.395, -3.134]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder349.geometry}
          material={materials["TrunkBrown.065"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder349_1.geometry}
          material={materials["LeafGreen.065"]}
        />
      </group>
      <group
        position={[19.949, 1.282, 99.168]}
        rotation={[-3.063, -1.32, -3.066]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder350.geometry}
          material={materials["TrunkBrown.066"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder350_1.geometry}
          material={materials["LeafGreen.066"]}
        />
      </group>
      <group
        position={[19.996, 1.282, 99.422]}
        rotation={[-3.063, -1.32, -3.066]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder351.geometry}
          material={materials["TrunkBrown.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder351_1.geometry}
          material={materials["LeafGreen.067"]}
        />
      </group>
      <group
        position={[19.57, 1.585, 98.495]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder352.geometry}
          material={materials["TrunkBrown.068"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder352_1.geometry}
          material={materials["LeafGreen.068"]}
        />
      </group>
      <group
        position={[21.009, 1.876, 97.337]}
        rotation={[-0.022, 0.457, 0.009]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder353.geometry}
          material={materials["TrunkBrown.069"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder353_1.geometry}
          material={materials["LeafGreen.069"]}
        />
      </group>
      <group
        position={[20.76, 1.573, 96.829]}
        rotation={[-0.022, 0.457, 0.009]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder354.geometry}
          material={materials["TrunkBrown.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder354_1.geometry}
          material={materials["LeafGreen.070"]}
        />
      </group>
      <group
        position={[20.974, 1.876, 94.72]}
        rotation={[-0.059, 1.232, 0.055]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder355.geometry}
          material={materials["TrunkBrown.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder355_1.geometry}
          material={materials["LeafGreen.071"]}
        />
      </group>
      <group
        position={[21.275, 1.876, 96.581]}
        rotation={[-0.019, 0.003, 0]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder356.geometry}
          material={materials["TrunkBrown.072"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder356_1.geometry}
          material={materials["LeafGreen.072"]}
        />
      </group>
      <group
        position={[20.679, 1.573, 96.028]}
        rotation={[-3.122, -0.065, -3.14]}
        scale={[0.18, 0.246, 0.18]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder357.geometry}
          material={materials["TrunkBrown.073"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder357_1.geometry}
          material={materials["LeafGreen.073"]}
        />
      </group>
      <group
        position={[20.38, 1.876, 93.834]}
        rotation={[-3.115, 0.747, 3.123]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder358.geometry}
          material={materials["TrunkBrown.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder358_1.geometry}
          material={materials["LeafGreen.074"]}
        />
      </group>
      <group
        position={[20.207, 1.637, 94.67]}
        rotation={[-2.202, -1.547, -2.202]}
        scale={[0.232, 0.318, 0.232]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder359.geometry}
          material={materials["TrunkBrown.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder359_1.geometry}
          material={materials["LeafGreen.075"]}
        />
      </group>
      <group
        position={[13.67, 0.095, 95.142]}
        rotation={[3.106, -1.001, -1.601]}
        scale={0.042}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0005.geometry}
            material={materials["barrel_wood.005"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0005.geometry}
            material={materials["Metall_rings.005"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
      <group
        position={[13.078, 0.119, 100.068]}
        rotation={[-0.033, 0, 0]}
        scale={0.041}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0006.geometry}
            material={materials["barrel_wood.006"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0006.geometry}
            material={materials["Metall_rings.006"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
      <group
        position={[13.467, 0.145, 103.572]}
        rotation={[1.555, 0, 0]}
        scale={0.041}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Barrel_body_barrel_wood_0007.geometry}
            material={materials["barrel_wood.007"]}
            position={[0.086, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rings_Metall_rings_0007.geometry}
            material={materials["Metall_rings.007"]}
            position={[0, -0.013, 0]}
          />
        </group>
      </group>
      <group
        position={[12.384, 1.544, 102.917]}
        rotation={[2.949, 0.879, 0.263]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder225_1.geometry}
          material={materials["LightBase.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder225_2.geometry}
          material={materials["LightRed.026"]}
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
        position={[12.765, 1.433, 102.512]}
        rotation={[3.063, 0.895, 0.175]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder254.geometry}
          material={materials["LightBase.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder254_1.geometry}
          material={materials["LightRed.027"]}
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
        position={[13.266, 1.414, 101.962]}
        rotation={[-2.985, 0.907, -0.01]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder255.geometry}
          material={materials["LightBase.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder255_1.geometry}
          material={materials["LightRed.028"]}
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
        position={[13.793, 1.523, 101.395]}
        rotation={[-2.985, 0.907, -0.01]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder263.geometry}
          material={materials["LightBase.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder263_1.geometry}
          material={materials["LightRed.029"]}
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
    </group>
  );
}

useGLTF.preload("/models/Arc1800.glb");
