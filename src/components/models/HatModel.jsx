
"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const HatModel = React.memo(function HatModel(props) {
  const { nodes, materials } = useGLTF("/models/hat-transformed.glb");
  const modelRef = useRef();
 

    return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 3.1]} scale={4.01}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="main_0"
                position={[-0.007, 0.234, -0.144]}
                rotation={[-0.129, 0.019, -0.012]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name="interior_1"
                position={[0, 0.239, -0.09]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['Procedural_Felt.001']}
                />
              </group>
              <group
                name="visor_2"
                position={[-0.002, 0.316, -0.146]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Glass_Transpearant_Green_Tint}
                />
              </group>
              <group
                name="front_vent_3"
                position={[0, 0.462, -0.257]}
                rotation={[1.356, 0, 0]}
                scale={0.002}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group
                name="aero_back_4"
                position={[0.007, 0.503, 0.089]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group
                name="screws_5"
                position={[-0.023, 0.315, -0.091]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.Brushed_aluminium}
                />
              </group>
              <group
                name="visor_padding_6"
                position={[-0.002, 0.258, -0.23]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_17"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group
                name="bottom_pading_7"
                position={[-0.002, 0.099, -0.078]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group
                name="INTERIOR_PADDING_8"
                position={[0.001, 0.313, -0.088]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.Procedural_Felt}
                />
              </group>
              <group
                name="GRILLS_9"
                position={[-0.005, 0.11, -0.28]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group
                name="ALUMINIUM_10"
                position={[0.028, 0.064, -0.152]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Brushed_aluminium}
                />
              </group>
              <group
                name="RED_FABRIC_11"
                position={[0.01, 0.068, -0.15]}
                rotation={[1.442, -0.012, -0.019]}
                scale={0.002}>
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials['Procedural_Felt.002']}
                />
              </group>
              <group
                name="visor_logo_12"
                position={[-0.002, 0.316, -0.146]}
                rotation={[1.442, -0.012, -0.019]}>
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials.visorlogo}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
});

export default HatModel;
useGLTF.preload("/models/hat-transformed.glb");
