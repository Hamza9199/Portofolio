"use client";
import { Environment, OrbitControls, Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
      camera={{ position: [0, 0.6, 8], fov: 45 }}
    >
      <Suspense fallback={null}>
        <Bounds fit clip margin={1.2}>
          <group>{children}</group>
        </Bounds>
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
