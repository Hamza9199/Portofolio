"use client";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  const { scene, materials } = useGLTF("/models/wizard-transformed.glb");
  const groupRef = useRef();
  const baseXRef = useRef(null);
  const baseYRef = useRef(null);
  const lastYRef = useRef(null);

  const wheelMeshesRef = useRef([]);
  const wheelInitRotRef = useRef(new Map());
  const wheelAngleRef = useRef(0);

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

  useEffect(() => {
    if (!scene) return;
    const patterns = [/wheel/i, /tyre/i, /tire/i, /rim/i, /guma/i, /felg/i];
    const wheels = [];
    scene.traverse((obj) => {
      if (obj && obj.isMesh && typeof obj.name === "string") {
        if (patterns.some((re) => re.test(obj.name))) {
          wheels.push(obj);
        }
      }
    });
    wheelMeshesRef.current = wheels;
    wheelInitRotRef.current.clear();
    wheels.forEach((w) => {
      wheelInitRotRef.current.set(w, { x: w.rotation.x, y: w.rotation.y, z: w.rotation.z });
    });
  }, [scene]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    if (baseXRef.current === null) baseXRef.current = groupRef.current.position.x || 0;
    if (baseYRef.current === null) baseYRef.current = groupRef.current.position.y || 0;
    if (lastYRef.current === null) lastYRef.current = baseYRef.current;

    const t = clock.elapsedTime;

    groupRef.current.position.x = baseXRef.current + Math.sin(t * 0.8) * 0.5;
    groupRef.current.rotation.y = Math.sin(t * 0.6) * 0.05;

    const bob = Math.sin(t * 1.3) * 0.15;
    const newY = baseYRef.current + bob;
    const dy = newY - (lastYRef.current ?? newY);
    groupRef.current.position.y = newY;
    lastYRef.current = newY;

    const rotFactor = 12; // radians per unit Y
    wheelAngleRef.current += Math.abs(dy) * rotFactor;

    const angle = wheelAngleRef.current;
    const wheels = wheelMeshesRef.current;
    if (wheels && wheels.length) {
      wheels.forEach((w) => {
        const init = wheelInitRotRef.current.get(w) || { x: 0, y: 0, z: 0 };
        w.rotation.x = init.x + angle;
      });
    }
  });

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      position={[-0.1, 1, 0]}
      rotation={[0, 0, 0]}
      scale={0.02}
    >
      <primitive object={scene} />
    </group>
  );
});

export default Wizard;
useGLTF.preload("/models/wizard-transformed.glb");
