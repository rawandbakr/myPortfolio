import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Model } from "../../public/Model.jsx";
import CanvasLoader from "../components/Loader.jsx";

export default function Cha() {
  return (
    <Canvas
      camera={{ position: [0, 15, 10], fov: 8 }}
      style={{
        width: "490px",
        height: "100vh"
            }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={<CanvasLoader />}>
        <Model position={[0, -1, 0]} />
      </Suspense>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={0}
        minPolarAngle={1}
      />
      <Preload all={true} />
    </Canvas>
  );
}
