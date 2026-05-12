"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SynthGrid from "./SynthGrid";

export default function SynthCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <Suspense fallback={null}>
        <SynthGrid />
      </Suspense>
    </Canvas>
  );
}
