"use client";
import React, { useCallback, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Staff = React.memo(function Staff(props) {
  const { nodes, materials } = useGLTF("/models/staff-transformed.glb");
  const carRef = useRef(null);
  const wheelRefs = useRef([]);
  const baseTransform = useRef(null);

  const registerWheel = useCallback((wheel) => {
    if (wheel && !wheelRefs.current.includes(wheel)) {
      wheelRefs.current.push(wheel);
    }
  }, []);

  useFrame(({ clock }, delta) => {
    if (!carRef.current) return;

    if (!baseTransform.current) {
      baseTransform.current = {
        position: carRef.current.position.clone(),
        rotation: carRef.current.rotation.clone(),
      };
    }

    const { position, rotation } = baseTransform.current;
    const t = clock.getElapsedTime();

    carRef.current.position.set(
      position.x + Math.sin(t * 0.4) * 0.25,
      position.y + Math.sin(t * 0.8) * 0.05,
      position.z + Math.cos(t * 0.4) * 0.2
    );
    carRef.current.rotation.set(
      rotation.x,
      rotation.y + Math.sin(t * 0.5) * 0.2,
      rotation.z + Math.sin(t * 0.6) * 0.05
    );

    wheelRefs.current.forEach((wheel) => {
      wheel.rotation.x -= delta * 8;
    });
  });

  return (
    <group {...props} dispose={null} ref={carRef}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 5.2, 1.9, 3.3]} scale={2.01} position={[-0.5, -1, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Front_Wheels002_0"
                ref={registerWheel}
                position={[-0.921, 0.274, 0.909]}
                scale={2.182}
              >
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.FRONT_RIM}
                />
                <mesh
                  name="Object_5"
                  geometry={nodes.Object_5.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials['MEDIUM_TYRE.001']}
                />
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.BRAKES}
                />
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.SCREW}
                />
              </group>
              <group
                name="Front_Wheels003_1"
                ref={registerWheel}
                position={[-0.921, 0.274, 1.799]}
                scale={2.182}
              >
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials.FRONT_RIM}
                />
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.SOFT_TYRE}
                />
                <mesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials.BRAKES}
                />
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.SCREW}
                />
              </group>
              <group
                name="Front_Wheels004_2"
                ref={registerWheel}
                position={[-0.921, 0.274, 0.039]}
                scale={2.182}
              >
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.FRONT_RIM}
                />
                <mesh
                  name="Object_17"
                  geometry={nodes.Object_17.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials.HARD_TYRE}
                />
                <mesh
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials.BRAKES}
                />
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials.SCREW}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
});

export default Staff;
useGLTF.preload("/models/staff-transformed.glb");
