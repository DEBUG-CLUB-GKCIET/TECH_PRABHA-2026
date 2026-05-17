"use client";
import { Float, Stars, Sparkles } from "@react-three/drei";

export default function SynthGrid() {
  // A high-end, premium deep cyber grid with floating geometry
  return (
    <>
      <color attach="background" args={["#030008"]} />
      <fog attach="fog" args={["#030008", 5, 20]} />

      <Sparkles
        count={500}
        scale={15}
        size={2}
        speed={0.4}
        color="#00f0ff"
        opacity={0.3}
      />
      <Stars
        radius={5000}
        depth={50}
        count={50}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, -0.5, -4]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshStandardMaterial
            color="#7000ff"
            wireframe={true}
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.3}>
        <mesh position={[3, 1, -6]} rotation={[0, Math.PI / 3, 0]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#00f0ff"
            wireframe={true}
            transparent
            opacity={0.1}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh position={[-3, -1, -5]} rotation={[Math.PI / 6, 0, Math.PI / 6]}>
          <torusGeometry args={[1.5, 0.4, 16, 100]} />
          <meshStandardMaterial
            color="#ff00ff"
            wireframe={true}
            transparent
            opacity={0.1}
          />
        </mesh>
      </Float>

      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
    </>
  );
}
