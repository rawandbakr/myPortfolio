import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../../public/Model.jsx'

export default function Cha() {
   
   return (
      <Canvas
         camera={{ position: [1, 0, 12.25], fov: 15 }}
         style={{
            width: '75vh',
            height: '100vh',
         }}
         
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.05, -1, 0]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}