"use client";
import { Environment, OrbitControls, Bounds, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense, useEffect, useState } from "react";

const RenderModel = ({ children, className, fit = true }) => {
  const { active } = useProgress();
  const [ready, setReady] = useState(() => !active);

  useEffect(() => {
    if (active) {
      setReady(false);
      return;
    }
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [active]);

  return (
    <Canvas
      className={clsx(
        "w-screen h-screen -z-10 relative transition-opacity duration-200",
        className,
        ready ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      shadows={false}
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 8], fov: 45 }}
    >
      <Suspense fallback={null}>
        {fit ? (
          <Bounds fit clip margin={1.2} maxDuration={0}>
            <group>{children}</group>
          </Bounds>
        ) : (
          <group>{children}</group>
        )}
      </Suspense>
      <ambientLight intensity={0.6} />
      <Environment preset="dawn" />
      <OrbitControls
        makeDefault
        enabled={false}
        enableDamping={false}
        enableZoom={false}
        enableRotate={false}
        enablePan={false}
      />
    </Canvas>
  );
};

export default RenderModel;
