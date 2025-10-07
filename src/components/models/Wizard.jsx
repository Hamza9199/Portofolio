"use client";
import React, { useEffect  } from "react";
import { useGLTF } from "@react-three/drei";

const Wizard = React.memo(function Wizard(props) {
  const { nodes, materials } = useGLTF("/models/wizard-transformed.glb");

  useEffect(() => {
    Object.values(materials).forEach((m) => {
      if (!m || !m.isMaterial) return;
      if (!m.userData.__orig) {
        m.userData.__orig = {
          color: m.color ? m.color.clone() : null,
          emissiveIntensity:
            typeof m.emissiveIntensity === "number" ? m.emissiveIntensity : undefined,
          envMapIntensity:
            typeof m.envMapIntensity === "number" ? m.envMapIntensity : undefined,
          roughness: typeof m.roughness === "number" ? m.roughness : undefined,
          metalness: typeof m.metalness === "number" ? m.metalness : undefined,
        };
      }
      if (m.userData.__darkenedApplied) return;
      const o = m.userData.__orig;
      if (o.color && m.color) m.color.copy(o.color).multiplyScalar(0.85);
      if (o.emissiveIntensity !== undefined) m.emissiveIntensity = o.emissiveIntensity * 0.7;
      if (o.envMapIntensity !== undefined) m.envMapIntensity = o.envMapIntensity * 0.6;
      if (o.roughness !== undefined) m.roughness = Math.min(1, o.roughness + 0.1);
      if (o.metalness !== undefined) m.metalness = Math.max(0, o.metalness - 0.05);
      m.needsUpdate = true;
      m.userData.__darkenedApplied = true;
    });
  }, [materials]);



  return (
    <group {...props} dispose={null}>
      <group >
        <group name="RedBull_V2_lp">
          <mesh
            name="RedBull_V2_lp_Material_#25_0"
            castShadow
            receiveShadow
            geometry={nodes['RedBull_V2_lp_Material_#25_0'].geometry}
            material={materials.Material_25}
            position={[-1, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.02}
          />
        </group>
      </group>
    </group>
  );
});

export default Wizard;
useGLTF.preload("/models/wizard-transformed.glb");
