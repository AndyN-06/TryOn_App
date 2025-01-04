import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
  // Load the 3D model
  const { scene } = useGLTF('/models/man.glb');
  return <primitive object={scene} />;
}

const App: React.FC = () => {
  return (
    <div>
      {/* HTML Content */}
      <h1 style={{ textAlign: 'center' }}>3D Model Viewer</h1>

      {/* 3D Scene */}
      <div style={{ width: '100vw', height: '90vh' }}>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {/* Replace <div> with a valid 3D fallback */}
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default App;
