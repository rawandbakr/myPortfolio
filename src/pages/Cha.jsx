import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from '../../public/Model.jsx'

export default function Cha() {
   
   return (
      <Canvas
         camera={{ position: [0,15, 10], fov:8}}
         style={{
            width: '60vw',
            height: '100vh',
         }}
         
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
            <Model position={[0, -1,0]} />
         </Suspense>
         <OrbitControls autoRotate={'true'} />
      </Canvas>
   );
}