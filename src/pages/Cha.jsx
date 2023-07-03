import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../../Model.jsx';

export default function Cha() {
   return (
      <Canvas
         camera={{ position: [2, 0, 12.25], fov: 10 }}
         style={{
            // backgroundColor: '#111a21',
            width: '50vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0.050, -1, 0]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}