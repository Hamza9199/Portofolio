
"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const HatModel = React.memo(function HatModel(props) {
  const { nodes, materials } = useGLTF("/models/hat-transformed.glb");
  const modelRef = useRef();
 

  return (
    <group
      {...props}
      dispose={null}
      onPointerDown={(e) => e.stopPropagation()}
      onPointerMove={(e) => e.stopPropagation()}
      onPointerUp={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      <group ref={modelRef} position={[0, -3, 0]} scale={2.2}>
        <group name="Sketchfab_model" rotation={[-1.806, 0, 0]}>
          <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
            <group
              name="helmet_new_0"
              position={[0, 1.312, 1.881]}
              rotation={[0.276, Math.PI / 2, 0]}
              scale={0.001}>
              <mesh
                name="Object_4"
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                material={materials['Material.002']}
              />
              <mesh
                name="Object_5"
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials['Material.004']}
              />
              <mesh
                name="Object_6"
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials['Material.003']}
              />
              <mesh
                name="Object_7"
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials['Material.009']}
              />
              <mesh
                name="Object_8"
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials['Material.010']}
              />
              <mesh
                name="Object_9"
                castShadow
                receiveShadow
                geometry={nodes.Object_9.geometry}
                material={materials['Material.011']}
              />
              <mesh
                name="Object_10"
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials['Material.012']}
              />
              <mesh
                name="Object_11"
                castShadow
                receiveShadow
                geometry={nodes.Object_11.geometry}
                material={materials['Material.014']}
              />
              <mesh
                name="Object_12"
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials['Material.015']}
              />
            </group>
            <group
              name="helmet_new001_3"
              position={[-0.276, 1.372, 1.923]}
              rotation={[0.41, Math.PI / 2, 0]}
              scale={0.001}>
              <mesh
                name="Object_18"
                castShadow
                receiveShadow
                geometry={nodes.Object_18.geometry}
                material={materials.driver}
              />
              <mesh
                name="Object_19"
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials['Material.001']}
              />
              <mesh
                name="Object_20"
                castShadow
                receiveShadow
                geometry={nodes.Object_20.geometry}
                material={materials['Material.003']}
              />
              <mesh
                name="Object_21"
                castShadow
                receiveShadow
                geometry={nodes.Object_21.geometry}
                material={materials['Material.009']}
              />
              <mesh
                name="Object_22"
                castShadow
                receiveShadow
                geometry={nodes.Object_22.geometry}
                material={materials['Material.008']}
              />
            </group>
            <mesh
              name="Object_14"
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials['Material.005']}
              position={[0, 1.312, 1.881]}
              rotation={[0.276, Math.PI / 2, 0]}
              scale={0.001}
            />
            <mesh
              name="Object_16"
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials['Material.005']}
              position={[0, 1.312, 1.881]}
              rotation={[0.224, Math.PI / 2, 0]}
              scale={0.001}
            />
            <mesh
              name="Object_24"
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials['Material.017']}
              position={[0, 1.312, 1.881]}
              rotation={[0.276, Math.PI / 2, 0]}
              scale={0.001}
            />
            <mesh
              name="Object_26"
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials['Material.007']}
              position={[0, 1.312, 1.881]}
              rotation={[0.276, Math.PI / 2, 0]}
              scale={0.001}
            />
            <mesh
              name="Object_28"
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials['Material.006']}
              position={[0, 1.312, 1.881]}
              rotation={[0.276, Math.PI / 2, 0]}
              scale={0.001}
            />
            <mesh
              name="Object_30"
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials['Material.012']}
              position={[0, 1.312, 1.881]}
              rotation={[0.276, Math.PI / 2, 0]}
              scale={0.001}
            />
            <mesh
              name="Object_32"
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials['Material.013']}
              position={[0, 1.312, 1.881]}
              rotation={[0.276, Math.PI / 2, 0]}
              scale={0.001}
            />
          </group>
        </group>
      </group>
    </group>
  )
});

export default HatModel;
useGLTF.preload("/models/hat-transformed.glb");
