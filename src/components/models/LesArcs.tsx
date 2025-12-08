import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: Record<string, any>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};

export function LesArcs(props: React.ComponentPropsWithoutRef<"group">) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/LesArcs.glb"
  ) as unknown as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      if (action) {
        action.play();
      }
    });
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Chairlift011"
          position={[-1.032, 2.31, 127.195]}
          rotation={[-1.519, -0.133, 1.761]}
          scale={0.004}
        >
          <group name="root011" position={[-0.002, 0, 0]}>
            <group
              name="GLTF_SceneRootNode011"
              position={[-0.002, 0, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="node-0_0011" position={[-0.002, 0, 0]}>
                <mesh
                  name="Object_4011"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4011.geometry}
                  material={materials["03___Default.011"]}
                  position={[-0.002, 0, 0]}
                />
                <mesh
                  name="Object_5011"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5011.geometry}
                  material={materials["07___Default.012"]}
                  position={[-0.002, 0, 0]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Chairlift012"
          position={[3.246, 6.279, 128.753]}
          rotation={[-1.75, -0.389, -2.32]}
          scale={0.004}
        >
          <group name="root012" position={[0.001, 0.002, 0]}>
            <group
              name="GLTF_SceneRootNode012"
              position={[0.001, 0.002, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="node-0_0012" position={[0.001, -0.001, -0.001]}>
                <mesh
                  name="Object_4012"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4012.geometry}
                  material={materials["03___Default.012"]}
                  position={[25.359, 21.316, 2.133]}
                />
                <mesh
                  name="Object_5012"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5012.geometry}
                  material={materials["07___Default.013"]}
                  position={[25.359, 21.316, 2.133]}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="MountainLarge"
          castShadow
          receiveShadow
          geometry={nodes.MountainLarge.geometry}
          material={materials["Rock.006"]}
          position={[1.53, 1.876, 129.817]}
          scale={[5.821, 7.276, 7.69]}
        />
        <group
          name="FullTree138"
          position={[-1.4, 1.757, 126.07]}
          rotation={[-0.02, 0.002, 0.05]}
          scale={0.086}
        >
          <mesh
            name="Cylinder100"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder100.geometry}
            material={materials["TrunkBrown.011"]}
          />
          <mesh
            name="Cylinder100_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder100_1.geometry}
            material={materials["LeafGreen.010"]}
          />
          <mesh
            name="SnowBall019"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall019.geometry}
            material={materials["Snow.005"]}
            position={[-0.007, 3.547, -0.02]}
            rotation={[0.019, -0.003, -0.05]}
            scale={11.694}
          />
        </group>
        <group
          name="FullTree139"
          position={[-1.682, 1.748, 125.825]}
          rotation={[-0.02, 0.002, 0.05]}
          scale={[0.085, 0.061, 0.086]}
        >
          <mesh
            name="Cylinder101"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder101.geometry}
            material={materials["TrunkBrown.012"]}
          />
          <mesh
            name="Cylinder101_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder101_1.geometry}
            material={materials["LeafGreen.011"]}
          />
          <mesh
            name="SnowBall020"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall020.geometry}
            material={materials["Snow.006"]}
            position={[-0.06, 3.345, -0.02]}
            rotation={[0.021, -0.003, -0.053]}
            scale={[11.711, 16.4, 11.697]}
          />
        </group>
        <group
          name="FullTree140"
          position={[-1.985, 1.713, 126.032]}
          rotation={[-0.02, -0.001, 0.158]}
          scale={[0.085, 0.076, 0.086]}
        >
          <mesh
            name="Cylinder104"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104.geometry}
            material={materials["TrunkBrown.013"]}
          />
          <mesh
            name="Cylinder104_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder104_1.geometry}
            material={materials["LeafGreen.012"]}
          />
          <mesh
            name="SnowBall021"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall021.geometry}
            material={materials["Snow.007"]}
            position={[0.048, 3.415, -0.044]}
            rotation={[0.02, -0.003, -0.159]}
            scale={[11.733, 13.041, 11.695]}
          />
        </group>
        <group
          name="FullTree141"
          position={[-0.289, 1.757, 125.436]}
          rotation={[-0.197, 0.002, 0.05]}
          scale={0.086}
        >
          <mesh
            name="Cylinder105"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder105.geometry}
            material={materials["TrunkBrown.014"]}
          />
          <mesh
            name="Cylinder105_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder105_1.geometry}
            material={materials["LeafGreen.013"]}
          />
          <mesh
            name="SnowBall022"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall022.geometry}
            material={materials["Snow.020"]}
            position={[-0.015, 3.611, 0.369]}
            rotation={[0.197, -0.011, -0.049]}
            scale={11.694}
          />
        </group>
        <group
          name="FullTree142"
          position={[-1.4, 2.716, 130.738]}
          rotation={[-0.02, 0.002, 0.05]}
          scale={0.086}
        >
          <mesh
            name="Cylinder106"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder106.geometry}
            material={materials["TrunkBrown.015"]}
          />
          <mesh
            name="Cylinder106_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder106_1.geometry}
            material={materials["LeafGreen.014"]}
          />
          <mesh
            name="SnowBall023"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall023.geometry}
            material={materials["Snow.021"]}
            position={[-0.018, 3.419, 0]}
            rotation={[0.019, -0.003, -0.05]}
            scale={11.694}
          />
        </group>
        <group
          name="FullTree143"
          position={[-0.998, 2.716, 130.4]}
          rotation={[-0.02, 0.002, 0.05]}
          scale={0.086}
        >
          <mesh
            name="Cylinder108"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder108.geometry}
            material={materials["TrunkBrown.016"]}
          />
          <mesh
            name="Cylinder108_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder108_1.geometry}
            material={materials["LeafGreen.015"]}
          />
          <mesh
            name="SnowBall024"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall024.geometry}
            material={materials["Snow.022"]}
            position={[-0.009, 3.46, -0.008]}
            rotation={[0.019, -0.003, -0.05]}
            scale={11.694}
          />
        </group>
        <group
          name="FullTree144"
          position={[-0.98, 2.688, 129.006]}
          rotation={[0.033, 0.002, 0.05]}
          scale={0.086}
        >
          <mesh
            name="Cylinder112"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder112.geometry}
            material={materials["TrunkBrown.017"]}
          />
          <mesh
            name="Cylinder112_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder112_1.geometry}
            material={materials["LeafGreen.016"]}
          />
          <mesh
            name="SnowBall025"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall025.geometry}
            material={materials["Snow.023"]}
            position={[-0.006, 3.465, -0.042]}
            rotation={[-0.033, 0, -0.05]}
            scale={11.694}
          />
        </group>
        <group
          name="FullTree145"
          position={[-1.641, 1.585, 133.509]}
          rotation={[-0.02, 0.002, 0.05]}
          scale={[0.085, 0.067, 0.086]}
        >
          <mesh
            name="Cylinder113"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder113.geometry}
            material={materials["TrunkBrown.018"]}
          />
          <mesh
            name="Cylinder113_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder113_1.geometry}
            material={materials["LeafGreen.017"]}
          />
          <mesh
            name="SnowBall026"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall026.geometry}
            material={materials["Snow.024"]}
            position={[0.009, 3.471, -0.017]}
            rotation={[0.02, -0.003, -0.051]}
            scale={[11.709, 14.865, 11.696]}
          />
        </group>
        <group
          name="FullTree146"
          position={[1.415, 4.085, 130.141]}
          rotation={[0.033, 0.002, 0.05]}
          scale={[0.085, 0.072, 0.085]}
        >
          <mesh
            name="Cylinder114"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder114.geometry}
            material={materials["TrunkBrown.019"]}
          />
          <mesh
            name="Cylinder114_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder114_1.geometry}
            material={materials["LeafGreen.018"]}
          />
          <mesh
            name="SnowBall027"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall027.geometry}
            material={materials["Snow.025"]}
            position={[0, 3.19, -0.031]}
            rotation={[-0.034, 0, -0.051]}
            scale={[11.705, 13.914, 11.699]}
          />
        </group>
        <group
          name="FullTree147"
          position={[0.736, 3.701, 131.017]}
          rotation={[0.033, 0, 0.004]}
          scale={[0.085, 0.072, 0.085]}
        >
          <mesh
            name="Cylinder115"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder115.geometry}
            material={materials["TrunkBrown.020"]}
          />
          <mesh
            name="Cylinder115_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder115_1.geometry}
            material={materials["LeafGreen.019"]}
          />
          <mesh
            name="SnowBall028"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall028.geometry}
            material={materials["Snow.026"]}
            position={[0.016, 3.231, -0.042]}
            rotation={[-0.034, 0, -0.004]}
            scale={[11.699, 13.919, 11.699]}
          />
        </group>
        <group
          name="FullTree148"
          position={[1.337, 3.718, 131.017]}
          rotation={[0.033, 0.005, 0.148]}
          scale={[0.085, 0.072, 0.085]}
        >
          <mesh
            name="Cylinder116"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder116.geometry}
            material={materials["TrunkBrown.021"]}
          />
          <mesh
            name="Cylinder116_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder116_1.geometry}
            material={materials["LeafGreen.020"]}
          />
          <mesh
            name="SnowBall029"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall029.geometry}
            material={materials["Snow.027"]}
            position={[-0.018, 3.04, -0.026]}
            rotation={[-0.034, 0, -0.15]}
            scale={[11.752, 13.875, 11.699]}
          />
        </group>
        <group
          name="FullTree149"
          position={[1.337, 3.621, 130.699]}
          rotation={[0.033, 0.005, 0.148]}
          scale={[0.085, 0.053, 0.085]}
        >
          <mesh
            name="Cylinder117"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder117.geometry}
            material={materials["TrunkBrown.022"]}
          />
          <mesh
            name="Cylinder117_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder117_1.geometry}
            material={materials["LeafGreen.021"]}
          />
          <mesh
            name="SnowBall030"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall030.geometry}
            material={materials["Snow.028"]}
            position={[-0.001, 2.853, -0.023]}
            rotation={[-0.038, 0.001, -0.164]}
            scale={[11.964, 18.853, 11.71]}
          />
        </group>
        <group
          name="FullTree150"
          position={[1.415, 3.848, 132.604]}
          rotation={[0.033, 0.002, 0.05]}
          scale={[0.085, 0.072, 0.085]}
        >
          <mesh
            name="Cylinder118"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder118.geometry}
            material={materials["TrunkBrown.023"]}
          />
          <mesh
            name="Cylinder118_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder118_1.geometry}
            material={materials["LeafGreen.022"]}
          />
          <mesh
            name="SnowBall031"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall031.geometry}
            material={materials["Snow.029"]}
            position={[-0.005, 3.269, 0.01]}
            rotation={[-0.034, 0, -0.051]}
            scale={[11.705, 13.914, 11.699]}
          />
        </group>
        <group
          name="FullTree151"
          position={[2.631, 4.137, 127.333]}
          rotation={[0.033, 0.002, 0.05]}
          scale={[0.085, 0.056, 0.085]}
        >
          <mesh
            name="Cylinder119"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119.geometry}
            material={materials["TrunkBrown.024"]}
          />
          <mesh
            name="Cylinder119_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder119_1.geometry}
            material={materials["LeafGreen.023"]}
          />
          <mesh
            name="SnowBall033"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall033.geometry}
            material={materials["Snow.031"]}
            position={[0, 2.801, -0.072]}
            rotation={[-0.036, 0, -0.054]}
            scale={[11.721, 17.771, 11.706]}
          />
        </group>
        <group
          name="FullTree152"
          position={[2.159, 4.137, 127.103]}
          rotation={[0.033, 0.002, 0.05]}
          scale={[0.07, 0.046, 0.07]}
        >
          <mesh
            name="Cylinder120"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder120.geometry}
            material={materials["TrunkBrown.025"]}
          />
          <mesh
            name="Cylinder120_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder120_1.geometry}
            material={materials["LeafGreen.024"]}
          />
          <mesh
            name="SnowBall034"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall034.geometry}
            material={materials["Snow.032"]}
            position={[-0.027, 3.068, -0.053]}
            rotation={[-0.036, 0, -0.054]}
            scale={[14.322, 21.715, 14.304]}
          />
        </group>
        <group
          name="FullTree153"
          position={[1.207, 3.84, 127.359]}
          rotation={[0.033, 0.004, 0.128]}
          scale={[0.066, 0.042, 0.067]}
        >
          <mesh
            name="Cylinder121"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder121.geometry}
            material={materials["TrunkBrown.026"]}
          />
          <mesh
            name="Cylinder121_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder121_1.geometry}
            material={materials["LeafGreen.025"]}
          />
          <mesh
            name="SnowBall035"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall035.geometry}
            material={materials["Snow.033"]}
            position={[0.11, 3.189, -0.02]}
            rotation={[-0.037, 0, -0.055]}
            scale={[15.068, 23.816, 15.046]}
          />
        </group>
        <group
          name="FullTree154"
          position={[1.207, 3.937, 126.114]}
          rotation={[0.036, -0.006, 0.11]}
          scale={[0.067, 0.045, 0.067]}
        >
          <mesh
            name="Cylinder122"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder122.geometry}
            material={materials["TrunkBrown.027"]}
          />
          <mesh
            name="Cylinder122_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder122_1.geometry}
            material={materials["LeafGreen.026"]}
          />
          <mesh
            name="SnowBall036"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall036.geometry}
            material={materials.Snow}
            position={[0.082, 3.053, -0.076]}
            rotation={[-0.038, 0.01, -0.119]}
            scale={[15.149, 22.388, 15.044]}
          />
        </group>
        <group
          name="FullTree155"
          position={[3.346, 4.702, 131.571]}
          rotation={[0.224, -0.002, -0.053]}
          scale={[0.07, 0.059, 0.07]}
        >
          <mesh
            name="Cylinder123"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder123.geometry}
            material={materials["TrunkBrown.028"]}
          />
          <mesh
            name="Cylinder123_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder123_1.geometry}
            material={materials["LeafGreen.027"]}
          />
          <mesh
            name="SnowBall032"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall032.geometry}
            material={materials["Snow.030"]}
            position={[-0.067, 3.084, -0.293]}
            rotation={[-0.226, -0.01, 0.054]}
            scale={[14.329, 16.912, 14.464]}
          />
        </group>
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Ground.001"]}
          position={[0, 0, 127.115]}
          scale={-39.205}
        />
        <mesh
          name="Mountains_Backup006"
          castShadow
          receiveShadow
          geometry={nodes.Mountains_Backup006.geometry}
          material={materials["Rock.008"]}
          position={[-26.052, -0.047, 138.437]}
          rotation={[0, -1.194, 0]}
          scale={3.74}
        />
        <mesh
          name="Mountains_Backup008"
          castShadow
          receiveShadow
          geometry={nodes.Mountains_Backup008.geometry}
          material={materials["Rock.009"]}
          position={[5.241, -0.248, 156.793]}
          rotation={[0, -1.194, 0]}
          scale={2.799}
        />
        <mesh
          name="Mountains_Backup009"
          castShadow
          receiveShadow
          geometry={nodes.Mountains_Backup009.geometry}
          material={materials["Rock.010"]}
          position={[29.784, -0.248, 110.959]}
          rotation={[0, -1.194, 0]}
          scale={5.163}
        />
        <mesh
          name="Mountains_Backup010"
          castShadow
          receiveShadow
          geometry={nodes.Mountains_Backup010.geometry}
          material={materials["Rock.011"]}
          position={[13.657, -0.248, 100.942]}
          scale={5.163}
        />
        <group
          name="FullTree156"
          position={[-12.462, 0.128, 126.439]}
          rotation={[-0.02, -0.307, -0.006]}
          scale={0.086}
        >
          <mesh
            name="Cylinder193"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder193.geometry}
            material={materials["TrunkBrown.029"]}
          />
          <mesh
            name="Cylinder193_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder193_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree157"
          position={[-10.357, 0.114, 125.363]}
          rotation={[0, -0.309, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder194"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder194.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder194_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder194_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree158"
          position={[-14.02, 0.081, 130.823]}
          rotation={[-0.02, -0.307, -0.006]}
          scale={0.086}
        >
          <mesh
            name="Cylinder195"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder195.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder195_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder195_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree159"
          position={[-13.02, 0.024, 131.165]}
          rotation={[-0.053, -0.3, 0.036]}
          scale={0.086}
        >
          <mesh
            name="Cylinder196"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder196.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder196_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder196_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree160"
          position={[-8.946, 0.114, 126.082]}
          rotation={[0, -0.309, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder197"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder197.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder197_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder197_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree161"
          position={[-7.222, 0.074, 126.781]}
          rotation={[0, -0.309, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder198"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder198.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder198_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder198_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree162"
          position={[-16.615, 0.115, 138.127]}
          rotation={[0, -0.037, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder199"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder199.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder199_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder199_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree163"
          position={[-15.635, 0.154, 137.896]}
          rotation={[0, -0.037, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder200"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder200.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder200_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder200_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree164"
          position={[-16.069, 0.115, 136.621]}
          rotation={[0, -0.378, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder201"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder201.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder201_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder201_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree165"
          position={[-15.614, 0.154, 137.329]}
          rotation={[0, -0.037, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder202"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder202.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder202_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder202_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree166"
          position={[-16.557, 0.115, 135.464]}
          rotation={[0, -0.037, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder203"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder203.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder203_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder203_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree167"
          position={[-16.012, 0.115, 133.958]}
          rotation={[0, -0.378, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder204"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder204.geometry}
            material={materials["TrunkBrown.030"]}
          />
          <mesh
            name="Cylinder204_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder204_1.geometry}
            material={materials["LeafGreen.028"]}
          />
        </group>
        <group
          name="FullTree168"
          position={[-8.889, 0.285, 117.649]}
          rotation={[Math.PI, -0.329, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder205"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder205.geometry}
            material={materials["TrunkBrown.031"]}
          />
          <mesh
            name="Cylinder205_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder205_1.geometry}
            material={materials["LeafGreen.029"]}
          />
        </group>
        <group
          name="FullTree169"
          position={[-7.384, 0.295, 117.135]}
          rotation={[Math.PI, -0.329, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder206"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206.geometry}
            material={materials["TrunkBrown.031"]}
          />
          <mesh
            name="Cylinder206_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder206_1.geometry}
            material={materials["LeafGreen.029"]}
          />
        </group>
        <group
          name="FullTree170"
          position={[-9.275, 0.285, 121.871]}
          rotation={[Math.PI, -0.671, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder207"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207.geometry}
            material={materials["TrunkBrown.031"]}
          />
          <mesh
            name="Cylinder207_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder207_1.geometry}
            material={materials["LeafGreen.029"]}
          />
        </group>
        <group
          name="FullTree171"
          position={[-8.535, 0.295, 119.68]}
          rotation={[Math.PI, -0.671, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder208"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208.geometry}
            material={materials["TrunkBrown.031"]}
          />
          <mesh
            name="Cylinder208_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder208_1.geometry}
            material={materials["LeafGreen.029"]}
          />
        </group>
        <group
          name="FullTree172"
          position={[-7.94, 0.256, 118.867]}
          rotation={[Math.PI, -0.671, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder209"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209.geometry}
            material={materials["TrunkBrown.031"]}
          />
          <mesh
            name="Cylinder209_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder209_1.geometry}
            material={materials["LeafGreen.029"]}
          />
        </group>
        <group
          name="FullTree173"
          position={[-10.936, 0.208, 122.058]}
          rotation={[Math.PI, -0.671, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder210"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210.geometry}
            material={materials["TrunkBrown.031"]}
          />
          <mesh
            name="Cylinder210_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder210_1.geometry}
            material={materials["LeafGreen.029"]}
          />
        </group>
        <group
          name="FullTree174"
          position={[-10.448, 0.23, 122.33]}
          rotation={[Math.PI, -0.671, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder211"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211.geometry}
            material={materials["TrunkBrown.031"]}
          />
          <mesh
            name="Cylinder211_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder211_1.geometry}
            material={materials["LeafGreen.029"]}
          />
        </group>
        <group
          name="FullTree175"
          position={[-9.929, 0.144, 137.601]}
          rotation={[0, -0.069, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder212"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212.geometry}
            material={materials["TrunkBrown.032"]}
          />
          <mesh
            name="Cylinder212_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder212_1.geometry}
            material={materials["LeafGreen.030"]}
          />
        </group>
        <group
          name="FullTree176"
          position={[-11.515, 0.154, 137.492]}
          rotation={[0, -0.069, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder213"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213.geometry}
            material={materials["TrunkBrown.032"]}
          />
          <mesh
            name="Cylinder213_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder213_1.geometry}
            material={materials["LeafGreen.030"]}
          />
        </group>
        <group
          name="FullTree177"
          position={[-9.579, 0.144, 140.342]}
          rotation={[0, 0.273, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder214"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214.geometry}
            material={materials["TrunkBrown.032"]}
          />
          <mesh
            name="Cylinder214_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder214_1.geometry}
            material={materials["LeafGreen.030"]}
          />
        </group>
        <group
          name="FullTree178"
          position={[-11.11, 0.154, 140.771]}
          rotation={[0, 0.273, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder215"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder215.geometry}
            material={materials["TrunkBrown.032"]}
          />
          <mesh
            name="Cylinder215_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder215_1.geometry}
            material={materials["LeafGreen.030"]}
          />
        </group>
        <group
          name="FullTree179"
          position={[-11.974, 0.115, 141.289]}
          rotation={[0, 0.273, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder216"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder216.geometry}
            material={materials["TrunkBrown.032"]}
          />
          <mesh
            name="Cylinder216_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder216_1.geometry}
            material={materials["LeafGreen.030"]}
          />
        </group>
        <group
          name="FullTree180"
          position={[22.302, 0.115, 135.536]}
          rotation={[0, 1.189, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder217"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder217.geometry}
            material={materials["TrunkBrown.033"]}
          />
          <mesh
            name="Cylinder217_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder217_1.geometry}
            material={materials["LeafGreen.031"]}
          />
        </group>
        <group
          name="FullTree181"
          position={[22.416, 0.154, 134.535]}
          rotation={[0, 1.189, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder218"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218.geometry}
            material={materials["TrunkBrown.033"]}
          />
          <mesh
            name="Cylinder218_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder218_1.geometry}
            material={materials["LeafGreen.031"]}
          />
        </group>
        <group
          name="FullTree182"
          position={[23.009, 0.144, 133.059]}
          rotation={[0, 1.189, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder219"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219.geometry}
            material={materials["TrunkBrown.033"]}
          />
          <mesh
            name="Cylinder219_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder219_1.geometry}
            material={materials["LeafGreen.031"]}
          />
        </group>
        <group
          name="FullTree183"
          position={[19.568, 0.154, 132.861]}
          rotation={[0, 0.847, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder220"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220.geometry}
            material={materials["TrunkBrown.033"]}
          />
          <mesh
            name="Cylinder220_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder220_1.geometry}
            material={materials["LeafGreen.031"]}
          />
        </group>
        <group
          name="FullTree184"
          position={[20.621, 0.144, 131.669]}
          rotation={[0, 0.847, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder221"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder221.geometry}
            material={materials["TrunkBrown.033"]}
          />
          <mesh
            name="Cylinder221_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder221_1.geometry}
            material={materials["LeafGreen.031"]}
          />
        </group>
        <group
          name="FullTree185"
          position={[8.188, 0.23, 122.785]}
          rotation={[0, -1.554, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder222"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder222.geometry}
            material={materials["TrunkBrown.034"]}
          />
          <mesh
            name="Cylinder222_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder222_1.geometry}
            material={materials["LeafGreen.032"]}
          />
        </group>
        <group
          name="FullTree186"
          position={[7.676, 0.208, 123.007]}
          rotation={[0, -1.554, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder223"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder223.geometry}
            material={materials["TrunkBrown.034"]}
          />
          <mesh
            name="Cylinder223_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder223_1.geometry}
            material={materials["LeafGreen.032"]}
          />
        </group>
        <group
          name="FullTree187"
          position={[6.967, 0.256, 118.688]}
          rotation={[0, -1.554, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder224"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder224.geometry}
            material={materials["TrunkBrown.034"]}
          />
          <mesh
            name="Cylinder224_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder224_1.geometry}
            material={materials["LeafGreen.032"]}
          />
        </group>
        <group
          name="FullTree188"
          position={[7.25, 0.295, 119.655]}
          rotation={[0, -1.554, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder225"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder225.geometry}
            material={materials["TrunkBrown.034"]}
          />
          <mesh
            name="Cylinder225_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder225_1.geometry}
            material={materials["LeafGreen.032"]}
          />
        </group>
        <group
          name="FullTree189"
          position={[8.538, 0.285, 121.576]}
          rotation={[0, -1.554, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder226"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder226.geometry}
            material={materials["TrunkBrown.034"]}
          />
          <mesh
            name="Cylinder226_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder226_1.geometry}
            material={materials["LeafGreen.032"]}
          />
        </group>
        <group
          name="FullTree190"
          position={[5.931, 0.295, 117.193]}
          rotation={[Math.PI, -1.245, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder227"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227.geometry}
            material={materials["TrunkBrown.034"]}
          />
          <mesh
            name="Cylinder227_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder227_1.geometry}
            material={materials["LeafGreen.032"]}
          />
        </group>
        <group
          name="FullTree191"
          position={[5.423, 0.285, 118.7]}
          rotation={[Math.PI, -1.245, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder228"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228.geometry}
            material={materials["TrunkBrown.034"]}
          />
          <mesh
            name="Cylinder228_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder228_1.geometry}
            material={materials["LeafGreen.032"]}
          />
        </group>
        <group
          name="FullTree192"
          position={[14.027, 0.115, 134.278]}
          rotation={[0, 0.538, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder229"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder229_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder229_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree193"
          position={[14.89, 0.115, 135.627]}
          rotation={[0, 0.88, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder230"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder230.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder230_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder230_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree194"
          position={[16.945, 0.154, 136.014]}
          rotation={[0, 0.88, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder231"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder231.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder231_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder231_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree195"
          position={[16.105, 0.115, 135.944]}
          rotation={[0, 0.538, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder232"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder232.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder232_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder232_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree196"
          position={[17.382, 0.154, 136.375]}
          rotation={[0, 0.88, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder233"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder233.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder233_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder233_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree197"
          position={[16.968, 0.115, 137.294]}
          rotation={[0, 0.88, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder234"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder234.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder234_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder234_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree198"
          position={[13.683, 0.074, 122.935]}
          rotation={[0, 0.607, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder235"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder235.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder235_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder235_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree199"
          position={[12.08, 0.114, 123.878]}
          rotation={[0, 0.607, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder236"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder236.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder236_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder236_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree200"
          position={[13.633, 0.024, 130.204]}
          rotation={[-0.062, 0.615, 0.088]}
          scale={0.086}
        >
          <mesh
            name="Cylinder237"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder237.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder237_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder237_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree201"
          position={[12.752, 0.081, 130.789]}
          rotation={[-0.024, 0.609, 0.013]}
          scale={0.086}
        >
          <mesh
            name="Cylinder238"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder238.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder238_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder238_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree202"
          position={[10.65, 0.114, 124.559]}
          rotation={[0, 0.607, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder239"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder239.geometry}
            material={materials["TrunkBrown.035"]}
          />
          <mesh
            name="Cylinder239_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder239_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree203"
          position={[10.223, 0.128, 126.885]}
          rotation={[-0.024, 0.609, 0.013]}
          scale={0.086}
        >
          <mesh
            name="Cylinder240"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder240.geometry}
            material={materials["TrunkBrown.036"]}
          />
          <mesh
            name="Cylinder240_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder240_1.geometry}
            material={materials["LeafGreen.033"]}
          />
        </group>
        <group
          name="FullTree204"
          position={[-7.314, 0.128, 142.129]}
          rotation={[-0.022, 0.488, 0.01]}
          scale={0.086}
        >
          <mesh
            name="Cylinder241"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder241.geometry}
            material={materials["TrunkBrown.037"]}
          />
          <mesh
            name="Cylinder241_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder241_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree205"
          position={[-6.608, 0.114, 139.873]}
          rotation={[0, 0.486, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder242"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder242.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder242_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder242_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree206"
          position={[-5.276, 0.081, 146.311]}
          rotation={[-0.022, 0.488, 0.01]}
          scale={0.086}
        >
          <mesh
            name="Cylinder243"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder243.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder243_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder243_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree207"
          position={[-4.331, 0.024, 145.837]}
          rotation={[-0.058, 0.494, 0.079]}
          scale={0.086}
        >
          <mesh
            name="Cylinder244"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder244.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder244_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder244_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree208"
          position={[-5.107, 0.114, 139.369]}
          rotation={[0, 0.486, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder245"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder245.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder245_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder245_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree209"
          position={[-3.401, 0.074, 138.628]}
          rotation={[0, 0.486, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder246"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder246.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder246_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder246_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree210"
          position={[-1.878, 0.115, 153.278]}
          rotation={[0, 0.758, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder247"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder247.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder247_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder247_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree211"
          position={[-1.357, 0.154, 152.416]}
          rotation={[0, 0.758, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder248"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder248.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder248_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder248_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree212"
          position={[-2.571, 0.115, 151.834]}
          rotation={[0, 0.417, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder249"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder249.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder249_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder249_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree213"
          position={[-1.747, 0.154, 152.005]}
          rotation={[0, 0.758, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder250"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder250.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder250_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder250_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree214"
          position={[-3.739, 0.115, 151.373]}
          rotation={[0, 0.758, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder251"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder251.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder251_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder251_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree215"
          position={[-4.432, 0.115, 149.928]}
          rotation={[0, 0.417, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder252"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder252.geometry}
            material={materials["TrunkBrown.038"]}
          />
          <mesh
            name="Cylinder252_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder252_1.geometry}
            material={materials["LeafGreen.034"]}
          />
        </group>
        <group
          name="FullTree216"
          position={[-11.088, 0.285, 133.424]}
          rotation={[Math.PI, -1.124, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder253"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder253.geometry}
            material={materials["TrunkBrown.039"]}
          />
          <mesh
            name="Cylinder253_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder253_1.geometry}
            material={materials["LeafGreen.035"]}
          />
        </group>
        <group
          name="FullTree217"
          position={[-10.401, 0.295, 131.989]}
          rotation={[Math.PI, -1.124, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder254"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254.geometry}
            material={materials["TrunkBrown.039"]}
          />
          <mesh
            name="Cylinder254_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder254_1.geometry}
            material={materials["LeafGreen.035"]}
          />
        </group>
        <group
          name="FullTree218"
          position={[-8.344, 0.285, 136.655]}
          rotation={[Math.PI, -1.466, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder255"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255.geometry}
            material={materials["TrunkBrown.039"]}
          />
          <mesh
            name="Cylinder255_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder255_1.geometry}
            material={materials["LeafGreen.035"]}
          />
        </group>
        <group
          name="FullTree219"
          position={[-9.39, 0.295, 134.593]}
          rotation={[Math.PI, -1.466, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder256"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256.geometry}
            material={materials["TrunkBrown.039"]}
          />
          <mesh
            name="Cylinder256_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder256_1.geometry}
            material={materials["LeafGreen.035"]}
          />
        </group>
        <group
          name="FullTree220"
          position={[-9.554, 0.256, 133.599]}
          rotation={[Math.PI, -1.466, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder257"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257.geometry}
            material={materials["TrunkBrown.039"]}
          />
          <mesh
            name="Cylinder257_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder257_1.geometry}
            material={materials["LeafGreen.035"]}
          />
        </group>
        <group
          name="FullTree221"
          position={[-9.373, 0.208, 137.972]}
          rotation={[Math.PI, -1.466, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder258"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258.geometry}
            material={materials["TrunkBrown.039"]}
          />
          <mesh
            name="Cylinder258_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder258_1.geometry}
            material={materials["LeafGreen.035"]}
          />
        </group>
        <group
          name="FullTree222"
          position={[-8.837, 0.23, 137.814]}
          rotation={[Math.PI, -1.466, Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder259"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259.geometry}
            material={materials["TrunkBrown.039"]}
          />
          <mesh
            name="Cylinder259_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder259_1.geometry}
            material={materials["LeafGreen.035"]}
          />
        </group>
        <group
          name="FullTree223"
          position={[2.429, 0.144, 148.137]}
          rotation={[0, 0.726, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder260"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260.geometry}
            material={materials["TrunkBrown.040"]}
          />
          <mesh
            name="Cylinder260_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder260_1.geometry}
            material={materials["LeafGreen.036"]}
          />
        </group>
        <group
          name="FullTree224"
          position={[1.239, 0.154, 149.193]}
          rotation={[0, 0.726, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder261"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261.geometry}
            material={materials["TrunkBrown.040"]}
          />
          <mesh
            name="Cylinder261_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder261_1.geometry}
            material={materials["LeafGreen.036"]}
          />
        </group>
        <group
          name="FullTree225"
          position={[4.631, 0.144, 149.806]}
          rotation={[0, 1.068, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder262"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262.geometry}
            material={materials["TrunkBrown.040"]}
          />
          <mesh
            name="Cylinder262_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder262_1.geometry}
            material={materials["LeafGreen.036"]}
          />
        </group>
        <group
          name="FullTree226"
          position={[3.864, 0.154, 151.2]}
          rotation={[0, 1.068, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder263"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263.geometry}
            material={materials["TrunkBrown.040"]}
          />
          <mesh
            name="Cylinder263_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder263_1.geometry}
            material={materials["LeafGreen.036"]}
          />
        </group>
        <group
          name="FullTree227"
          position={[3.63, 0.115, 152.179]}
          rotation={[0, 1.068, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder264"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder264.geometry}
            material={materials["TrunkBrown.040"]}
          />
          <mesh
            name="Cylinder264_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder264_1.geometry}
            material={materials["LeafGreen.036"]}
          />
        </group>
        <group
          name="FullTree228"
          position={[9.309, 0.115, 138.731]}
          rotation={[-Math.PI, 0.968, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder265"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265.geometry}
            material={materials["TrunkBrown.041"]}
          />
          <mesh
            name="Cylinder265_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder265_1.geometry}
            material={materials["LeafGreen.037"]}
          />
        </group>
        <group
          name="FullTree229"
          position={[8.539, 0.154, 138.083]}
          rotation={[-Math.PI, 0.968, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder266"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266.geometry}
            material={materials["TrunkBrown.041"]}
          />
          <mesh
            name="Cylinder266_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder266_1.geometry}
            material={materials["LeafGreen.037"]}
          />
        </group>
        <group
          name="FullTree230"
          position={[7.637, 0.144, 136.772]}
          rotation={[-Math.PI, 0.968, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder267"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267.geometry}
            material={materials["TrunkBrown.041"]}
          />
          <mesh
            name="Cylinder267_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder267_1.geometry}
            material={materials["LeafGreen.037"]}
          />
        </group>
        <group
          name="FullTree231"
          position={[5.568, 0.154, 139.529]}
          rotation={[-Math.PI, 1.31, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder268"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder268.geometry}
            material={materials["TrunkBrown.041"]}
          />
          <mesh
            name="Cylinder268_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder268_1.geometry}
            material={materials["LeafGreen.037"]}
          />
        </group>
        <group
          name="FullTree232"
          position={[5.158, 0.144, 137.992]}
          rotation={[-Math.PI, 1.31, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder269"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder269.geometry}
            material={materials["TrunkBrown.041"]}
          />
          <mesh
            name="Cylinder269_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder269_1.geometry}
            material={materials["LeafGreen.037"]}
          />
        </group>
        <group
          name="FullTree233"
          position={[-9.121, 0.23, 143.434]}
          rotation={[0, -0.57, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder270"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder270.geometry}
            material={materials["TrunkBrown.042"]}
          />
          <mesh
            name="Cylinder270_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder270_1.geometry}
            material={materials["LeafGreen.038"]}
          />
        </group>
        <group
          name="FullTree234"
          position={[-9.22, 0.208, 143.983]}
          rotation={[0, -0.57, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder271"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder271.geometry}
            material={materials["TrunkBrown.042"]}
          />
          <mesh
            name="Cylinder271_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder271_1.geometry}
            material={materials["LeafGreen.038"]}
          />
        </group>
        <group
          name="FullTree235"
          position={[-13.209, 0.256, 142.184]}
          rotation={[0, -0.57, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder272"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder272.geometry}
            material={materials["TrunkBrown.042"]}
          />
          <mesh
            name="Cylinder272_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder272_1.geometry}
            material={materials["LeafGreen.038"]}
          />
        </group>
        <group
          name="FullTree236"
          position={[-12.248, 0.295, 142.483]}
          rotation={[0, -0.57, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder273"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder273.geometry}
            material={materials["TrunkBrown.042"]}
          />
          <mesh
            name="Cylinder273_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder273_1.geometry}
            material={materials["LeafGreen.038"]}
          />
        </group>
        <group
          name="FullTree237"
          position={[-9.935, 0.285, 142.473]}
          rotation={[0, -0.57, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder274"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder274.geometry}
            material={materials["TrunkBrown.042"]}
          />
          <mesh
            name="Cylinder274_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder274_1.geometry}
            material={materials["LeafGreen.038"]}
          />
        </group>
        <group
          name="FullTree238"
          position={[-15.028, 0.295, 142.219]}
          rotation={[0, -0.912, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder275"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder275.geometry}
            material={materials["TrunkBrown.042"]}
          />
          <mesh
            name="Cylinder275_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder275_1.geometry}
            material={materials["LeafGreen.038"]}
          />
        </group>
        <group
          name="FullTree239"
          position={[-14.054, 0.285, 143.477]}
          rotation={[0, -0.912, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder276"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder276.geometry}
            material={materials["TrunkBrown.042"]}
          />
          <mesh
            name="Cylinder276_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder276_1.geometry}
            material={materials["LeafGreen.038"]}
          />
        </group>
        <group
          name="FullTree240"
          position={[3.683, 0.115, 144.928]}
          rotation={[0, 1.522, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder277"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder277.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder277_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder277_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree241"
          position={[5.284, 0.115, 144.956]}
          rotation={[-Math.PI, 1.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder278"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder278.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder278_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder278_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree242"
          position={[6.743, 0.154, 143.458]}
          rotation={[-Math.PI, 1.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder279"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder279.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder279_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder279_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree243"
          position={[6.221, 0.115, 144.119]}
          rotation={[0, 1.522, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder280"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder280_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder280_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree244"
          position={[7.286, 0.154, 143.294]}
          rotation={[-Math.PI, 1.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder281"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder281.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder281_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder281_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree245"
          position={[7.822, 0.115, 144.147]}
          rotation={[-Math.PI, 1.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder282"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder282.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder282_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder282_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree246"
          position={[-5.956, 0.074, 138.939]}
          rotation={[-Math.PI, 1.55, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder283"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder283.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder283_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder283_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree247"
          position={[-6.058, 0.114, 140.796]}
          rotation={[-Math.PI, 1.55, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder284"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder284.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder284_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder284_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree248"
          position={[0.071, 0.024, 143.003]}
          rotation={[-2.104, 1.512, 2.157]}
          scale={0.086}
        >
          <mesh
            name="Cylinder285"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder285_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder285_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree249"
          position={[0.071, 0.081, 144.06]}
          rotation={[-2.447, 1.54, 2.447]}
          scale={0.086}
        >
          <mesh
            name="Cylinder286"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder286_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder286_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree250"
          position={[-6.281, 0.114, 142.364]}
          rotation={[-Math.PI, 1.55, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder287"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder287.geometry}
            material={materials["TrunkBrown.043"]}
          />
          <mesh
            name="Cylinder287_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder287_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree251"
          position={[-4.58, 0.128, 144.007]}
          rotation={[-2.447, 1.54, 2.447]}
          scale={0.086}
        >
          <mesh
            name="Cylinder288"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder288.geometry}
            material={materials["TrunkBrown.044"]}
          />
          <mesh
            name="Cylinder288_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder288_1.geometry}
            material={materials["LeafGreen.039"]}
          />
        </group>
        <group
          name="FullTree252"
          position={[6.838, 0.448, 110.034]}
          rotation={[-0.062, -1.254, -0.059]}
          scale={0.086}
        >
          <mesh
            name="Cylinder289"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder289.geometry}
            material={materials["TrunkBrown.045"]}
          />
          <mesh
            name="Cylinder289_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder289_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree253"
          position={[8.941, 0.433, 111.115]}
          rotation={[0, -1.257, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder290"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder290.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder290_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder290_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree254"
          position={[2.37, 0.116, 111.329]}
          rotation={[-0.062, -1.254, -0.059]}
          scale={0.086}
        >
          <mesh
            name="Cylinder291"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder291.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder291_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder291_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree255"
          position={[2.676, 0.059, 112.341]}
          rotation={[-0.159, -1.244, -0.099]}
          scale={0.086}
        >
          <mesh
            name="Cylinder292"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder292.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder292_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder292_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree256"
          position={[9.181, 0.114, 112.681]}
          rotation={[0, -1.257, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder293"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder293.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder293_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder293_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree257"
          position={[9.62, 0.074, 114.488]}
          rotation={[0, -1.257, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder294"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder294.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder294_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder294_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree258"
          position={[-5.076, 0.115, 113.487]}
          rotation={[0, -0.984, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder295"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder295.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder295_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder295_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree259"
          position={[-4.315, 0.154, 114.147]}
          rotation={[0, -0.984, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder296"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder296.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder296_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder296_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree260"
          position={[-3.534, 0.115, 113.05]}
          rotation={[0, -1.326, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder297"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder297.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder297_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder297_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree261"
          position={[-3.843, 0.154, 113.834]}
          rotation={[0, -0.984, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder298"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder298.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder298_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder298_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree262"
          position={[-2.88, 0.115, 111.978]}
          rotation={[0, -0.984, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder299"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder299.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder299_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder299_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree263"
          position={[-1.339, 0.115, 111.542]}
          rotation={[0, -1.326, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder300"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder300.geometry}
            material={materials["TrunkBrown.046"]}
          />
          <mesh
            name="Cylinder300_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder300_1.geometry}
            material={materials["LeafGreen.040"]}
          />
        </group>
        <group
          name="FullTree264"
          position={[16.06, 0.285, 107.803]}
          rotation={[-Math.PI, 0.618, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder301"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder301.geometry}
            material={materials["TrunkBrown.047"]}
          />
          <mesh
            name="Cylinder301_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder301_1.geometry}
            material={materials["LeafGreen.041"]}
          />
        </group>
        <group
          name="FullTree265"
          position={[17.356, 0.295, 108.725]}
          rotation={[-Math.PI, 0.618, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder302"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder302.geometry}
            material={materials["TrunkBrown.047"]}
          />
          <mesh
            name="Cylinder302_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder302_1.geometry}
            material={materials["LeafGreen.041"]}
          />
        </group>
        <group
          name="FullTree266"
          position={[12.407, 0.285, 109.955]}
          rotation={[-Math.PI, 0.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder303"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder303.geometry}
            material={materials["TrunkBrown.047"]}
          />
          <mesh
            name="Cylinder303_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder303_1.geometry}
            material={materials["LeafGreen.041"]}
          />
        </group>
        <group
          name="FullTree267"
          position={[14.618, 0.295, 109.277]}
          rotation={[-Math.PI, 0.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder304"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder304.geometry}
            material={materials["TrunkBrown.047"]}
          />
          <mesh
            name="Cylinder304_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder304_1.geometry}
            material={materials["LeafGreen.041"]}
          />
        </group>
        <group
          name="FullTree268"
          position={[15.626, 0.256, 109.285]}
          rotation={[-Math.PI, 0.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder305"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder305.geometry}
            material={materials["TrunkBrown.047"]}
          />
          <mesh
            name="Cylinder305_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder305_1.geometry}
            material={materials["LeafGreen.041"]}
          />
        </group>
        <group
          name="FullTree269"
          position={[11.286, 0.528, 108.716]}
          rotation={[-Math.PI, 0.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder306"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder306.geometry}
            material={materials["TrunkBrown.047"]}
          />
          <mesh
            name="Cylinder306_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder306_1.geometry}
            material={materials["LeafGreen.041"]}
          />
        </group>
        <group
          name="FullTree270"
          position={[11.35, 0.556, 109.27]}
          rotation={[-Math.PI, 0.277, -Math.PI]}
          scale={0.086}
        >
          <mesh
            name="Cylinder307"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder307.geometry}
            material={materials["TrunkBrown.047"]}
          />
          <mesh
            name="Cylinder307_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder307_1.geometry}
            material={materials["LeafGreen.041"]}
          />
        </group>
        <group
          name="FullTree271"
          position={[-0.745, 0.144, 118.608]}
          rotation={[0, -1.016, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder308"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder308.geometry}
            material={materials["TrunkBrown.048"]}
          />
          <mesh
            name="Cylinder308_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder308_1.geometry}
            material={materials["LeafGreen.042"]}
          />
        </group>
        <group
          name="FullTree272"
          position={[-1.582, 0.154, 117.256]}
          rotation={[0, -1.016, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder309"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder309.geometry}
            material={materials["TrunkBrown.048"]}
          />
          <mesh
            name="Cylinder309_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder309_1.geometry}
            material={materials["LeafGreen.042"]}
          />
        </group>
        <group
          name="FullTree273"
          position={[-2.766, 0.144, 120.492]}
          rotation={[0, -0.675, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder310"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder310.geometry}
            material={materials["TrunkBrown.048"]}
          />
          <mesh
            name="Cylinder310_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder310_1.geometry}
            material={materials["LeafGreen.042"]}
          />
        </group>
        <group
          name="FullTree274"
          position={[-4.008, 0.154, 119.499]}
          rotation={[0, -0.675, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder311"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder311.geometry}
            material={materials["TrunkBrown.048"]}
          />
          <mesh
            name="Cylinder311_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder311_1.geometry}
            material={materials["LeafGreen.042"]}
          />
        </group>
        <group
          name="FullTree275"
          position={[-4.933, 0.115, 119.101]}
          rotation={[0, -0.675, 0]}
          scale={0.086}
        >
          <mesh
            name="Cylinder312"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder312.geometry}
            material={materials["TrunkBrown.048"]}
          />
          <mesh
            name="Cylinder312_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder312_1.geometry}
            material={materials["LeafGreen.042"]}
          />
        </group>
        <mesh
          name="Fence_Var2003"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var2003.geometry}
          material={materials["Fence.012"]}
          position={[-2.138, 2.678, 129.529]}
          rotation={[0.041, 0.011, 0]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1004"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1004.geometry}
          material={materials["Fence.013"]}
          position={[-2.096, 2.702, 129.13]}
          rotation={[0.053, -0.114, -0.024]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1007"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1007.geometry}
          material={materials["Fence.015"]}
          position={[-2.132, 2.653, 129.931]}
          rotation={[0.014, -0.033, -0.002]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var2004"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var2004.geometry}
          material={materials["Fence.016"]}
          position={[-2.232, 1.622, 125.969]}
          rotation={[0.292, -0.752, 0.209]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var2005"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var2005.geometry}
          material={materials["Fence.007"]}
          position={[-2.54, 1.568, 126.652]}
          rotation={[-0.097, 0.011, 0]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1006"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1006.geometry}
          material={materials["Fence.009"]}
          position={[-2.531, 1.597, 127.06]}
          rotation={[-0.066, -0.203, 0]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1008"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1008.geometry}
          material={materials["Fence.010"]}
          position={[-2.497, 1.547, 126.26]}
          rotation={[-0.027, -0.114, -0.024]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var2006"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var2006.geometry}
          material={materials["Fence.011"]}
          position={[-2.149, 2.64, 130.355]}
          rotation={[-0.005, -0.108, 0.005]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1009"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1009.geometry}
          material={materials["Fence.014"]}
          position={[-1.747, 2.705, 128.926]}
          rotation={[-0.009, -1.091, -0.067]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var2007"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var2007.geometry}
          material={materials["Fence.017"]}
          position={[-2.459, 1.492, 134.552]}
          rotation={[-0.038, 0.627, -0.029]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1010"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1010.geometry}
          material={materials["Fence.018"]}
          position={[-2.525, 1.519, 133.834]}
          rotation={[0.039, -0.475, -0.061]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1011"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1011.geometry}
          material={materials["Fence.019"]}
          position={[-2.655, 1.493, 134.202]}
          rotation={[0.015, 0.501, -0.058]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var2008"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var2008.geometry}
          material={materials["Fence.020"]}
          position={[1.78, 4.077, 125.905]}
          rotation={[1.829, -1.507, 1.834]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var2009"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var2009.geometry}
          material={materials["Fence.021"]}
          position={[2.589, 4.102, 125.9]}
          rotation={[0.689, -1.561, 0.686]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1012"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1012.geometry}
          material={materials["Fence.022"]}
          position={[3.231, 4.134, 126.234]}
          rotation={[3.056, -0.589, 3.085]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1013"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1013.geometry}
          material={materials["Fence.023"]}
          position={[2.19, 4.085, 125.908]}
          rotation={[2.044, -1.555, 2.041]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var1014"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var1014.geometry}
          material={materials["Fence.024"]}
          position={[2.99, 4.11, 125.909]}
          rotation={[1.778, -1.545, 1.748]}
          scale={[0.026, 0.042, 0.026]}
        />
        <mesh
          name="Fence_Var2010"
          castShadow
          receiveShadow
          geometry={nodes.Fence_Var2010.geometry}
          material={materials["Fence.025"]}
          position={[1.356, 4.043, 125.905]}
          rotation={[1.614, -1.19, 1.617]}
          scale={[0.026, 0.042, 0.026]}
        />
        <group
          name="Wall_Back002"
          position={[-1.256, 1.717, 126.83]}
          rotation={[1.809, -0.471, 0.492]}
          scale={[0.026, 0.33, 0.026]}
        >
          <mesh
            name="Cylinder087"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder087.geometry}
            material={materials["Cabin.013"]}
          />
          <mesh
            name="Cylinder087_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder087_1.geometry}
            material={materials["Cabin.012"]}
          />
          <mesh
            name="Cylinder087_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder087_2.geometry}
            material={materials["Cabin.011"]}
          />
          <mesh
            name="Cylinder087_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder087_3.geometry}
            material={materials["Cabin.010"]}
          />
        </group>
        <mesh
          name="Wall_Right002"
          castShadow
          receiveShadow
          geometry={nodes.Wall_Right002.geometry}
          material={materials["Cabin.013"]}
          position={[-1.627, 2.031, 126.976]}
          rotation={[1.088, -0.212, -1.188]}
          scale={[0.026, 0.33, 0.026]}
        />
        <mesh
          name="Wall_Left002"
          castShadow
          receiveShadow
          geometry={nodes.Wall_Left002.geometry}
          material={materials["Cabin.013"]}
          position={[-1.385, 2.031, 126.455]}
          rotation={[1.088, -0.212, -1.188]}
          scale={[0.026, 0.33, 0.026]}
        />
        <mesh
          name="Roof002"
          castShadow
          receiveShadow
          geometry={nodes.Roof002.geometry}
          material={materials["Cabin.013"]}
          position={[-1.505, 2.071, 126.716]}
          rotation={[0, -0.435, 0]}
          scale={[0.347, 0.016, 0.437]}
        >
          <mesh
            name="SnowBall015"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall015.geometry}
            material={materials["Snow.001"]}
            position={[-0.003, 4.109, 0.005]}
            rotation={[0, 0.44, 0]}
            scale={[2.782, 63.516, 2.404]}
          />
        </mesh>
        <group
          name="Wall_Front002"
          position={[-1.751, 1.896, 126.6]}
          rotation={[1.809, -0.471, 0.492]}
          scale={[0.026, 0.33, 0.026]}
        >
          <mesh
            name="Cylinder075"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075.geometry}
            material={materials["Cabin.013"]}
          />
          <mesh
            name="Cylinder075_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075_1.geometry}
            material={materials["Cabin.009"]}
          />
          <mesh
            name="Cylinder075_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075_2.geometry}
            material={materials["Cabin.008"]}
          />
          <mesh
            name="Cylinder075_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder075_3.geometry}
            material={materials["Cabin.001"]}
          />
        </group>
        <mesh
          name="Chimney002"
          castShadow
          receiveShadow
          geometry={nodes.Chimney002.geometry}
          material={materials["Chimney.001"]}
          position={[-1.3, 2.278, 126.686]}
          rotation={[0, -0.435, 0]}
          scale={[0.037, 0.083, 0.037]}
        />
        <mesh
          name="Floor002"
          castShadow
          receiveShadow
          geometry={nodes.Floor002.geometry}
          material={materials["Cabin.013"]}
          position={[-1.488, 1.703, 126.714]}
          rotation={[0, -0.435, 0]}
          scale={0.387}
        />
        <group
          name="Wall_Back003"
          position={[-1.231, 2.684, 129.587]}
          rotation={[1.382, -0.491, -0.385]}
          scale={[0.026, 0.33, 0.026]}
        >
          <mesh
            name="Cylinder088"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder088.geometry}
            material={materials["Cabin.014"]}
          />
          <mesh
            name="Cylinder088_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder088_1.geometry}
            material={materials["Cabin.015"]}
          />
          <mesh
            name="Cylinder088_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder088_2.geometry}
            material={materials["Cabin.016"]}
          />
          <mesh
            name="Cylinder088_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder088_3.geometry}
            material={materials["Cabin.017"]}
          />
        </group>
        <mesh
          name="Wall_Right003"
          castShadow
          receiveShadow
          geometry={nodes.Wall_Right003.geometry}
          material={materials["Cabin.014"]}
          position={[-1.395, 2.997, 129.95]}
          rotation={[1.072, 0.166, -1.866]}
          scale={[0.026, 0.33, 0.026]}
        />
        <mesh
          name="Wall_Left003"
          castShadow
          receiveShadow
          geometry={nodes.Wall_Left003.geometry}
          material={materials["Cabin.014"]}
          position={[-1.585, 2.997, 129.409]}
          rotation={[1.072, 0.166, -1.866]}
          scale={[0.026, 0.33, 0.026]}
        />
        <mesh
          name="Roof003"
          castShadow
          receiveShadow
          geometry={nodes.Roof003.geometry}
          material={materials["Cabin.014"]}
          position={[-1.489, 3.038, 129.679]}
          rotation={[0, 0.338, 0]}
          scale={[0.347, 0.016, 0.437]}
        >
          <mesh
            name="SnowBall016"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall016.geometry}
            material={materials["Snow.002"]}
            position={[-0.004, 4.173, 0.002]}
            rotation={[0, -0.344, 0]}
            scale={[2.819, 63.516, 2.361]}
          />
        </mesh>
        <group
          name="Wall_Front003"
          position={[-1.746, 2.863, 129.768]}
          rotation={[1.382, -0.491, -0.385]}
          scale={[0.026, 0.33, 0.026]}
        >
          <mesh
            name="Cylinder091"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091.geometry}
            material={materials["Cabin.014"]}
          />
          <mesh
            name="Cylinder091_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_1.geometry}
            material={materials["Cabin.018"]}
          />
          <mesh
            name="Cylinder091_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_2.geometry}
            material={materials["Cabin.019"]}
          />
          <mesh
            name="Cylinder091_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder091_3.geometry}
            material={materials["Cabin.020"]}
          />
        </group>
        <mesh
          name="Chimney003"
          castShadow
          receiveShadow
          geometry={nodes.Chimney003.geometry}
          material={materials["Chimney.002"]}
          position={[-1.363, 3.245, 129.515]}
          rotation={[0, 0.338, 0]}
          scale={[0.037, 0.083, 0.037]}
        />
        <mesh
          name="Floor003"
          castShadow
          receiveShadow
          geometry={nodes.Floor003.geometry}
          material={materials["Cabin.014"]}
          position={[-1.478, 2.669, 129.666]}
          rotation={[0, 0.338, 0]}
          scale={0.387}
        />
        <group
          name="Wall_Back004"
          position={[-1.862, 1.546, 133.913]}
          rotation={[1.165, -0.34, -0.911]}
          scale={[0.026, 0.33, 0.026]}
        >
          <mesh
            name="Cylinder095"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder095.geometry}
            material={materials["Cabin.027"]}
          />
          <mesh
            name="Cylinder095_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder095_1.geometry}
            material={materials["Cabin.026"]}
          />
          <mesh
            name="Cylinder095_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder095_2.geometry}
            material={materials["Cabin.025"]}
          />
          <mesh
            name="Cylinder095_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder095_3.geometry}
            material={materials["Cabin.024"]}
          />
        </group>
        <mesh
          name="Wall_Right004"
          castShadow
          receiveShadow
          geometry={nodes.Wall_Right004.geometry}
          material={materials["Cabin.027"]}
          position={[-1.83, 1.86, 134.31]}
          rotation={[1.203, 0.382, -2.339]}
          scale={[0.026, 0.33, 0.026]}
        />
        <mesh
          name="Wall_Left004"
          castShadow
          receiveShadow
          geometry={nodes.Wall_Left004.geometry}
          material={materials["Cabin.027"]}
          position={[-2.258, 1.86, 133.927]}
          rotation={[1.203, 0.382, -2.339]}
          scale={[0.026, 0.33, 0.026]}
        />
        <mesh
          name="Roof004"
          castShadow
          receiveShadow
          geometry={nodes.Roof004.geometry}
          material={materials["Cabin.027"]}
          position={[-2.043, 1.9, 134.117]}
          rotation={[0, 0.84, 0]}
          scale={[0.347, 0.016, 0.437]}
        >
          <mesh
            name="SnowBall017"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall017.geometry}
            material={materials["Snow.003"]}
            position={[0.006, 3.87, 0.003]}
            rotation={[0, -0.836, 0]}
            scale={[2.568, 63.516, 2.632]}
          />
        </mesh>
        <group
          name="Wall_Front004"
          position={[-2.226, 1.725, 134.319]}
          rotation={[1.165, -0.34, -0.911]}
          scale={[0.026, 0.33, 0.026]}
        >
          <mesh
            name="Cylinder092"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder092.geometry}
            material={materials["Cabin.027"]}
          />
          <mesh
            name="Cylinder092_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder092_1.geometry}
            material={materials["Cabin.023"]}
          />
          <mesh
            name="Cylinder092_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder092_2.geometry}
            material={materials["Cabin.022"]}
          />
          <mesh
            name="Cylinder092_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder092_3.geometry}
            material={materials["Cabin.021"]}
          />
        </group>
        <mesh
          name="Chimney004"
          castShadow
          receiveShadow
          geometry={nodes.Chimney004.geometry}
          material={materials["Chimney.003"]}
          position={[-2.012, 2.107, 133.913]}
          rotation={[0, 0.84, 0]}
          scale={[0.037, 0.083, 0.037]}
        />
        <mesh
          name="Floor004"
          castShadow
          receiveShadow
          geometry={nodes.Floor004.geometry}
          material={materials["Cabin.027"]}
          position={[-2.04, 1.532, 134.1]}
          rotation={[0, 0.84, 0]}
          scale={0.387}
        />
        <group
          name="Wall_Back005"
          position={[2.502, 4.125, 126.728]}
          rotation={[2.088, -0.087, 1.419]}
          scale={[0.026, 0.33, 0.026]}
        >
          <mesh
            name="Cylinder096"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder096.geometry}
            material={materials["Cabin.028"]}
          />
          <mesh
            name="Cylinder096_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder096_1.geometry}
            material={materials["Cabin.029"]}
          />
          <mesh
            name="Cylinder096_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder096_2.geometry}
            material={materials["Cabin.030"]}
          />
          <mesh
            name="Cylinder096_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder096_3.geometry}
            material={materials["Cabin.031"]}
          />
        </group>
        <mesh
          name="Wall_Right005"
          castShadow
          receiveShadow
          geometry={nodes.Wall_Right005.geometry}
          material={materials["Cabin.028"]}
          position={[2.171, 4.438, 126.508]}
          rotation={[1.471, -0.515, -0.201]}
          scale={[0.026, 0.33, 0.026]}
        />
        <mesh
          name="Wall_Left005"
          castShadow
          receiveShadow
          geometry={nodes.Wall_Left005.geometry}
          material={materials["Cabin.028"]}
          position={[2.736, 4.438, 126.408]}
          rotation={[1.471, -0.515, -0.201]}
          scale={[0.026, 0.33, 0.026]}
        />
        <mesh
          name="Roof005"
          castShadow
          receiveShadow
          geometry={nodes.Roof005.geometry}
          material={materials["Cabin.028"]}
          position={[2.454, 4.479, 126.459]}
          rotation={[0, -1.396, 0]}
          scale={[0.347, 0.016, 0.437]}
        >
          <mesh
            name="SnowBall018"
            castShadow
            receiveShadow
            geometry={nodes.SnowBall018.geometry}
            material={materials["Snow.004"]}
            position={[0.004, 3.712, -0.002]}
            rotation={[0, 1.391, 0]}
            scale={[2.309, 63.516, 2.862]}
          />
        </mesh>
        <group
          name="Wall_Front005"
          position={[2.408, 4.304, 126.19]}
          rotation={[2.088, -0.087, 1.419]}
          scale={[0.026, 0.33, 0.026]}
        >
          <mesh
            name="Cylinder099"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099.geometry}
            material={materials["Cabin.028"]}
          />
          <mesh
            name="Cylinder099_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_1.geometry}
            material={materials["Cabin.032"]}
          />
          <mesh
            name="Cylinder099_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_2.geometry}
            material={materials["Cabin.033"]}
          />
          <mesh
            name="Cylinder099_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder099_3.geometry}
            material={materials["Cabin.034"]}
          />
        </group>
        <mesh
          name="Chimney005"
          castShadow
          receiveShadow
          geometry={nodes.Chimney005.geometry}
          material={materials["Chimney.004"]}
          position={[2.595, 4.686, 126.61]}
          rotation={[0, -1.396, 0]}
          scale={[0.037, 0.083, 0.037]}
        />
        <mesh
          name="Floor005"
          castShadow
          receiveShadow
          geometry={nodes.Floor005.geometry}
          material={materials["Cabin.028"]}
          position={[2.465, 4.11, 126.472]}
          rotation={[0, -1.396, 0]}
          scale={0.387}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.001"]}
          position={[-1.423, 2.407, 127.426]}
          rotation={[0, 0.15, 0]}
          scale={[0.035, 0.012, 0.146]}
        />
        <group
          name="Empty012"
          position={[-1.371, 2.408, 127.537]}
          rotation={[-Math.PI, 1.39, -Math.PI]}
          scale={0.009}
        />
        <group
          name="Empty013"
          position={[-1.407, 2.408, 127.313]}
          rotation={[-Math.PI, 1.39, -Math.PI]}
          scale={0.009}
        />
        <group
          name="Empty014"
          position={[1.467, 4.66, 126.964]}
          rotation={[0, -1.274, 0]}
          scale={0.009}
        />
        <group
          name="Empty015"
          position={[1.405, 4.66, 126.746]}
          rotation={[0, -1.274, 0]}
          scale={0.009}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.006"]}
          position={[1.47, 4.659, 126.85]}
          rotation={[Math.PI, -0.267, Math.PI]}
          scale={[0.035, 0.012, 0.146]}
        />
        <group
          name="Empty016"
          position={[-2.004, 3.347, 130.842]}
          rotation={[0, 0.05, 0]}
          scale={0.009}
        />
        <group
          name="Empty017"
          position={[-2.231, 3.347, 130.848]}
          rotation={[0, 0.05, 0]}
          scale={0.009}
        />
        <group
          name="Empty018"
          position={[3.295, 6.844, 128.697]}
          rotation={[Math.PI, -0.825, Math.PI]}
          scale={0.009}
        />
        <group
          name="Empty019"
          position={[3.137, 6.844, 128.86]}
          rotation={[Math.PI, -0.825, Math.PI]}
          scale={0.009}
        />
        <group
          name="Empty020"
          position={[1.529, 4.66, 126.945]}
          rotation={[0, -1.274, 0]}
          scale={0.009}
        />
        <group
          name="Empty021"
          position={[1.468, 4.66, 126.727]}
          rotation={[0, -1.274, 0]}
          scale={0.009}
        />
        <group
          name="Empty022"
          position={[0.847, 4.509, 132.991]}
          rotation={[0, -1.465, 0]}
          scale={0.009}
        />
        <group
          name="Empty023"
          position={[0.866, 4.509, 133.217]}
          rotation={[0, -1.465, 0]}
          scale={0.009}
        />
        <group
          name="Empty024"
          position={[-1.455, 2.256, 133.168]}
          rotation={[0, 1.005, 0]}
          scale={0.009}
        />
        <group
          name="Empty025"
          position={[-1.592, 2.256, 133.369]}
          rotation={[0, 1.005, 0]}
          scale={0.009}
        />
        <group
          name="Empty026"
          position={[-1.645, 2.256, 133.336]}
          rotation={[0, 1.005, 0]}
          scale={0.009}
        />
        <group
          name="Empty027"
          position={[-1.511, 2.256, 133.133]}
          rotation={[0, 1.005, 0]}
          scale={0.009}
        />
        <group
          name="Empty028"
          position={[3.751, 5.808, 131.395]}
          rotation={[0, -1.051, 0]}
          scale={0.009}
        />
        <group
          name="Empty029"
          position={[3.643, 5.808, 131.196]}
          rotation={[0, -1.051, 0]}
          scale={0.009}
        />
        <group
          name="Empty030"
          position={[0.932, 4.509, 133.21]}
          rotation={[0, -1.465, 0]}
          scale={0.009}
        />
        <group
          name="Empty031"
          position={[0.913, 4.509, 132.984]}
          rotation={[0, -1.465, 0]}
          scale={0.009}
        />
        <mesh
          name="Catenary006"
          castShadow
          receiveShadow
          geometry={nodes.Catenary006.geometry}
          material={materials.Cable}
          position={[-0.001, 3.424, 127.029]}
        />
        <mesh
          name="Catenary008"
          castShadow
          receiveShadow
          geometry={nodes.Catenary008.geometry}
          material={materials.Cable}
          position={[2.333, 5.669, 127.903]}
        />
        <mesh
          name="Catenary010"
          castShadow
          receiveShadow
          geometry={nodes.Catenary010.geometry}
          material={materials.Cable}
          position={[-1.757, 2.729, 131.987]}
        />
        <mesh
          name="Catenary011"
          castShadow
          receiveShadow
          geometry={nodes.Catenary011.geometry}
          material={materials.Cable}
          position={[-1.938, 2.715, 132.092]}
        />
        <mesh
          name="Catenary012"
          castShadow
          receiveShadow
          geometry={nodes.Catenary012.geometry}
          material={materials.Cable}
          position={[-0.363, 3.302, 133.293]}
        />
        <mesh
          name="Catenary013"
          castShadow
          receiveShadow
          geometry={nodes.Catenary013.geometry}
          material={materials.Cable}
          position={[-0.304, 3.312, 133.08]}
        />
        <mesh
          name="Catenary014"
          castShadow
          receiveShadow
          geometry={nodes.Catenary014.geometry}
          material={materials.Cable}
          position={[2.278, 5.017, 132.09]}
        />
        <mesh
          name="Catenary015"
          castShadow
          receiveShadow
          geometry={nodes.Catenary015.geometry}
          material={materials.Cable}
          position={[2.342, 5.009, 132.303]}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.007"]}
          position={[-2.114, 3.346, 130.811]}
          rotation={[0, -1.551, 0]}
          scale={[0.035, 0.012, 0.146]}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["Material.008"]}
          position={[3.238, 6.842, 128.805]}
          rotation={[-Math.PI, 0.776, -Math.PI]}
          scale={[0.035, 0.012, 0.146]}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["Material.009"]}
          position={[0.891, 4.508, 133.105]}
          rotation={[Math.PI, -0.076, Math.PI]}
          scale={[0.035, 0.012, 0.146]}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["Material.010"]}
          position={[-1.553, 2.255, 133.256]}
          rotation={[0, -0.596, 0]}
          scale={[0.035, 0.012, 0.146]}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["Material.014"]}
          position={[3.729, 5.806, 131.283]}
          rotation={[Math.PI, -0.489, Math.PI]}
          scale={[0.035, 0.012, 0.146]}
        />
        <group
          name="Chairlift004"
          position={[-0.114, 2.982, 127.012]}
          rotation={[-Math.PI / 2, 0, 1.782]}
          scale={0.004}
        >
          <group name="root004" position={[0.005, 0, 0]}>
            <group
              name="GLTF_SceneRootNode004"
              position={[0.005, 0, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="node-0_0004" position={[-0.001, 0, -0.001]} />
            </group>
          </group>
        </group>
        <group
          name="Chairlift005"
          position={[2.632, 5.581, 127.927]}
          rotation={[-Math.PI / 2, 0, 0.716]}
          scale={0.004}
        >
          <group name="root005" position={[-0.001, 0.001, 0]}>
            <group
              name="GLTF_SceneRootNode005"
              position={[-0.001, 0.001, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="node-0_0005" position={[0.002, 0, -0.001]} />
            </group>
          </group>
        </group>
        <group
          name="Chairlift006"
          position={[1.891, 4.701, 127.423]}
          rotation={[-Math.PI / 2, 0, -2.391]}
          scale={0.004}
        >
          <group name="root006" position={[-0.001, -0.001, 0]}>
            <group
              name="GLTF_SceneRootNode006"
              position={[-0.001, -0.001, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="node-0_0006" position={[0.001, 0, -0.001]} />
            </group>
          </group>
        </group>
        <group
          name="Chairlift007"
          position={[2.45, 4.604, 132.271]}
          rotation={[-Math.PI / 2, 0, -1.017]}
          scale={0.004}
        >
          <group name="root007" position={[0.001, 0, 0]}>
            <group
              name="GLTF_SceneRootNode007"
              position={[0.001, 0, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="node-0_0007" position={[0.001, 0, 0]}>
                <mesh
                  name="Object_4007"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4007.geometry}
                  material={materials["03___Default.007"]}
                  position={[0.001, 0, 0]}
                />
                <mesh
                  name="Object_5007"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5007.geometry}
                  material={materials["07___Default.007"]}
                  position={[0.001, 0, 0]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Chairlift008"
          position={[-0.527, 2.714, 133.335]}
          rotation={[-Math.PI / 2, 0, -1.483]}
          scale={0.004}
        >
          <group name="root008" position={[0.002, 0, 0]}>
            <group
              name="GLTF_SceneRootNode008"
              position={[0.002, 0, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="node-0_0008" position={[0.004, 0, 0]}>
                <mesh
                  name="Object_4008"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4008.geometry}
                  material={materials["03___Default.008"]}
                  position={[0.004, 0, 0]}
                />
                <mesh
                  name="Object_5008"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5008.geometry}
                  material={materials["07___Default.008"]}
                  position={[0.004, 0, 0]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Chairlift009"
          position={[-1.711, 2.293, 132.041]}
          rotation={[-Math.PI / 2, 0, 0.238]}
          scale={0.004}
        >
          <group name="root009" position={[0.001, 0.002, 0]}>
            <group
              name="GLTF_SceneRootNode009"
              position={[0.001, 0.002, 0]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="node-0_0009" position={[0, 0, -0.002]}>
                <mesh
                  name="Object_4009"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4009.geometry}
                  material={materials["03___Default.009"]}
                  position={[0, 0, -0.002]}
                />
                <mesh
                  name="Object_5009"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5009.geometry}
                  material={materials["07___Default.009"]}
                  position={[0, 0, -0.002]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/LesArcs.glb");
