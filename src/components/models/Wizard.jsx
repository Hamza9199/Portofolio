"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  const { nodes, materials } = useGLTF("/models/wizard-transformed.glb");
  const { size, camera } = useThree();

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

  const wrapperRef = useRef();
  useLayoutEffect(() => {
    const g = wrapperRef.current;
    if (!g) return;

    g.rotation.set(0, Math.PI, 0);
    let y = -5;

    try {
      if (camera && size) {
        if (camera.isPerspectiveCamera) {
          const vFOV = (camera.fov * Math.PI) / 180;
          const dist = Math.abs(camera.position.z - 0);
          const worldH = 2 * Math.tan(vFOV / 2) * dist;
          const perPx = worldH / size.height;
          y += perPx * 300; // move up by 20px
        } else if (camera.isOrthographicCamera) {
          const worldH = Math.abs(camera.top - camera.bottom);
          const perPx = worldH / size.height;
          y += perPx * 20;
        }
      }
    } catch {}

    g.position.set(0, y, 0);
    g.scale.set(0.6, 0.6, 0.6);
    g.updateWorldMatrix(true, true);
  }, [size, camera]);

  return (
    <group {...props} dispose={null}>
      <group ref={wrapperRef}>
        <group name="RedBull_V2_lp">
          <mesh
            name="RedBull_V2_lp_Material_#25_0"
            castShadow
            receiveShadow
            geometry={nodes['RedBull_V2_lp_Material_#25_0'].geometry}
            material={materials.Material_25}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
});

export default Wizard;
useGLTF.preload("/models/wizard-transformed.glb");
