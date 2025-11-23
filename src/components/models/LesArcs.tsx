import { useGLTF } from "@react-three/drei";

export function LesArcs(props: React.ComponentPropsWithoutRef<"group">) {
  const { nodes, materials } = useGLTF("/models/LesArcs.glb") as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MountainLarge.geometry}
        material={materials["Rock.006"]}
        position={[1.531, -0.132, 129.816]}
        scale={[5.821, 7.276, 7.69]}
      />
      <group
        position={[-1.4, 1.757, 126.07]}
        rotation={[-0.02, 0.002, 0.05]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100.geometry}
          material={materials["TrunkBrown.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder100_1.geometry}
          material={materials["LeafGreen.010"]}
        />
        <mesh
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
        position={[-1.682, 1.748, 125.825]}
        rotation={[-0.02, 0.002, 0.05]}
        scale={[0.085, 0.061, 0.086]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101.geometry}
          material={materials["TrunkBrown.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder101_1.geometry}
          material={materials["LeafGreen.011"]}
        />
        <mesh
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
        position={[-1.985, 1.713, 126.032]}
        rotation={[-0.02, -0.001, 0.158]}
        scale={[0.085, 0.076, 0.086]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder104.geometry}
          material={materials["TrunkBrown.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder104_1.geometry}
          material={materials["LeafGreen.012"]}
        />
        <mesh
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
        position={[-0.289, 1.757, 125.436]}
        rotation={[-0.197, 0.002, 0.05]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder105.geometry}
          material={materials["TrunkBrown.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder105_1.geometry}
          material={materials["LeafGreen.013"]}
        />
        <mesh
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
        position={[-1.4, 2.716, 130.738]}
        rotation={[-0.02, 0.002, 0.05]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder106.geometry}
          material={materials["TrunkBrown.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder106_1.geometry}
          material={materials["LeafGreen.014"]}
        />
        <mesh
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
        position={[-0.998, 2.716, 130.4]}
        rotation={[-0.02, 0.002, 0.05]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder108.geometry}
          material={materials["TrunkBrown.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder108_1.geometry}
          material={materials["LeafGreen.015"]}
        />
        <mesh
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
        position={[-0.98, 2.688, 129.006]}
        rotation={[0.033, 0.002, 0.05]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder112.geometry}
          material={materials["TrunkBrown.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder112_1.geometry}
          material={materials["LeafGreen.016"]}
        />
        <mesh
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
        position={[-1.641, 1.585, 133.509]}
        rotation={[-0.02, 0.002, 0.05]}
        scale={[0.085, 0.067, 0.086]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder113.geometry}
          material={materials["TrunkBrown.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder113_1.geometry}
          material={materials["LeafGreen.017"]}
        />
        <mesh
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
        position={[1.415, 4.085, 130.141]}
        rotation={[0.033, 0.002, 0.05]}
        scale={[0.085, 0.072, 0.085]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder114.geometry}
          material={materials["TrunkBrown.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder114_1.geometry}
          material={materials["LeafGreen.018"]}
        />
        <mesh
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
        position={[0.736, 3.701, 131.017]}
        rotation={[0.033, 0, 0.004]}
        scale={[0.085, 0.072, 0.085]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder115.geometry}
          material={materials["TrunkBrown.020"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder115_1.geometry}
          material={materials["LeafGreen.019"]}
        />
        <mesh
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
        position={[1.337, 3.718, 131.017]}
        rotation={[0.033, 0.005, 0.148]}
        scale={[0.085, 0.072, 0.085]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder116.geometry}
          material={materials["TrunkBrown.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder116_1.geometry}
          material={materials["LeafGreen.020"]}
        />
        <mesh
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
        position={[1.337, 3.621, 130.699]}
        rotation={[0.033, 0.005, 0.148]}
        scale={[0.085, 0.053, 0.085]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder117.geometry}
          material={materials["TrunkBrown.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder117_1.geometry}
          material={materials["LeafGreen.021"]}
        />
        <mesh
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
        position={[1.415, 3.848, 132.604]}
        rotation={[0.033, 0.002, 0.05]}
        scale={[0.085, 0.072, 0.085]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118.geometry}
          material={materials["TrunkBrown.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118_1.geometry}
          material={materials["LeafGreen.022"]}
        />
        <mesh
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
        position={[2.631, 4.137, 127.333]}
        rotation={[0.033, 0.002, 0.05]}
        scale={[0.085, 0.056, 0.085]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder119.geometry}
          material={materials["TrunkBrown.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder119_1.geometry}
          material={materials["LeafGreen.023"]}
        />
        <mesh
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
        position={[2.159, 4.137, 127.103]}
        rotation={[0.033, 0.002, 0.05]}
        scale={[0.07, 0.046, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder120.geometry}
          material={materials["TrunkBrown.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder120_1.geometry}
          material={materials["LeafGreen.024"]}
        />
        <mesh
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
        position={[1.207, 3.885, 127.359]}
        rotation={[0.033, 0.002, 0.05]}
        scale={[0.066, 0.042, 0.067]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder121.geometry}
          material={materials["TrunkBrown.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder121_1.geometry}
          material={materials["LeafGreen.025"]}
        />
        <mesh
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
        position={[1.207, 3.937, 126.114]}
        rotation={[0.036, -0.006, 0.11]}
        scale={[0.067, 0.045, 0.067]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder122.geometry}
          material={materials["TrunkBrown.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder122_1.geometry}
          material={materials["LeafGreen.026"]}
        />
        <mesh
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
        position={[3.346, 4.702, 131.571]}
        rotation={[0.224, -0.002, -0.053]}
        scale={[0.07, 0.059, 0.07]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder123.geometry}
          material={materials["TrunkBrown.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder123_1.geometry}
          material={materials["LeafGreen.027"]}
        />
        <mesh
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
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Ground.001"]}
        position={[0, 0, 127.115]}
        scale={-39.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup006.geometry}
        material={materials["Rock.008"]}
        position={[-26.052, -0.047, 138.437]}
        rotation={[0, -1.194, 0]}
        scale={3.74}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup008.geometry}
        material={materials["Rock.009"]}
        position={[5.241, -0.248, 156.793]}
        rotation={[0, -1.194, 0]}
        scale={2.799}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup009.geometry}
        material={materials["Rock.010"]}
        position={[29.784, -0.248, 110.959]}
        rotation={[0, -1.194, 0]}
        scale={5.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mountains_Backup010.geometry}
        material={materials["Rock.011"]}
        position={[13.657, -0.248, 100.942]}
        scale={5.163}
      />
      <group
        position={[-12.462, 0.128, 126.439]}
        rotation={[-0.02, -0.307, -0.006]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder193.geometry}
          material={materials["TrunkBrown.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder193_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-10.357, 0.114, 125.363]}
        rotation={[0, -0.309, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder194.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder194_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-14.02, 0.081, 130.823]}
        rotation={[-0.02, -0.307, -0.006]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder195.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder195_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-13.02, 0.024, 131.165]}
        rotation={[-0.053, -0.3, 0.036]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder196.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder196_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-8.946, 0.114, 126.082]}
        rotation={[0, -0.309, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder197.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder197_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-7.222, 0.074, 126.781]}
        rotation={[0, -0.309, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder198.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder198_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-16.615, 0.115, 138.127]}
        rotation={[0, -0.037, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder199.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder199_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-15.635, 0.154, 137.896]}
        rotation={[0, -0.037, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder200.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder200_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-16.069, 0.115, 136.621]}
        rotation={[0, -0.378, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder201.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder201_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-15.614, 0.154, 137.329]}
        rotation={[0, -0.037, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder202.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder202_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-16.557, 0.115, 135.464]}
        rotation={[0, -0.037, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder203.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder203_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-16.012, 0.115, 133.958]}
        rotation={[0, -0.378, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder204.geometry}
          material={materials["TrunkBrown.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder204_1.geometry}
          material={materials["LeafGreen.028"]}
        />
      </group>
      <group
        position={[-8.889, 0.285, 117.649]}
        rotation={[Math.PI, -0.329, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder205.geometry}
          material={materials["TrunkBrown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder205_1.geometry}
          material={materials["LeafGreen.029"]}
        />
      </group>
      <group
        position={[-7.384, 0.295, 117.135]}
        rotation={[Math.PI, -0.329, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder206.geometry}
          material={materials["TrunkBrown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder206_1.geometry}
          material={materials["LeafGreen.029"]}
        />
      </group>
      <group
        position={[-9.275, 0.285, 121.871]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder207.geometry}
          material={materials["TrunkBrown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder207_1.geometry}
          material={materials["LeafGreen.029"]}
        />
      </group>
      <group
        position={[-8.535, 0.295, 119.68]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder208.geometry}
          material={materials["TrunkBrown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder208_1.geometry}
          material={materials["LeafGreen.029"]}
        />
      </group>
      <group
        position={[-7.94, 0.256, 118.867]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder209.geometry}
          material={materials["TrunkBrown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder209_1.geometry}
          material={materials["LeafGreen.029"]}
        />
      </group>
      <group
        position={[-10.936, 0.208, 122.058]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder210.geometry}
          material={materials["TrunkBrown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder210_1.geometry}
          material={materials["LeafGreen.029"]}
        />
      </group>
      <group
        position={[-10.448, 0.23, 122.33]}
        rotation={[Math.PI, -0.671, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder211.geometry}
          material={materials["TrunkBrown.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder211_1.geometry}
          material={materials["LeafGreen.029"]}
        />
      </group>
      <group
        position={[-9.929, 0.144, 137.601]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder212.geometry}
          material={materials["TrunkBrown.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder212_1.geometry}
          material={materials["LeafGreen.030"]}
        />
      </group>
      <group
        position={[-11.515, 0.154, 137.492]}
        rotation={[0, -0.069, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder213.geometry}
          material={materials["TrunkBrown.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder213_1.geometry}
          material={materials["LeafGreen.030"]}
        />
      </group>
      <group
        position={[-9.579, 0.144, 140.342]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder214.geometry}
          material={materials["TrunkBrown.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder214_1.geometry}
          material={materials["LeafGreen.030"]}
        />
      </group>
      <group
        position={[-11.11, 0.154, 140.771]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder215.geometry}
          material={materials["TrunkBrown.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder215_1.geometry}
          material={materials["LeafGreen.030"]}
        />
      </group>
      <group
        position={[-11.974, 0.115, 141.289]}
        rotation={[0, 0.273, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder216.geometry}
          material={materials["TrunkBrown.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder216_1.geometry}
          material={materials["LeafGreen.030"]}
        />
      </group>
      <group
        position={[22.302, 0.115, 135.536]}
        rotation={[0, 1.189, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder217.geometry}
          material={materials["TrunkBrown.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder217_1.geometry}
          material={materials["LeafGreen.031"]}
        />
      </group>
      <group
        position={[22.416, 0.154, 134.535]}
        rotation={[0, 1.189, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder218.geometry}
          material={materials["TrunkBrown.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder218_1.geometry}
          material={materials["LeafGreen.031"]}
        />
      </group>
      <group
        position={[23.009, 0.144, 133.059]}
        rotation={[0, 1.189, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder219.geometry}
          material={materials["TrunkBrown.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder219_1.geometry}
          material={materials["LeafGreen.031"]}
        />
      </group>
      <group
        position={[19.568, 0.154, 132.861]}
        rotation={[0, 0.847, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder220.geometry}
          material={materials["TrunkBrown.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder220_1.geometry}
          material={materials["LeafGreen.031"]}
        />
      </group>
      <group
        position={[20.621, 0.144, 131.669]}
        rotation={[0, 0.847, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder221.geometry}
          material={materials["TrunkBrown.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder221_1.geometry}
          material={materials["LeafGreen.031"]}
        />
      </group>
      <group
        position={[8.188, 0.23, 122.785]}
        rotation={[0, -1.554, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder222.geometry}
          material={materials["TrunkBrown.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder222_1.geometry}
          material={materials["LeafGreen.032"]}
        />
      </group>
      <group
        position={[7.676, 0.208, 123.007]}
        rotation={[0, -1.554, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder223.geometry}
          material={materials["TrunkBrown.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder223_1.geometry}
          material={materials["LeafGreen.032"]}
        />
      </group>
      <group
        position={[6.967, 0.256, 118.688]}
        rotation={[0, -1.554, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder224.geometry}
          material={materials["TrunkBrown.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder224_1.geometry}
          material={materials["LeafGreen.032"]}
        />
      </group>
      <group
        position={[7.25, 0.295, 119.655]}
        rotation={[0, -1.554, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder225.geometry}
          material={materials["TrunkBrown.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder225_1.geometry}
          material={materials["LeafGreen.032"]}
        />
      </group>
      <group
        position={[8.538, 0.285, 121.576]}
        rotation={[0, -1.554, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder226.geometry}
          material={materials["TrunkBrown.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder226_1.geometry}
          material={materials["LeafGreen.032"]}
        />
      </group>
      <group
        position={[5.931, 0.295, 117.193]}
        rotation={[Math.PI, -1.245, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder227.geometry}
          material={materials["TrunkBrown.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder227_1.geometry}
          material={materials["LeafGreen.032"]}
        />
      </group>
      <group
        position={[5.423, 0.285, 118.7]}
        rotation={[Math.PI, -1.245, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder228.geometry}
          material={materials["TrunkBrown.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder228_1.geometry}
          material={materials["LeafGreen.032"]}
        />
      </group>
      <group
        position={[14.027, 0.115, 134.278]}
        rotation={[0, 0.538, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder229.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder229_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[14.89, 0.115, 135.627]}
        rotation={[0, 0.88, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder230.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder230_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[16.945, 0.154, 136.014]}
        rotation={[0, 0.88, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder231.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder231_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[16.105, 0.115, 135.944]}
        rotation={[0, 0.538, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder232.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder232_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[17.382, 0.154, 136.375]}
        rotation={[0, 0.88, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder233.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder233_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[16.968, 0.115, 137.294]}
        rotation={[0, 0.88, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder234.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder234_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[13.683, 0.074, 122.935]}
        rotation={[0, 0.607, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder235.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder235_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[12.08, 0.114, 123.878]}
        rotation={[0, 0.607, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder236.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder236_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[13.633, 0.024, 130.204]}
        rotation={[-0.062, 0.615, 0.088]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder237.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder237_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[12.752, 0.081, 130.789]}
        rotation={[-0.024, 0.609, 0.013]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder238.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder238_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[10.65, 0.114, 124.559]}
        rotation={[0, 0.607, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder239.geometry}
          material={materials["TrunkBrown.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder239_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[10.223, 0.128, 126.885]}
        rotation={[-0.024, 0.609, 0.013]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder240.geometry}
          material={materials["TrunkBrown.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder240_1.geometry}
          material={materials["LeafGreen.033"]}
        />
      </group>
      <group
        position={[-7.314, 0.128, 142.129]}
        rotation={[-0.022, 0.488, 0.01]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder241.geometry}
          material={materials["TrunkBrown.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder241_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-6.608, 0.114, 139.873]}
        rotation={[0, 0.486, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder242.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder242_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-5.276, 0.081, 146.311]}
        rotation={[-0.022, 0.488, 0.01]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder243.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder243_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-4.331, 0.024, 145.837]}
        rotation={[-0.058, 0.494, 0.079]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder244.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder244_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-5.107, 0.114, 139.369]}
        rotation={[0, 0.486, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder245_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-3.401, 0.074, 138.628]}
        rotation={[0, 0.486, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder246.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder246_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-1.878, 0.115, 153.278]}
        rotation={[0, 0.758, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder247.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder247_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-1.357, 0.154, 152.416]}
        rotation={[0, 0.758, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder248.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder248_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-2.571, 0.115, 151.834]}
        rotation={[0, 0.417, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder249.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder249_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-1.747, 0.154, 152.005]}
        rotation={[0, 0.758, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder250.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder250_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-3.739, 0.115, 151.373]}
        rotation={[0, 0.758, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder251.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder251_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-4.432, 0.115, 149.928]}
        rotation={[0, 0.417, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder252.geometry}
          material={materials["TrunkBrown.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder252_1.geometry}
          material={materials["LeafGreen.034"]}
        />
      </group>
      <group
        position={[-11.088, 0.285, 133.424]}
        rotation={[Math.PI, -1.124, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder253.geometry}
          material={materials["TrunkBrown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder253_1.geometry}
          material={materials["LeafGreen.035"]}
        />
      </group>
      <group
        position={[-10.401, 0.295, 131.989]}
        rotation={[Math.PI, -1.124, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder254.geometry}
          material={materials["TrunkBrown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder254_1.geometry}
          material={materials["LeafGreen.035"]}
        />
      </group>
      <group
        position={[-8.344, 0.285, 136.655]}
        rotation={[Math.PI, -1.466, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder255.geometry}
          material={materials["TrunkBrown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder255_1.geometry}
          material={materials["LeafGreen.035"]}
        />
      </group>
      <group
        position={[-9.39, 0.295, 134.593]}
        rotation={[Math.PI, -1.466, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder256.geometry}
          material={materials["TrunkBrown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder256_1.geometry}
          material={materials["LeafGreen.035"]}
        />
      </group>
      <group
        position={[-9.554, 0.256, 133.599]}
        rotation={[Math.PI, -1.466, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder257.geometry}
          material={materials["TrunkBrown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder257_1.geometry}
          material={materials["LeafGreen.035"]}
        />
      </group>
      <group
        position={[-9.373, 0.208, 137.972]}
        rotation={[Math.PI, -1.466, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder258.geometry}
          material={materials["TrunkBrown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder258_1.geometry}
          material={materials["LeafGreen.035"]}
        />
      </group>
      <group
        position={[-8.837, 0.23, 137.814]}
        rotation={[Math.PI, -1.466, Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder259.geometry}
          material={materials["TrunkBrown.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder259_1.geometry}
          material={materials["LeafGreen.035"]}
        />
      </group>
      <group
        position={[2.429, 0.144, 148.137]}
        rotation={[0, 0.726, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder260.geometry}
          material={materials["TrunkBrown.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder260_1.geometry}
          material={materials["LeafGreen.036"]}
        />
      </group>
      <group
        position={[1.239, 0.154, 149.193]}
        rotation={[0, 0.726, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261.geometry}
          material={materials["TrunkBrown.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder261_1.geometry}
          material={materials["LeafGreen.036"]}
        />
      </group>
      <group
        position={[4.631, 0.144, 149.806]}
        rotation={[0, 1.068, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262.geometry}
          material={materials["TrunkBrown.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder262_1.geometry}
          material={materials["LeafGreen.036"]}
        />
      </group>
      <group
        position={[3.864, 0.154, 151.2]}
        rotation={[0, 1.068, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder263.geometry}
          material={materials["TrunkBrown.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder263_1.geometry}
          material={materials["LeafGreen.036"]}
        />
      </group>
      <group
        position={[3.63, 0.115, 152.179]}
        rotation={[0, 1.068, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder264.geometry}
          material={materials["TrunkBrown.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder264_1.geometry}
          material={materials["LeafGreen.036"]}
        />
      </group>
      <group
        position={[9.309, 0.115, 138.731]}
        rotation={[-Math.PI, 0.968, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder265.geometry}
          material={materials["TrunkBrown.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder265_1.geometry}
          material={materials["LeafGreen.037"]}
        />
      </group>
      <group
        position={[8.539, 0.154, 138.083]}
        rotation={[-Math.PI, 0.968, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder266.geometry}
          material={materials["TrunkBrown.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder266_1.geometry}
          material={materials["LeafGreen.037"]}
        />
      </group>
      <group
        position={[7.637, 0.144, 136.772]}
        rotation={[-Math.PI, 0.968, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder267.geometry}
          material={materials["TrunkBrown.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder267_1.geometry}
          material={materials["LeafGreen.037"]}
        />
      </group>
      <group
        position={[5.568, 0.154, 139.529]}
        rotation={[-Math.PI, 1.31, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder268.geometry}
          material={materials["TrunkBrown.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder268_1.geometry}
          material={materials["LeafGreen.037"]}
        />
      </group>
      <group
        position={[5.158, 0.144, 137.992]}
        rotation={[-Math.PI, 1.31, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder269.geometry}
          material={materials["TrunkBrown.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder269_1.geometry}
          material={materials["LeafGreen.037"]}
        />
      </group>
      <group
        position={[-9.121, 0.23, 143.434]}
        rotation={[0, -0.57, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder270.geometry}
          material={materials["TrunkBrown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder270_1.geometry}
          material={materials["LeafGreen.038"]}
        />
      </group>
      <group
        position={[-9.22, 0.208, 143.983]}
        rotation={[0, -0.57, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder271.geometry}
          material={materials["TrunkBrown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder271_1.geometry}
          material={materials["LeafGreen.038"]}
        />
      </group>
      <group
        position={[-13.209, 0.256, 142.184]}
        rotation={[0, -0.57, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272.geometry}
          material={materials["TrunkBrown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder272_1.geometry}
          material={materials["LeafGreen.038"]}
        />
      </group>
      <group
        position={[-12.248, 0.295, 142.483]}
        rotation={[0, -0.57, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273.geometry}
          material={materials["TrunkBrown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder273_1.geometry}
          material={materials["LeafGreen.038"]}
        />
      </group>
      <group
        position={[-9.935, 0.285, 142.473]}
        rotation={[0, -0.57, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder274.geometry}
          material={materials["TrunkBrown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder274_1.geometry}
          material={materials["LeafGreen.038"]}
        />
      </group>
      <group
        position={[-15.028, 0.295, 142.219]}
        rotation={[0, -0.912, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275.geometry}
          material={materials["TrunkBrown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder275_1.geometry}
          material={materials["LeafGreen.038"]}
        />
      </group>
      <group
        position={[-14.054, 0.285, 143.477]}
        rotation={[0, -0.912, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276.geometry}
          material={materials["TrunkBrown.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder276_1.geometry}
          material={materials["LeafGreen.038"]}
        />
      </group>
      <group
        position={[3.683, 0.115, 144.928]}
        rotation={[0, 1.522, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder277_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[5.284, 0.115, 144.956]}
        rotation={[-Math.PI, 1.277, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder278.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder278_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[6.743, 0.154, 143.458]}
        rotation={[-Math.PI, 1.277, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder279.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder279_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[6.221, 0.115, 144.119]}
        rotation={[0, 1.522, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder280.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder280_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[7.286, 0.154, 143.294]}
        rotation={[-Math.PI, 1.277, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder281.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder281_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[7.822, 0.115, 144.147]}
        rotation={[-Math.PI, 1.277, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder282.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder282_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[-5.956, 0.074, 138.939]}
        rotation={[-Math.PI, 1.55, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder283.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder283_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[-6.058, 0.114, 140.796]}
        rotation={[-Math.PI, 1.55, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder284.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder284_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[0.071, 0.024, 143.003]}
        rotation={[-2.104, 1.512, 2.157]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder285.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder285_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[0.071, 0.081, 144.06]}
        rotation={[-2.447, 1.54, 2.447]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder286.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder286_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[-6.281, 0.114, 142.364]}
        rotation={[-Math.PI, 1.55, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287.geometry}
          material={materials["TrunkBrown.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder287_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[-4.58, 0.128, 144.007]}
        rotation={[-2.447, 1.54, 2.447]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder288.geometry}
          material={materials["TrunkBrown.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder288_1.geometry}
          material={materials["LeafGreen.039"]}
        />
      </group>
      <group
        position={[6.838, 0.448, 110.034]}
        rotation={[-0.062, -1.254, -0.059]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder289.geometry}
          material={materials["TrunkBrown.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder289_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[8.941, 0.433, 111.115]}
        rotation={[0, -1.257, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder290.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder290_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[2.37, 0.116, 111.329]}
        rotation={[-0.062, -1.254, -0.059]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder291.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder291_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[2.676, 0.059, 112.341]}
        rotation={[-0.159, -1.244, -0.099]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder292.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder292_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[9.181, 0.114, 112.681]}
        rotation={[0, -1.257, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder293.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder293_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[9.62, 0.074, 114.488]}
        rotation={[0, -1.257, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder294.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder294_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[-5.076, 0.115, 113.487]}
        rotation={[0, -0.984, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder295.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder295_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[-4.315, 0.154, 114.147]}
        rotation={[0, -0.984, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder296_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[-3.534, 0.115, 113.05]}
        rotation={[0, -1.326, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder297.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder297_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[-3.843, 0.154, 113.834]}
        rotation={[0, -0.984, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder298.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder298_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[-2.88, 0.115, 111.978]}
        rotation={[0, -0.984, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder299.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder299_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[-1.339, 0.115, 111.542]}
        rotation={[0, -1.326, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder300.geometry}
          material={materials["TrunkBrown.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder300_1.geometry}
          material={materials["LeafGreen.040"]}
        />
      </group>
      <group
        position={[16.06, 0.285, 107.803]}
        rotation={[-Math.PI, 0.618, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder301.geometry}
          material={materials["TrunkBrown.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder301_1.geometry}
          material={materials["LeafGreen.041"]}
        />
      </group>
      <group
        position={[17.356, 0.295, 108.725]}
        rotation={[-Math.PI, 0.618, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder302.geometry}
          material={materials["TrunkBrown.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder302_1.geometry}
          material={materials["LeafGreen.041"]}
        />
      </group>
      <group
        position={[12.407, 0.285, 109.955]}
        rotation={[-Math.PI, 0.277, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder303.geometry}
          material={materials["TrunkBrown.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder303_1.geometry}
          material={materials["LeafGreen.041"]}
        />
      </group>
      <group
        position={[14.618, 0.295, 109.277]}
        rotation={[-Math.PI, 0.277, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder304.geometry}
          material={materials["TrunkBrown.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder304_1.geometry}
          material={materials["LeafGreen.041"]}
        />
      </group>
      <group
        position={[15.626, 0.256, 109.285]}
        rotation={[-Math.PI, 0.277, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder305.geometry}
          material={materials["TrunkBrown.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder305_1.geometry}
          material={materials["LeafGreen.041"]}
        />
      </group>
      <group
        position={[11.286, 0.528, 108.716]}
        rotation={[-Math.PI, 0.277, -Math.PI]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder306.geometry}
          material={materials["TrunkBrown.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder306_1.geometry}
          material={materials["LeafGreen.041"]}
        />
      </group>
      <group
        position={[11.35, 0.556, 109.27]}
        rotation={[-Math.PI, 0.277, -Math.PI]}
        scale={0.086}
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
          material={materials["LeafGreen.041"]}
        />
      </group>
      <group
        position={[-0.745, 0.144, 118.608]}
        rotation={[0, -1.016, 0]}
        scale={0.086}
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
          material={materials["LeafGreen.042"]}
        />
      </group>
      <group
        position={[-1.582, 0.154, 117.256]}
        rotation={[0, -1.016, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder309.geometry}
          material={materials["TrunkBrown.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder309_1.geometry}
          material={materials["LeafGreen.042"]}
        />
      </group>
      <group
        position={[-2.766, 0.144, 120.492]}
        rotation={[0, -0.675, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder310.geometry}
          material={materials["TrunkBrown.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder310_1.geometry}
          material={materials["LeafGreen.042"]}
        />
      </group>
      <group
        position={[-4.008, 0.154, 119.499]}
        rotation={[0, -0.675, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder311.geometry}
          material={materials["TrunkBrown.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder311_1.geometry}
          material={materials["LeafGreen.042"]}
        />
      </group>
      <group
        position={[-4.933, 0.115, 119.101]}
        rotation={[0, -0.675, 0]}
        scale={0.086}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder312.geometry}
          material={materials["TrunkBrown.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder312_1.geometry}
          material={materials["LeafGreen.042"]}
        />
      </group>
      <group
        position={[-1.256, 1.717, 126.83]}
        rotation={[1.809, -0.471, 0.492]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087.geometry}
          material={materials["Cabin.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087_1.geometry}
          material={materials["Cabin.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087_2.geometry}
          material={materials["Cabin.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder087_3.geometry}
          material={materials["Cabin.010"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Right002.geometry}
        material={materials["Cabin.013"]}
        position={[-1.627, 2.031, 126.976]}
        rotation={[1.088, -0.212, -1.188]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Left002.geometry}
        material={materials["Cabin.013"]}
        position={[-1.385, 2.031, 126.455]}
        rotation={[1.088, -0.212, -1.188]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof002.geometry}
        material={materials["Cabin.013"]}
        position={[-1.505, 2.071, 126.716]}
        rotation={[0, -0.435, 0]}
        scale={[0.347, 0.016, 0.437]}
      >
        <mesh
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
        position={[-1.751, 1.896, 126.6]}
        rotation={[1.809, -0.471, 0.492]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075.geometry}
          material={materials["Cabin.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075_1.geometry}
          material={materials["Cabin.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075_2.geometry}
          material={materials["Cabin.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder075_3.geometry}
          material={materials["Cabin.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chimney002.geometry}
        material={materials["Chimney.001"]}
        position={[-1.3, 2.278, 126.686]}
        rotation={[0, -0.435, 0]}
        scale={[0.037, 0.083, 0.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor002.geometry}
        material={materials["Cabin.013"]}
        position={[-1.488, 1.703, 126.714]}
        rotation={[0, -0.435, 0]}
        scale={0.387}
      />
      <group
        position={[-1.231, 2.684, 129.587]}
        rotation={[1.382, -0.491, -0.385]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088.geometry}
          material={materials["Cabin.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088_1.geometry}
          material={materials["Cabin.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088_2.geometry}
          material={materials["Cabin.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder088_3.geometry}
          material={materials["Cabin.017"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Right003.geometry}
        material={materials["Cabin.014"]}
        position={[-1.395, 2.997, 129.95]}
        rotation={[1.072, 0.166, -1.866]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Left003.geometry}
        material={materials["Cabin.014"]}
        position={[-1.585, 2.997, 129.409]}
        rotation={[1.072, 0.166, -1.866]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof003.geometry}
        material={materials["Cabin.014"]}
        position={[-1.489, 3.038, 129.679]}
        rotation={[0, 0.338, 0]}
        scale={[0.347, 0.016, 0.437]}
      >
        <mesh
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
        position={[-1.746, 2.863, 129.768]}
        rotation={[1.382, -0.491, -0.385]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091.geometry}
          material={materials["Cabin.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091_1.geometry}
          material={materials["Cabin.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091_2.geometry}
          material={materials["Cabin.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder091_3.geometry}
          material={materials["Cabin.020"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chimney003.geometry}
        material={materials["Chimney.002"]}
        position={[-1.363, 3.245, 129.515]}
        rotation={[0, 0.338, 0]}
        scale={[0.037, 0.083, 0.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor003.geometry}
        material={materials["Cabin.014"]}
        position={[-1.478, 2.669, 129.666]}
        rotation={[0, 0.338, 0]}
        scale={0.387}
      />
      <group
        position={[-1.862, 1.546, 133.913]}
        rotation={[1.165, -0.34, -0.911]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095.geometry}
          material={materials["Cabin.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095_1.geometry}
          material={materials["Cabin.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095_2.geometry}
          material={materials["Cabin.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder095_3.geometry}
          material={materials["Cabin.024"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Right004.geometry}
        material={materials["Cabin.027"]}
        position={[-1.83, 1.86, 134.31]}
        rotation={[1.203, 0.382, -2.339]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Left004.geometry}
        material={materials["Cabin.027"]}
        position={[-2.258, 1.86, 133.927]}
        rotation={[1.203, 0.382, -2.339]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof004.geometry}
        material={materials["Cabin.027"]}
        position={[-2.043, 1.9, 134.117]}
        rotation={[0, 0.84, 0]}
        scale={[0.347, 0.016, 0.437]}
      >
        <mesh
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
        position={[-2.226, 1.725, 134.319]}
        rotation={[1.165, -0.34, -0.911]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092.geometry}
          material={materials["Cabin.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092_1.geometry}
          material={materials["Cabin.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092_2.geometry}
          material={materials["Cabin.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder092_3.geometry}
          material={materials["Cabin.021"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chimney004.geometry}
        material={materials["Chimney.003"]}
        position={[-2.012, 2.107, 133.913]}
        rotation={[0, 0.84, 0]}
        scale={[0.037, 0.083, 0.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor004.geometry}
        material={materials["Cabin.027"]}
        position={[-2.04, 1.532, 134.1]}
        rotation={[0, 0.84, 0]}
        scale={0.387}
      />
      <group
        position={[2.502, 4.125, 126.728]}
        rotation={[2.088, -0.087, 1.419]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096.geometry}
          material={materials["Cabin.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096_1.geometry}
          material={materials["Cabin.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096_2.geometry}
          material={materials["Cabin.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder096_3.geometry}
          material={materials["Cabin.031"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Right005.geometry}
        material={materials["Cabin.028"]}
        position={[2.171, 4.438, 126.508]}
        rotation={[1.471, -0.515, -0.201]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_Left005.geometry}
        material={materials["Cabin.028"]}
        position={[2.736, 4.438, 126.408]}
        rotation={[1.471, -0.515, -0.201]}
        scale={[0.026, 0.33, 0.026]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof005.geometry}
        material={materials["Cabin.028"]}
        position={[2.454, 4.479, 126.459]}
        rotation={[0, -1.396, 0]}
        scale={[0.347, 0.016, 0.437]}
      >
        <mesh
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
        position={[2.408, 4.304, 126.19]}
        rotation={[2.088, -0.087, 1.419]}
        scale={[0.026, 0.33, 0.026]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099.geometry}
          material={materials["Cabin.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_1.geometry}
          material={materials["Cabin.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_2.geometry}
          material={materials["Cabin.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder099_3.geometry}
          material={materials["Cabin.034"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chimney005.geometry}
        material={materials["Chimney.004"]}
        position={[2.595, 4.686, 126.61]}
        rotation={[0, -1.396, 0]}
        scale={[0.037, 0.083, 0.037]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Floor005.geometry}
        material={materials["Cabin.028"]}
        position={[2.465, 4.11, 126.472]}
        rotation={[0, -1.396, 0]}
        scale={0.387}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["Material.001"]}
        position={[-1.423, 2.407, 127.426]}
        rotation={[0, 0.15, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.006"]}
        position={[1.47, 4.659, 126.85]}
        rotation={[Math.PI, -0.267, Math.PI]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary006.geometry}
        material={materials.Cable}
        position={[-0.001, 3.424, 127.029]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary007.geometry}
        material={materials.Cable}
        position={[0.048, 3.422, 127.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary008.geometry}
        material={materials.Cable}
        position={[2.333, 5.669, 127.903]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary009.geometry}
        material={materials.Cable}
        position={[2.381, 5.656, 127.712]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary010.geometry}
        material={materials.Cable}
        position={[-1.757, 2.729, 131.987]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary011.geometry}
        material={materials.Cable}
        position={[-1.938, 2.715, 132.092]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary012.geometry}
        material={materials.Cable}
        position={[-0.363, 3.302, 133.293]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary013.geometry}
        material={materials.Cable}
        position={[-0.304, 3.312, 133.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary014.geometry}
        material={materials.Cable}
        position={[2.278, 5.017, 132.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Catenary015.geometry}
        material={materials.Cable}
        position={[2.342, 5.009, 132.303]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.007"]}
        position={[-2.114, 3.346, 130.811]}
        rotation={[0, -1.551, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.008"]}
        position={[3.238, 6.842, 128.805]}
        rotation={[-Math.PI, 0.776, -Math.PI]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.009"]}
        position={[0.891, 4.508, 133.105]}
        rotation={[Math.PI, -0.076, Math.PI]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.010"]}
        position={[-1.553, 2.255, 133.256]}
        rotation={[0, -0.596, 0]}
        scale={[0.035, 0.012, 0.146]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.014"]}
        position={[3.729, 5.806, 131.283]}
        rotation={[Math.PI, -0.489, Math.PI]}
        scale={[0.035, 0.012, 0.146]}
      />
      <group
        position={[-0.114, 2.982, 127.012]}
        rotation={[-Math.PI / 2, 0, 1.782]}
        scale={0.004}
      >
        <group position={[0.005, 0, 0]}>
          <group position={[0.005, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-0.001, 0, -0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4004.geometry}
                material={materials["03___Default.004"]}
                position={[-0.001, 0, -0.001]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5004.geometry}
                material={materials["07___Default.004"]}
                position={[-0.001, 0, -0.001]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[2.632, 5.581, 127.927]}
        rotation={[-Math.PI / 2, 0, 0.716]}
        scale={0.004}
      >
        <group position={[-0.001, 0.001, 0]}>
          <group position={[-0.001, 0.001, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.002, 0, -0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4005.geometry}
                material={materials["03___Default.005"]}
                position={[0.002, 0, -0.001]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5005.geometry}
                material={materials["07___Default.005"]}
                position={[0.002, 0, -0.001]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[1.891, 4.701, 127.423]}
        rotation={[-Math.PI / 2, 0, -2.391]}
        scale={0.004}
      >
        <group position={[-0.001, -0.001, 0]}>
          <group position={[-0.001, -0.001, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.001, 0, -0.001]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4006.geometry}
                material={materials["03___Default.006"]}
                position={[0.001, 0, -0.001]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5006.geometry}
                material={materials["07___Default.006"]}
                position={[0.001, 0, -0.001]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[2.45, 4.604, 132.271]}
        rotation={[-Math.PI / 2, 0, -1.017]}
        scale={0.004}
      >
        <group position={[0.001, 0, 0]}>
          <group position={[0.001, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.001, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4007.geometry}
                material={materials["03___Default.007"]}
                position={[0.001, 0, 0]}
              />
              <mesh
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
        position={[-0.527, 2.714, 133.335]}
        rotation={[-Math.PI / 2, 0, -1.483]}
        scale={0.004}
      >
        <group position={[0.002, 0, 0]}>
          <group position={[0.002, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.004, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4008.geometry}
                material={materials["03___Default.008"]}
                position={[0.004, 0, 0]}
              />
              <mesh
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
        position={[-1.711, 2.293, 132.041]}
        rotation={[-Math.PI / 2, 0, 0.238]}
        scale={0.004}
      >
        <group position={[0.001, 0.002, 0]}>
          <group position={[0.001, 0.002, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0, -0.002]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4009.geometry}
                material={materials["03___Default.009"]}
                position={[0, 0, -0.002]}
              />
              <mesh
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
  );
}

useGLTF.preload("/models/LesArcs.glb");
