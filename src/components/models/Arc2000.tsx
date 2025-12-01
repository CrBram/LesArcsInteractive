import { useGLTF } from "@react-three/drei";

export function Arc2000(props: React.ComponentPropsWithoutRef<"group">) {
  const { nodes, materials } = useGLTF("/models/SkiTown.glb") as any;

  return (
    <group {...props} dispose={null}>
      <group
        position={[-7.447, 1.011, -3.344]}
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
      </group>
      <group
        position={[-4.956, 1.011, -3.344]}
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
      </group>
      <group
        position={[-2.007, 1.378, -3.344]}
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
      </group>
      <group
        position={[1.126, 1.011, -3.344]}
        rotation={[1.047, -0.008, -1.558]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials["Cabin.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials["Cabin.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_3.geometry}
          material={materials["Cabin.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_4.geometry}
          material={materials["Cabin.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_5.geometry}
          material={materials["Cabin.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_6.geometry}
          material={materials["Cabin.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_7.geometry}
          material={materials["Cabin.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_8.geometry}
          material={materials["Chimney.003"]}
        />
      </group>
      <group
        position={[1.197, 1.011, 2.367]}
        rotation={[2.094, 0.009, 1.586]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials["Cabin.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials["Cabin.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_3.geometry}
          material={materials["Cabin.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_4.geometry}
          material={materials["Cabin.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_5.geometry}
          material={materials["Cabin.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_6.geometry}
          material={materials["Cabin.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_7.geometry}
          material={materials["Cabin.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_8.geometry}
          material={materials["Chimney.004"]}
        />
      </group>
      <group
        position={[-7.376, 1.011, 2.348]}
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
      </group>
      <group
        position={[-4.243, 1.378, 2.355]}
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
      </group>
      <group
        position={[-1.294, 1.011, 2.361]}
        rotation={[2.094, 0.009, 1.586]}
        scale={[0.07, 0.891, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_1.geometry}
          material={materials["Cabin.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_2.geometry}
          material={materials["Cabin.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_3.geometry}
          material={materials["Cabin.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_4.geometry}
          material={materials["Cabin.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_5.geometry}
          material={materials["Cabin.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_6.geometry}
          material={materials["Cabin.054"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_7.geometry}
          material={materials["Cabin.055"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_8.geometry}
          material={materials["Chimney.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.WoodenSign}
        position={[-1.991, 1.299, -3.036]}
        scale={[0.009, 0.021, 0.297]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.WoodenSign}
        position={[-1.991, 1.381, -3.161]}
        rotation={[0.54, 0, 0]}
        scale={[0.009, 0.018, 0.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.WoodenSign}
        position={[-1.991, 1.067, -2.947]}
        scale={[0.028, 0.131, 0.203]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.WoodenSign}
        position={[-1.991, 1.237, -2.842]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.008, 0.021, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.WoodenSign}
        position={[-1.991, 1.237, -3.069]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.008, 0.021, 0.044]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Ground}
        position={[0, 0, 2.422]}
        rotation={[0, -1.571, 0]}
        scale={-39.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup005.geometry}
        material={materials["Rock.005"]}
        position={[20.697, -0.248, 10.769]}
        rotation={[0, -0.252, 0]}
        scale={[9.799, 9.524, 9.799]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup001.geometry}
        material={materials["Rock.001"]}
        position={[26.143, -0.248, -3.83]}
        rotation={[0, -0.252, 0]}
        scale={[9.799, 9.524, 9.799]}
      />
    </group>
  );
}

useGLTF.preload("/models/SkiTown.glb");
