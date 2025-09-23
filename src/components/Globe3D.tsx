import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function GlobeCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += 0.002;
      wireframeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group>
      {/* Main globe sphere */}
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#4FCFD0"
          transparent
          opacity={0.1}
          emissive="#4FCFD0"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {/* Wireframe overlay */}
      <Sphere ref={wireframeRef} args={[2.02, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#8CF8F5"
          wireframe
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Ambient glow effect */}
      <Sphere args={[2.5, 16, 16]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#4FCFD0"
          transparent
          opacity={0.05}
        />
      </Sphere>

      {/* Pulsing inner core */}
      <Sphere args={[0.5, 16, 16]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#8CF8F5"
          emissive="#8CF8F5"
          emissiveIntensity={0.8}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="w-full h-full min-h-[400px] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#4FCFD0" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8A8CF8" />
        
        <GlobeCore />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
      
      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}